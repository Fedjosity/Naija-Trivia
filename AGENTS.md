# AGENT.md

# 🇳🇬 Daily Naija Trivia

AI-assisted Nigerian trivia platform built with Flutter.

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

- Flutter
- Dart

## State Management

- Riverpod

## Navigation

- GoRouter

## Networking

- Dio

## Serialization / Models

- Freezed
- json_serializable

## Local Storage

- Hive / Isar / SharedPreferences (depending on use case)

## Backend

- Firebase / Custom API

## Authentication

- Firebase Auth

## Animations

- Flutter Animate
- Rive
- Lottie

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

Every class should have one responsibility.

Examples:

- UI widgets render UI
- repositories handle data
- services handle business operations
- providers manage state

---

## 4. Feature-Based Architecture

The app is organized by feature, not by file type globally.

Correct:
lib/features/auth/
lib/features/trivia/
lib/features/profile/

Avoid:
lib/screens/
lib/widgets/
lib/controllers/

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

Avoid unnecessary rebuilds.

Optimize:

- Riverpod providers
- widget trees
- image loading
- animations

Never sacrifice UX smoothness.

Target:

- 60fps interactions
- instant navigation feel
- low memory usage

---

# 4. Architectural Guidelines

The project uses Clean Architecture.

Structure:

Presentation → Domain → Data

Dependencies only flow downward.

---

# 5. Folder Structure

```txt
lib/
│
├── core/
│   ├── constants/
│   ├── theme/
│   ├── utils/
│   ├── services/
│   ├── network/
│   ├── errors/
│   └── widgets/
│
├── features/
│   ├── auth/
│   │   ├── data/
│   │   │   ├── datasource/
│   │   │   ├── models/
│   │   │   └── repositories/
│   │   │
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── usecases/
│   │   │
│   │   └── presentation/
│   │       ├── pages/
│   │       ├── widgets/
│   │       └── providers/
│   │
│   ├── trivia/
│   ├── leaderboard/
│   ├── profile/
│   ├── onboarding/
│   └── settings/
│
├── shared/
│   ├── components/
│   ├── extensions/
│   └── helpers/
│
└── main.dart
```

---

# 6. State Management Rules

Riverpod is the standard state management solution.

Rules:

- Do not use setState for scalable business logic.
- Keep providers focused.
- Avoid giant global providers.
- Separate UI state from business state.

Preferred:

- AsyncNotifier
- StateNotifier
- Provider families

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

snake_case.dart

Examples:

- trivia_card.dart
- leaderboard_page.dart

---

## Classes

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
- refactor: simplify auth provider

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

Antigravity MUST update this AGENT.md whenever:

- architecture changes
- major bugs are fixed
- project conventions evolve
- recurring issues are discovered
- new tooling is introduced
- folder structure changes
- technical decisions are finalized

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

Duplicate API requests caused by unnecessary provider rebuilds.

### Root Cause

Provider dependencies were watching entire objects instead of specific values.

### Fix

Refactored provider dependencies using selective watching.

### Prevention

Always use:
ref.watch(provider.select(...))

when only specific values are needed.

---

# 14. Code Quality Standards

Before merging code:

Ensure:

- flutter analyze passes
- no unused imports
- no debug prints
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

- **Frontend Foundation:** Initialized basic Clean Architecture directories (`lib/core`, `lib/features`).
- **Routing:** Configured `GoRouter` in `lib/core/router/app_router.dart`.
- **Theming:** Configured `AppTheme` utilizing exact Stitch Tailwind colors and `google_fonts` (Plus Jakarta Sans, Inter).
- **Screens Implemented (UI Match):**
  - Welcome to the Culture (`/welcome`)
  - Join the Elite (`/join`)
  - Email Sign Up (`/email-signup`)
  - Pick Your Path (`/pick-path`)
- **Assets:** Downloaded and linked persistent hero and background images locally.

---
