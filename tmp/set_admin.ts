import * as admin from 'firebase-admin';

// Initialize with application default credentials or specific config
admin.initializeApp({
  projectId: 'naija-trivia'
});

const db = admin.firestore();
const uid = 'nTY4QomnMYPj88fNbkvWwLTMaLi2';

async function setAdmin() {
  try {
    await db.collection('users').doc(uid).set({
      isAdmin: true
    }, { merge: true });
    console.log(`Successfully set isAdmin: true for user ${uid}`);
  } catch (error) {
    console.error('Error setting admin flag:', error);
  }
}

setAdmin();
