import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';
import { PackSchema } from '../packages/content-schema/src';

/**
 * Admin Script to upload trivia packs to Firestore and Cloud Storage.
 * Usage: ts-node uploadPack.ts <path-to-json>
 */
async function uploadPack(filePath: string) {
  // Initialize Admin SDK with default credentials (likely from GOOGLE_APPLICATION_CREDENTIALS)
  if (!admin.apps.length) {
    admin.initializeApp({
      storageBucket: 'naija-trivia.firebasestorage.app'
    });
  }

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const packData = JSON.parse(rawData);

    // 1. Validate against Zod Schema
    const validation = PackSchema.safeParse(packData);
    if (!validation.success) {
      console.error("❌ Validation Failed:", validation.error.format());
      return;
    }

    const pack = validation.data;
    const packId = pack.id;

    console.log(`📦 Processing Pack: ${pack.title} (${packId})`);

    // 2. Upload JSON to Cloud Storage (for app download)
    const storagePath = `packs/${packId}.json`;
    await bucket.upload(filePath, {
      destination: storagePath,
      metadata: {
        contentType: 'application/json',
      }
    });
    const [url] = await bucket.file(storagePath).getSignedUrl({
      action: 'read',
      expires: '03-01-2500', // Permanent-ish
    });

    // 3. Register Pack in Firestore Registry
    const packRef = db.collection('packs').doc(packId);
    await packRef.set({
      ...pack,
      downloadUrl: url,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });

    console.log(`✅ Success! Pack ${packId} is live.`);
    console.log(`🔗 Metadata URL: ${url}`);
  } catch (error) {
    console.error("❌ Upload Failed:", error);
  }
}

// Get arguments
const fileArg = process.argv[2];
if (!fileArg) {
  console.log("Usage: npx ts-node uploadPack.ts <file-path>");
  process.exit(1);
}

uploadPack(path.resolve(fileArg));
