# Design To Deployment 💻

Welcome to **Design To Deployment**! This guide will help you set up your environment and start developing React Native apps with Expo, even if you don’t have Node.js installed yet.

## Prerequisites
Ensure you have the following:
- A computer running **macOS, Linux, or Windows**
- A stable internet connection

## Step 1: Install Node.js
Node.js is required to run React Native and Expo.

### macOS
1. Download and install **Homebrew** (if not already installed):
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Node.js using Homebrew:
   ```sh
   brew install node
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### Linux
1. Update package list:
   ```sh
   sudo apt update && sudo apt upgrade -y
   ```
2. Install Node.js and npm:
   ```sh
   sudo apt install -y nodejs npm
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### Windows
1. Download and install [Node.js](https://nodejs.org/).
2. Restart your terminal and verify installation:
   ```sh
   node -v
   npm -v
   ```

## Step 2: Install Expo CLI
Expo is a framework for building React Native apps quickly.

```sh
npm install -g expo-cli
```

Verify installation:
```sh
expo --version
```

## Step 3: Create a New Expo Project
```sh
npx create-expo-app DesignToDeployment
cd DesignToDeployment
```

## Step 4: Start the Development Server
```sh
npm start
```
This will open the Expo Developer Tools in your browser.

## Step 5: Create an Expo Go Account
An Expo Go account allows you to log in, sync projects, and access additional features.

1. Visit [Expo’s signup page](https://expo.dev/signup) and create an account.
2. Alternatively, create an account via the terminal:
   ```sh
   expo register
   ```
3. Once registered, log in to your account:
   ```sh
   expo login
   ```

## Step 6: Run Your App
- **On a physical device**: Install the **Expo Go** app from the App Store or Google Play, then scan the QR code from the terminal.
- **On an emulator**:
  - For iOS: Open with Xcode’s simulator (`i` in the terminal)
  - For Android: Start an Android emulator (`a` in the terminal)

## Step 7: Start Coding!
Open the project in a code editor like **VS Code** and modify `App.js` to start building your React Native app.

## Troubleshooting
- If you encounter permission errors on macOS/Linux, try running:
  ```sh
  sudo npm install -g expo-cli
  ```
- On Windows, ensure you run the terminal as Administrator.

Happy coding! 🚀



