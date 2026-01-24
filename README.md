# ANTIGRAVITY — Daily Naija Trivia

A premium, offline-first trivia platform celebrating Nigerian culture.

## Architecture

This is a **Turborepo** monorepo containing:

### Apps
- **`apps/admin-dashboard`**: Next.js 14 App Router (Internal Content Factory).
  - Used to generate content via AI, review drafts, and approve JSON packs.
  - Stack: Next.js, Tailwind CSS, Shadcn UI, Server Actions.
  
- **`apps/mobile-app`**: Expo / React Native (Consumer App).
  - Offline-first iOS/Android app.
  - Stack: Expo SDK, NativeWind, MMKV (Storage), Expo FileSystem.

### Packages
- **`packages/content-schema`**: Shared Zod schemas and TypeScript types for Questions and Packs.
- **`packages/utils`**: Shared helper functions (Dates, Checksums).

### Content
- **`content/drafts`**: AI-generated questions awaiting review.
- **`content/approved`**: Finalized JSON packs ready for distribution.

## Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Run Admin Dashboard**
   ```bash
   pnpm dev --filter admin-dashboard
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Run Mobile App**
   ```bash
   pnpm start --filter mobile-app
   ```
   Scan the QR code with Expo Go.

## Workflow
1. Go to Admin Dashboard > Generate to create new questions.
2. Go to Drafts to review and approve them.
3. Approved questions are saved to `content/approved`.
4. Mobile app downloads these packs for offline play.
