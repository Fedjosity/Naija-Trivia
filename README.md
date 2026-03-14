# 🇳🇬 Daily Naija Trivia

### _Celebrating Nigerian Culture, One Question at a Time._

Daily Naija Trivia is a premium, offline-first mobile platform designed to reconnect Nigerians and the world with the rich tapestry of Nigeria's history, sports, music, and pop culture. Built with a "million-dollar" aesthetic, it combines cutting-edge AI content generation with a seamless, high-performance mobile experience.

---

## 🌟 The Vision

In an era of fleeting content, **Daily Naija Trivia** stands as a digital archive of cultural excellence. We aim to be the #1 trivia app in Africa by delivering high-fidelity content that educates as much as it entertains.

---

## 🏗️ Architecture: The Monorepo Powerhouse

Powered by **Turborepo**, our stack is designed for scale and shared logic.

```mermaid
graph TD
    subgraph "Apps"
        Admin["Admin Dashboard (Next.js 14)"]
        Mobile["Mobile App (Expo / React Native)"]
    end

    subgraph "Packages (Shared Logic)"
        Schema["@naija/content-schema (Zod/TS)"]
        Utils["@naija/utils (Helpers)"]
    end

    subgraph "Content Storage"
        Drafts["content/drafts (JSON)"]
        Approved["content/approved (JSON Pack)"]
    end

    Admin --> Schema
    Mobile --> Schema
    Admin --> Drafts
    Drafts --> Admin
    Admin --> Approved
    Approved --> Mobile (Offline Sync)
```

### 🛰️ Core Components

- **`apps/admin-dashboard`**: The "Content Factory." Leverages Google Gemini AI to generate culturally accurate questions, which are then curated and approved by humans.
- **`apps/mobile-app`**: A high-performance Expo app using **MMKV** for lightning-fast offline storage and **NativeWind** for a sleek, responsive UI.
- **`packages/content-schema`**: The source of truth for our data structure, ensuring 100% type-safety between the AI generator and the mobile UI.

---

## 🤖 The AI Content Engine

We don't just "ask questions." Our AI engine (powered by `Gemini Pro`) is tuned via complex system prompts to understand the nuances of Nigerian history—from the pre-colonial Oyo Empire to the latest Afrobeats trends.

---

## 🚀 Roadmap: To the Moon

- [ ] **Multi-lingual Support**: Trivia in Pidgin, Yoruba, Igbo, and Hausa.
- [ ] **Head-to-Head Challenges**: Real-time multiplayer trivia battles.
- [ ] **Cultural Badges**: Collectible NFTs/Digital assets for mastering specific historical eras.
- [ ] **AR Cultural Artifacts**: View 3D models of Nigerian artifacts upon answering correctly.

---

## 🛠️ Developer Setup

1. **Clone & Install**
   ```bash
   pnpm install
   ```
2. **Environment**
   Add your `GOOGLE_GENERATIVE_AI_API_KEY` to `apps/admin-dashboard/.env.local`.
3. **Launch**
   ```bash
   pnpm dev # Runs Dashboard & Mobile concurrently
   ```

---

## 💎 Design Philosophy

Our design prompt prioritizes **Emerald Greens**, **Metallic Golds**, and **Glassmorphism**. For the full visual specification and mockup references, refer to our [Premium Design Prompt](C:\Users\User.gemini\antigravity\brain\be58074c-513a-4374-9466-3261b1772d59\design_prompt.md).
