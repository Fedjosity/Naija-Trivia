import * as admin from 'firebase-admin';

// Initialize Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'naija-trivia',
    storageBucket: 'naija-trivia.firebasestorage.app'
  });
}

const db = admin.firestore();

async function seed() {
  console.log('🌱 Starting Database Seeding...');

  try {
    // 1. Seed Admin User
    const adminUid = 'nTY4QomnMYPj88fNbkvWwLTMaLi2';
    await db.collection('users').doc(adminUid).set({
      displayName: 'Admin User',
      email: 'admin@naijatrivia.app',
      isAdmin: true,
      wallet: {
        coins: 1000,
        gems: 50
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      lastLogin: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log('✅ Admin user document created/updated.');

    // 2. Seed Sample Packs
    const packs = [
      {
        id: 'ng-history-001',
        title: 'Nigerian Independence',
        category: 'History',
        questionCount: 10,
        difficulty: 'Intermediate',
        status: 'Published',
        version: '1.0.0',
        coverImage: 'packs/history/ng-history-001.png',
        questions: [] // Simplified for seeding
      },
      {
        id: 'afrobeats-001',
        title: 'Afrobeats Legends',
        category: 'Music',
        questionCount: 8,
        difficulty: 'Beginner',
        status: 'Published',
        version: '1.0.0',
        coverImage: 'packs/music/afrobeats-001.png',
        questions: []
      }
    ];

    for (const pack of packs) {
      await db.collection('packs').doc(pack.id).set({
        ...pack,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`✅ Seeded Pack: ${pack.title}`);
    }

    // 3. Seed Boutique Skins
    const skins = [
      {
        id: 'skin-naija-gold',
        name: 'Naija Gold',
        type: 'Theme',
        price: 500,
        sales: 12,
        status: 'Active',
        preview: 'skins/naija-gold.png'
      },
      {
        id: 'skin-super-eagles',
        name: 'Super Eagles',
        type: 'Avatar',
        price: 350,
        sales: 45,
        status: 'Active',
        preview: 'skins/super-eagles.png'
      }
    ];

    for (const skin of skins) {
      await db.collection('skins').doc(skin.id).set({
        ...skin,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`✅ Seeded Skin: ${skin.name}`);
    }

    console.log('🚀 Seeding complete! Database is now live.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
