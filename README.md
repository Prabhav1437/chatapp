# ChatApp

A React Native / Expo messaging starter application built with React Navigation.

## Features

- **Contact List (`App.js`)**: Fetches sample user profiles from `https://dummyjson.com/users` and renders a scrollable contact list with avatars, full names, and phone numbers.
- **Stack Navigation (`@react-navigation/native-stack`)**: Navigates between the `Home` screen and individual `Chat` screens with a dynamic header displaying the selected contact's avatar and name.
- **Chat Thread & Composer (`Components/ChatPage.jsx`)**: Displays styled sent and received message bubbles with timestamps, keyboard avoidance, and a multiline message composer.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the Expo development server:

   ```bash
   npm start
   ```

   You can also launch directly on a target platform:

   - `npm run android`
   - `npm run ios`
   - `npm run web`
