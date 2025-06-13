# Installation

Learn how to install and set up TeamLock UI in your React Native project.

## Requirements

Before installing TeamLock UI, make sure your project meets these requirements:

- **React Native**: 0.70 or higher
- **React**: 18.0 or higher
- **TypeScript**: 4.7 or higher (recommended)
- **Expo**: 47 or higher (if using Expo)

## Installation

### Using npm

```bash
npm install teamlock-ui
```

### Using yarn

```bash
yarn add teamlock-ui
```

### Using pnpm

```bash
pnpm add teamlock-ui
```

## Peer Dependencies

TeamLock UI requires several peer dependencies to function properly. Install them based on your project setup:

### Core Dependencies

```bash
# React Native Reanimated (for animations)
npm install react-native-reanimated

# React Native Gesture Handler (for touch interactions)
npm install react-native-gesture-handler

# React Native Safe Area Context (for safe area handling)
npm install react-native-safe-area-context

# React Native SVG (for icon support)
npm install react-native-svg
```

### Expo Projects

If you're using Expo, install the Expo-specific versions:

```bash
npx expo install react-native-reanimated react-native-gesture-handler react-native-safe-area-context react-native-svg expo-haptics
```

### Bare React Native Projects

For bare React Native projects, you'll need to install and link the native dependencies:

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-safe-area-context react-native-svg

# iOS
cd ios && pod install

# For React Native 0.69 and below, you may need to run:
npx react-native link
```

## Platform Setup

### iOS Setup

1. **React Native Reanimated**: Add the following to your `babel.config.js`:

```javascript
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin", // This should be last
  ],
};
```

2. **Gesture Handler**: Add to your `AppDelegate.m` (or `AppDelegate.mm`):

```objective-c
#import "RNGestureHandler.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // ... other code

  return YES;
}
```

### Android Setup

1. **Gesture Handler**: Add to your `MainActivity.java`:

```java
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {
  // ... other code
}
```

2. **Reanimated**: No additional setup required for React Native 0.62+

## Basic Setup

### 1. Wrap Your App with ThemeProvider

```tsx
import React from "react";
import { ThemeProvider } from "teamlock-ui";
import { App } from "./App";

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

### 2. Import and Use Components

```tsx
import React from "react";
import { View } from "react-native";
import { Button, TextField, Typography } from "teamlock-ui";

export function MyScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Typography variant="h1">Welcome to TeamLock UI</Typography>

      <TextField
        label="Your Name"
        placeholder="Enter your name"
        style={{ marginVertical: 16 }}
      />

      <Button variant="primary" onPress={() => alert("Hello TeamLock UI!")}>
        Get Started
      </Button>
    </View>
  );
}
```

## TypeScript Configuration

If you're using TypeScript, add the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

## Metro Configuration

Add the following to your `metro.config.js` for optimal bundle performance:

```javascript
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
```

## Verification

To verify your installation is working correctly, create a simple test component:

```tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Typography, useTheme } from "teamlock-ui";

export function InstallationTest() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Typography variant="h2" style={{ color: theme.colors.text }}>
        🎉 TeamLock UI is working!
      </Typography>

      <Button
        variant="primary"
        size="lg"
        onPress={() => console.log("Installation successful!")}
        style={{ marginTop: 20 }}
      >
        Test Button
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
```

## Troubleshooting

### Common Issues

#### Metro bundler errors

```bash
# Clear Metro cache
npx react-native start --reset-cache

# Or for Expo
npx expo start -c
```

#### iOS build errors

```bash
# Clean and rebuild
cd ios && rm -rf Pods Podfile.lock && pod install
```

#### Android build errors

```bash
# Clean gradle
cd android && ./gradlew clean
```

#### TypeScript errors

Make sure all peer dependencies are installed and your `tsconfig.json` is properly configured.

### Getting Help

If you encounter any issues during installation:

1. Check our [GitHub Issues](https://github.com/your-org/teamlock/issues)
2. Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/teamlock-ui)
3. Review the [troubleshooting section](/docs/troubleshooting)

## Next Steps

Great! Now that you have TeamLock UI installed, you can:

1. **[Learn about theming](/docs/theming)** - Customize the look and feel
2. **[Explore components](/docs/components/button)** - Discover all available components
3. **[Customize components](/docs/customization)** - Make them your own

---

_Ready to build something amazing? Let's dive into the components!_
