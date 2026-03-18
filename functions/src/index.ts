import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// Maximum allowed score values to validate against tempering
const MAX_SCORE_LIMIT = 5000; // Hard cap for extreme cases
const MIN_SPEED_PER_QUESTION = 1.5; // Seconds per question

/**
 * Initialize the user profile on account creation
 */
export const onUserCreate = functions.auth.user().onCreate(async (user) => {
    try {
        await db.collection("users").doc(user.uid).set({
            uid: user.uid,
            displayName: user.displayName || "Naija Scholar",
            email: user.email,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            culturalInterests: [],
            stats: {
                totalScore: 0,
                currentStreak: 0,
                highestStreak: 0,
                packsCompleted: 0
            },
            wallet: {
                naijaCoins: 0,
                isNaijaGold: false
            }
        });
        console.log(`Created profile for user: ${user.uid}`);
    } catch (error) {
        console.error(`Error creating profile for user ${user.uid}:`, error);
    }
});

/**
 * Securely submit a score for a trivia pack
 * Validates performance and updates sharded leaderboards
 */
export const submitScore = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "User must be authenticated to submit scores.");
    }

    const uid = context.auth.uid;
    const { score, correctAnswers, timeTaken, packId, region, category } = data;

    // Server-side Score Validation 
    if (!score || !correctAnswers || !timeTaken || !packId || !region || !category) {
        throw new functions.https.HttpsError("invalid-argument", "Missing required score properties.");
    }

    if (score > MAX_SCORE_LIMIT) {
        console.warn(`Tamper alert: User ${uid} submitted impossible score ${score}.`);
        throw new functions.https.HttpsError("out-of-range", "Score exceeds absolute maximum possible value.");
    }

    // Assuming a standard pack has at least 5-10 questions, but we'll use a safer fixed floor for now
    // or if the client sends questionCount, we could use that.
    const minTimeFloor = 5; // Absolute minimum seconds for any pack
    if (timeTaken < minTimeFloor) {
        console.warn(`Tamper alert: User ${uid} submitted impossible speed ${timeTaken}s.`);
        throw new functions.https.HttpsError("out-of-range", "Completion speed is physically impossible.");
    }

    // Rate Limiting / Abuse Prevention
    const completedPackRef = db.collection("users").doc(uid).collection("completedPacks").doc(packId);
    
    return await db.runTransaction(async (transaction) => {
        const completedDoc = await transaction.get(completedPackRef);
        
        if (completedDoc.exists) {
            throw new functions.https.HttpsError("already-exists", "Score already submitted for this pack.");
        }

        // Sharded Leaderboard Distribution to prevent "hot documents"
        const shardId = Math.floor(Math.random() * 5).toString();
        const shardRef = db.doc(`leaderboards/daily_${region}_${category}/history/shard_${shardId}`);
        
        // Save the valid submission
        transaction.set(completedPackRef, {
            score,
            completionTime: timeTaken,
            correctAnswers,
            submittedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        // Add score to leaderboard shard
        transaction.set(shardRef, {
            [`user_${uid}`]: score
        }, { merge: true });

        // Update global user stats
        const userRef = db.collection("users").doc(uid);
        transaction.update(userRef, {
            "stats.totalScore": admin.firestore.FieldValue.increment(score),
            "stats.packsCompleted": admin.firestore.FieldValue.increment(1)
        });

        return { success: true, message: "Score validated successfully." };
    });
});
