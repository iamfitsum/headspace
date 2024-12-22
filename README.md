# 🌿 Headspace Mobile App

This project is a meditation app inspired by Headspace, built with **Expo** and **React Native**. It offers a serene user experience with guided meditation, audio playback, and stunning animations.

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📥 Installation](#-installation)
- [🧘 How to Use](#-how-to-use)
- [📸 Screenshots](#-screenshots)
- [📦 Dependencies](#-dependencies)
- [🤝 Acknowledgements](#-acknowledgements)
- [📜 License](#-license)

## ✨ Features

- **Meditation List:** Browse a curated list of guided meditations.
- **Audio Playback:** Enjoy relaxing audio using `expo-av`.
- **Smooth Animations:** Delightful transitions and effects powered by `react-native-reanimated`.
- **Responsive Design:** Optimized for various screen sizes.

## 🛠️ Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- **TailwindCSS** (via `nativewind`)
- **React Native Reanimated**
- **Expo AV** (for audio playback)
- **Expo Router** (for navigation)

## 📂 Project Structure

```plaintext
.
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── meditations
│   │   └── audio.mp3
│   └── splash-icon.png
├── babel.config.js
├── global.css
├── index.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── app
│   │   ├── index.tsx
│   │   ├── _layout.tsx
│   │   └── meditation
│   │       └── [id].tsx
│   ├── components
│   │   ├── AnimatedBackground.tsx
│   │   └── MeditationListItem.tsx
│   ├── data.ts
│   └── types
│       └── index.ts
├── tailwind.config.js
└── tsconfig.json
```

### 📁 Key Files

- `src/app/index.tsx`: Displays the meditation list.
- `src/app/meditation/[id].tsx`: Handles meditation detail view and audio playback.
- `src/components/AnimatedBackground.tsx`: Implements background animations.
- `src/components/MeditationListItem.tsx`: Renders individual meditation items.

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iamfitsum/headspace.git
   cd headspace
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   expo start
   ```

## 🧘 How to Use

1. Launch the app:
   - Use **Expo Go** to scan the QR code from the terminal for running the app on a physical device.
   - Alternatively, use an emulator via Android Studio or Xcode.
2. Browse the meditation list and select an item to start a session.
3. Relax and enjoy the guided meditation with animations.

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/1b1c283d-ff89-4494-94da-bc7516505bad" alt="Screenshot 1" width="45%"/>
  <img src="https://github.com/user-attachments/assets/5126022c-961e-4e3e-acec-0246f9892e5f" alt="Screenshot 2" width="45%"/>
</p>

## 📦 Dependencies

- `expo`
- `react`
- `react-native`
- `expo-av`
- `react-native-reanimated`
- `nativewind`
- `expo-router`

## 🤝 Acknowledgements

This project draws inspiration and guidance from the amazing [notJust.dev](https://github.com/notJust-dev).

## 📜 License

This project is licensed under the [MIT License](LICENSE).
