# Naija Trivia - Mobile App

This is the mobile frontend for the Naija Trivia application, built using [Flutter](https://flutter.dev) for cross-platform support on both iOS and Android.

## 📱 Development Focus
Currently, we are focusing entirely on building the **frontend** UI and interactions. The backend integration will be handled in a later phase.

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- [Flutter SDK](https://docs.flutter.dev/get-started/install)
- [Android Studio](https://developer.android.com/studio) (for Android emulator and build tools)
- [Xcode](https://developer.apple.com/xcode/) (for iOS simulation, Mac only)
- A connected physical device or a running emulator/simulator.

## 🚀 Getting Started

1. **Install Dependencies**
   Run the following command to fetch the necessary Flutter packages:
   ```bash
   flutter pub get
   ```

2. **Run the App**
   To run the application on your connected device or emulator:
   ```bash
   flutter run
   ```

## 🏗 Project Structure
- `lib/`: Contains the main Dart code and UI components.
  - `main.dart`: The entry point of the application.
- `android/`: Android-specific configuration files.
- `ios/`: iOS-specific configuration files.

## 💡 Notes
- Make sure to accept Android licenses if you haven't already: `flutter doctor --android-licenses`
- You can run `flutter doctor` at any time to verify that your environment is set up correctly.
