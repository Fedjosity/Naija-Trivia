# AGENT.md

# 🇳🇬 Daily Naija Trivia

AI-assisted Nigerian trivia platform built with React Native.

---

# 1. Project Overview

Daily Naija Trivia is a culturally immersive Nigerian trivia platform designed to educate, entertain, and celebrate Nigeria through interactive gameplay.

The platform focuses on:

- Nigerian history
- culture
- food
- politics
- sports
- music
- entertainment
- geography
- slang
- current affairs

The application is designed to feel:

- modern
- premium
- fast
- playful
- proudly Nigerian

Core product principles:

- Offline-first experience
- Smooth mobile UX
- Gamified learning
- Scalable architecture
- AI-assisted content generation
- Production-ready engineering standards

---

# 2. Tech Stack

## Frontend

- React Native (Expo)
- TypeScript

## State Management

- Zustand

## Navigation

- Expo Router

## Networking

- Axios or Fetch API

## Styling

- NativeWind (TailwindCSS) / StyleSheet

## Local Storage

- AsyncStorage / MMKV / SQLite (depending on use case)

## Backend

- Firebase / Custom API

## Authentication

- Firebase Auth

## Animations

- React Native Reanimated
- Lottie React Native

## Architecture

- Clean Architecture

---

# 3. Development Philosophy

The project follows these engineering principles:

## 1. Scalability First

Code must be structured for long-term scalability.

Avoid:

- massive files
- duplicated logic
- tightly coupled systems
- shortcut architecture

Every feature should be modular.

---

## 2. Readability Over Cleverness

Code should be understandable by future developers immediately.

Prefer:

- explicit naming
- clean abstraction
- small reusable components

Avoid:

- over-engineering
- magic code
- hidden side effects

---

## 3. Single Responsibility Principle

Every module should have one responsibility.

Examples:

- UI components render UI
- repositories handle data
- services handle business operations
- stores manage state

---

## 4. Feature-Based Architecture

The app is organized by feature, not by file type globally.

Correct:
src/features/auth/
src/features/trivia/
src/features/profile/

Avoid:
src/screens/
src/components/
src/controllers/

at root scale.

---

## 5. Offline-First Thinking

The app should gracefully handle:

- poor network
- unstable connections
- intermittent internet

Caching and local persistence are important.

---

## 6. Performance Matters

Avoid unnecessary re-renders.

Optimize:

- Zustand selectors
- React hooks (`useMemo`, `useCallback`)
- image loading
- animations

Never sacrifice UX smoothness.

Target:

- 60fps interactions
- instant navigation feel
- low memory usage

---

# 4. Architectural Guidelines

The project uses Clean Architecture principles adapted for React.

Structure:

Presentation → Domain → Data

Dependencies only flow downward.

---

# 5. Folder Structure

```txt
src/
│
├── core/
│   ├── constants/
│   ├── theme/
│   ├── utils/
│   ├── services/
│   ├── network/
│   ├── errors/
│   └── components/
│
├── features/
│   ├── auth/
│   │   ├── data/
│   │   │   ├── datasources/
│   │   │   ├── models/
│   │   │   └── repositories/
│   │   │
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── usecases/
│   │   │
│   │   └── presentation/
│   │       ├── components/
│   │       └── stores/
│   │
│   ├── onboarding/
│   │   ├── presentation/
│   │   │   ├── components/
│   │   │   └── stores/
│   │
│   ├── trivia/
│   ├── leaderboard/
│   ├── profile/
│   └── settings/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── extensions/
│   └── helpers/
│
└── app/
    ├── (auth)/
    ├── (onboarding)/
    ├── (tabs)/
    └── _layout.tsx
```

---

# 6. State Management Rules

Zustand is the standard state management solution.

Rules:

- Keep stores focused and modular.
- Avoid giant global stores.
- Separate UI state from business state.
- Use selectors to prevent unnecessary re-renders.

---

# 7. Styling Rules

The app visual identity is extremely important.

The design language should feel:

- modern
- elegant
- energetic
- premium Nigerian

---

## Primary Color

Green

Used for:

- primary actions
- highlights
- success states
- branding

Suggested palette:

- #008751
- #00A86B

---

## Secondary Color

Gold

Used for:

- achievements
- rewards
- premium accents
- leaderboard highlights

Suggested palette:

- #D4AF37
- #F4C542

---

## UI Style Rules

### DO

- Use generous spacing
- Use soft rounded corners
- Keep interfaces breathable
- Use subtle motion
- Use smooth transitions
- Maintain visual consistency

### DO NOT

- Overuse gradients
- Use random colors
- Create cluttered screens
- Mix design systems
- Use inconsistent spacing

---

# 8. Animation Philosophy

Animations should enhance UX, not distract from it.

Preferred:

- micro-interactions
- smooth transitions
- subtle scale effects
- stagger animations

Avoid:

- excessive motion
- laggy animations
- long transition durations

Target:

- premium mobile experience

---

# 9. Naming Conventions

## Files

kebab-case.ts or camelCase.ts (follow project consistency)
For components: PascalCase.tsx

Examples:

- TriviaCard.tsx
- auth-repository.ts
- useUserStore.ts

---

## Classes / Components

PascalCase

Examples:

- TriviaCard
- AuthRepository

---

## Variables

camelCase

Examples:

- currentQuestion
- userScore

---

# 10. Git & Collaboration Rules

## Commit Style

Use meaningful commits.

Examples:

- feat: add trivia streak system
- fix: prevent duplicate leaderboard fetch
- refactor: simplify auth store

Avoid:

- "update"
- "fix stuff"
- "changes"

---

# 11. Error Handling

Never silently fail.

Always:

- log meaningful errors
- show user-friendly feedback
- handle loading states properly
- handle empty states gracefully

---

# 12. Antigravity Agent Memory Rules

Antigravity MUST update this AGENTS.md AUTOMATICALLY and PROACTIVELY whenever:

- architecture changes
- major bugs are fixed
- project conventions evolve
- recurring issues are discovered
- new tooling is introduced
- folder structure changes
- technical decisions are finalized
- we do something big or a major change happens

**AUTOMATIC UPDATE RULE**: Do NOT wait for the user to prompt you. Whenever any of the above conditions are met during a session, you MUST use your file editing tools to update this `AGENTS.md` file before concluding your work.

---

## Bug Prevention Rule

When a bug is fixed:

1. Document:
   - root cause
   - fix implemented
   - prevention strategy

2. Add notes under:
   "Known Issues & Resolutions"

3. Ensure the same mistake is not repeated.

---

# 13. Known Issues & Resolutions

## Example Format

### Issue

Duplicate API requests caused by unnecessary component re-renders.

### Root Cause

Components were subscribing to the entire Zustand store instead of specific slices/selectors.

### Fix

Refactored store subscriptions using selectors.

### Prevention

Always use selectors:
const value = useStore((state) => state.specificValue)

when only specific values are needed.

---

# 14. Code Quality Standards

Before merging code:

Ensure:

- `npm run lint` passes
- `npm run typecheck` passes
- no unused imports
- no console.logs
- no hardcoded magic values
- no duplicated business logic

---

# 15. Project Vision

Daily Naija Trivia is not just a trivia app.

It is a digital celebration of Nigerian identity.

The product should feel:

- intelligent
- vibrant
- polished
- culturally authentic
- globally competitive

Every engineering and design decision should support that vision.

---

# 16. Current Progress

- **Stack Transition:** Migrated stack from Flutter to React Native (Expo) + Zustand.
- **Frontend Foundation:** Setting up React Native directory structure.
---
