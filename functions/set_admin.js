const admin = require('firebase-admin');

// Initialize with application default credentials
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
    process.exit(0);
  } catch (error) {
    console.error('Error setting admin flag:', error);
    process.exit(1);
  }
}

setAdmin();
