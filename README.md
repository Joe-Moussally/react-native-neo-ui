# @joe111/neo-ui

[![npm version](https://badge.fury.io/js/@joe111%2Fneo-ui.svg)](https://www.npmjs.com/package/@joe111/neo-ui)
[![GitHub](https://img.shields.io/github/license/Joe-Moussally/react-native-neo-ui)](https://github.com/Joe-Moussally/react-native-neo-ui/blob/builder-bob/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)

## 🚧 **BETA DEVELOPMENT** 🚧

**⚠️ This library is currently in beta development and is still under active development. APIs may change, and some features may not be fully stable. Use with caution in production environments.**

A modern, customizable React Native UI library built with TypeScript. Inspired by Material-UI, @neoui provides a comprehensive set of components with a powerful theming system.

![NeoUI Demo](https://raw.githubusercontent.com/Joe-Moussally/neo-ui/builder-bob/assets/demo.gif)

## ✨ Features

- 🎨 **Comprehensive Theme System** - Fully customizable colors, typography, and spacing
- 🧩 **Rich Component Library** - Pre-built components for common UI patterns
- 📱 **React Native First** - Built specifically for React Native with Expo support
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Navigation Ready** - Integrated navigation components
- 🚀 **Performance Optimized** - Lightweight and efficient

## 📦 Installation

```bash
npm install @joe111/neo-ui
# or
yarn add @joe111/neo-ui
```

### Peer Dependencies

Install the required peer dependencies:

```bash
npm install react react-native @react-navigation/native @react-navigation/bottom-tabs @react-navigation/elements react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg
```

## 🚀 Quick Start

### 1. Setup Theme Provider

Wrap your app with the `ThemeProvider`:

```tsx
import React from "react";
import { ThemeProvider } from "@joe111/neo-ui";
import { YourApp } from "./YourApp";

export default function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use Components

```tsx
import React from "react";
import { Button, Typography, Box } from "@joe111/neo-ui";

export function YourApp() {
  return (
    <Box padding="lg">
      <Typography variant="h1">Welcome to NeoUI</Typography>
      <Button variant="primary" onPress={() => console.log("Hello NeoUI!")}>
        Get Started
      </Button>
    </Box>
  );
}
```

## 🧩 Components

### Layout & Navigation

- **Box** - Flexible container with theme-aware spacing
- **Screen** - Screen wrapper with safe area handling

### Typography

- **Typography** - Text component with predefined styles
- **ThemedText** - Theme-aware text component

### Form Controls

- **Button** - Customizable button with multiple variants
- **TextField** - Input field with validation and theming
- **Chip** - Compact elements for tags and filters

### Feedback & Indicators

- **Alert** - Alert messages with different severity levels
- **Toast** - Toast notifications with global state
- **Skeleton** - Loading placeholders
- **Rating** - Star rating component

### Data Display

- **Avatar** - User profile pictures with fallbacks
- **Badge** - Small status indicators
- **Ticker** - Animated text ticker

## 🎨 Theming

### Custom Theme

```tsx
import { ThemeProvider, createTheme } from "@joe111/neo-ui";

const customTheme = createTheme({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    // ... other colors
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
    // ... other typography styles
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using Theme in Components

```tsx
import { useTheme } from "@joe111/neo-ui";

export function CustomComponent() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      {/* Your content */}
    </View>
  );
}
```

## 📱 Example App

Check out our comprehensive example app that demonstrates all components:

```bash
git clone https://github.com/Joe-Moussally/react-native-neo-ui.git
cd neo-ui
git checkout builder-bob
./setup.sh

# Run the example
cd example
npm run ios    # or android, web
```

## 📚 Documentation

- 📖 [API Documentation](https://github.com/Joe-Moussally/react-native-neo-ui/tree/builder-bob/docs)
- 🎯 [Component Gallery](https://github.com/Joe-Moussally/react-native-neo-ui/tree/builder-bob/example)
- 🛠️ [Development Guide](https://github.com/Joe-Moussally/react-native-neo-ui/blob/builder-bob/DEVELOPMENT.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/Joe-Moussally/react-native-neo-ui/blob/builder-bob/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © [Joe Moussally](https://github.com/Joe-Moussally)

## 🙏 Support

- ⭐ [Star on GitHub](https://github.com/Joe-Moussally/react-native-neo-ui)
- 🐛 [Report Issues](https://github.com/Joe-Moussally/react-native-neo-ui/issues)
- 💬 [Discussions](https://github.com/Joe-Moussally/react-native-neo-ui/discussions)

---

<p align="center">Made with ❤️ for the React Native community</p>
