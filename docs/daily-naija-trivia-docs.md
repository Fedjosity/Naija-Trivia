# 🇳🇬 Daily Naija Trivia --- Product Requirement Document

## 1. Product Vision

Daily Naija Trivia is a culturally immersive trivia platform designed to
celebrate Nigerian history, culture, sports, music, and geography
through engaging gameplay.

The product aims to become the digital knowledge hub for Nigerian
culture by combining:

-   Education
-   Entertainment
-   Competition
-   Cultural preservation

The platform leverages AI‑generated content, offline-first architecture,
and gamified learning mechanics to create a habit‑forming daily
experience for Nigerians at home and in the diaspora.

------------------------------------------------------------------------

# 2. Problem Statement

Despite Nigeria's rich cultural heritage, there is no engaging digital
platform that systematically teaches Nigerian history and culture
through interactive experiences.

Problems today:

-   Cultural knowledge among young Nigerians is declining
-   Nigerian history education is often perceived as boring
-   Diaspora children lack tools to learn about Nigerian heritage
-   Existing trivia apps rarely focus on Nigerian knowledge

Daily Naija Trivia solves this by making Nigerian knowledge fun,
competitive, and accessible.

------------------------------------------------------------------------

# 3. Product Goals

## Primary Goals

-   Become the #1 Nigerian trivia platform
-   Reach 100K users in year one
-   Achieve 10% paid conversion
-   Build a daily engagement habit

## Secondary Goals

-   Become a digital archive for Nigerian knowledge
-   Partner with schools and educational institutions
-   Build a community-driven trivia ecosystem

------------------------------------------------------------------------

# 4. Target Audience

## Nigerian Youth (16--35)

-   Mobile-first generation
-   Enjoy competitive games
-   Interested in pop culture and history

## Nigerian Diaspora Families

-   Parents teaching children Nigerian heritage
-   Cultural identity preservation

## Students

-   Secondary school and university students
-   Studying history, geography, politics

## Trivia Enthusiasts

-   Competitive quiz players
-   Gamification lovers

------------------------------------------------------------------------

# 5. User Journey

## Phase 1: Onboarding

### Splash Experience

Animated intro celebrating Nigeria:

-   Afrobeat music
-   Cultural imagery
-   Nigerian landmarks

Goal: Instant emotional connection to Nigeria.

### Authentication

Authentication handled through Firebase Authentication.

Supported login methods:

-   Google
-   Apple
-   Email
-   Anonymous guest mode

Firebase enables free OAuth branding and simple scaling.

### Cultural Profiling

Users choose interest categories such as:

-   Afrobeats
-   Nigerian Politics
-   Nollywood
-   Sports
-   Nigerian History
-   Geography
-   Nigerian Food

These interests personalize the dashboard.

------------------------------------------------------------------------

# 6. Core Gameplay Loop

## Dashboard

Displays:

-   Daily Challenge
-   Streak counter
-   Coin balance
-   Trending trivia packs
-   Leaderboards

## Explore

Users browse trivia packs by category:

-   Nigerian History
-   Nigerian States
-   Music
-   Sports
-   Politics
-   Food
-   Languages

Example packs:

-   "90s Nollywood Legends"
-   "Super Eagles History"
-   "Famous Nigerian Leaders"

## Pack Download (Offline Sync)

Trivia packs are downloaded as JSON files and stored locally.

Offline storage options:

-   Local database
-   Key-value storage

Users can play packs without internet after download.

## Trivia Session

Each pack contains 10--15 questions.

Each question includes:

-   question
-   options
-   correct_answer
-   explanation
-   cultural_context
-   difficulty
-   tags

### Scoring System

Points awarded based on:

-   Accuracy
-   Speed
-   Streak multiplier

Example:

Correct answer = 100 points\
Speed bonus = 50 points\
Streak bonus = 25 points

## Completion Screen

Displays:

-   Final score
-   Pack leaderboard
-   Coins earned
-   Cultural insights

Users are encouraged to share their results.

------------------------------------------------------------------------

# 7. Social & Competitive Systems

## Leaderboards

Types:

-   Daily
-   Weekly
-   All-time

Levels:

-   National
-   State
-   Category

Example leaderboard:

Top History Players in Lagos.

## Arena Mode

### Live Battles

Real-time 1v1 trivia matches.

### Asynchronous Challenges

Users challenge friends to beat their score.

------------------------------------------------------------------------

# 8. Gamification System

## Streaks

Daily play streaks unlock:

-   Bonus coins
-   Exclusive badges

## Achievements

Examples:

-   History Scholar
-   Afrobeats Guru
-   Naija Genius

## Badges

Users collect and display badges on their profile.

------------------------------------------------------------------------

# 9. Content Engine (Admin)

AI-assisted content generation using Google Gemini.

Pipeline:

AI Generation → Human Review → Pack Assembly → Publish

Admin dashboard tools:

-   Question editor
-   Difficulty tagging
-   Pack creation
-   Leaderboard management

------------------------------------------------------------------------

# 10. Monetization Strategy

## Naija Gold Subscription

Pricing:

₦1,500 per month\
₦15,000 per year

Benefits:

-   Ad-free gameplay
-   2x coin rewards
-   Premium trivia packs
-   Exclusive cosmetic rewards

## Sponsored Trivia Packs

Brands sponsor themed trivia packs.

Example:

MTN Music Legends Trivia

Rewards may include:

-   Airtime
-   Data bundles
-   Gift cards

Revenue sources:

-   Sponsorship placement fees
-   Promotional campaigns

## In-App Purchases

Coin bundles priced between ₦200 and ₦2000.

Coins unlock:

-   Powerups
-   Cosmetic items
-   Premium trivia packs

## Rewarded Ads

Players watch ads to:

-   Unlock premium packs
-   Continue streaks
-   Earn bonus coins

------------------------------------------------------------------------

# 11. Technical Architecture

## Frontend

Mobile app built with:

-   React Native
-   Expo

Supporting tools:

-   React Query
-   Local storage solutions
-   Navigation libraries

## Backend

Powered by Firebase services:

-   Firebase Authentication
-   Firestore Database
-   Cloud Functions
-   Cloud Storage

## AI Content Generation

Gemini API generates:

-   Trivia questions
-   Explanations
-   Cultural context

Human moderation ensures accuracy and cultural sensitivity.

------------------------------------------------------------------------

# 12. Growth Strategy

## Viral Sharing

Users share:

-   High scores
-   Achievements
-   Trivia challenges

Primary sharing platform: WhatsApp.

## Influencer Strategy

Partner with:

-   Nigerian culture creators
-   History YouTubers
-   Education influencers

## School Partnerships

Introduce educational trivia packs to:

-   Secondary schools
-   Universities

------------------------------------------------------------------------

# 13. Key Metrics (KPIs)

## Engagement Metrics

-   Daily Active Users (DAU)
-   Monthly Active Users (MAU)
-   Average session time
-   Day 7 and Day 30 retention

## Revenue Metrics

-   Free-to-paid conversion rate
-   Average revenue per user
-   Ad revenue per user

## Product Metrics

-   Pack completion rate
-   Daily challenge participation
-   Average streak length

------------------------------------------------------------------------

# 14. Risk Analysis

## Content Accuracy

Risk: AI-generated content inaccuracies.

Mitigation:

Human editorial review pipeline.

## Low User Retention

Mitigation:

-   Daily challenges
-   Streak rewards
-   Frequent content updates

## Monetization Resistance

Mitigation:

Maintain a generous free tier.

------------------------------------------------------------------------

# 15. Future Roadmap

Planned Phase 2 features:

-   Multiplayer tournaments
-   User-generated trivia packs
-   Voice-based trivia mode
-   School trivia competitions
-   Cultural mini-documentaries

------------------------------------------------------------------------

# Founder Insight

The long-term competitive advantage is not the game mechanics but the
cultural knowledge database built over time.

Daily Naija Trivia has the potential to become the leading digital
platform for Nigerian cultural learning.
