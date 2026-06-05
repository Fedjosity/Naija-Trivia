# 🇳🇬 Daily Naija Trivia (Mobile App)

Welcome to the React Native (Expo) app for Daily Naija Trivia!

## Getting Started

Follow these steps to run the application locally.

### 1. Install Dependencies
Make sure you are in the `apps/mobile-app` directory, then run:

```bash
npm install
```

### 2. Launch Android Studio Emulator
Since we are testing primarily on Android, open Android Studio, go to the **Virtual Device Manager**, and start your Android Emulator.

### 3. Build the Native Development App
Instead of using Expo Go, we use **Development Builds** to allow full access to custom native modules (like payment gateways). 
First, make sure your Android Emulator is running. Then build the app natively:

```bash
npx expo run:android
```
*(This command will compile the Android app and install it on your emulator. It might take a few minutes the first time.)*

### 4. Start the Development Server
Once the native app is installed on the emulator, you can start the fast-refresh packager for normal development:

```bash
npm start
```
*(If prompted in the terminal, press `a` to open the app. It will now connect to your custom development build instead of Expo Go.)*

## Project Overview & Guidelines

- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **State Management:** Zustand
- **Navigation:** Expo Router
- **Styling:** NativeWind (TailwindCSS)

> [!NOTE]  
> For full architectural guidelines, project rules, and design details, please refer to the `AGENTS.md` file located at the root of the workspace.
