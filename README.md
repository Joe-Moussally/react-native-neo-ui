<div align="center">
  <img src="https://raw.githubusercontent.com/Joe-Moussally/react-native-neo-ui/main/neo-logo-blue-gradient.svg" alt="NeoUI Logo" width="200" height="200" />
  
  # @joe111/neo-ui
  
  ### A modern, customizable React Native UI library built with TypeScript
  
  [![npm version](https://badge.fury.io/js/@joe111%2Fneo-ui.svg)](https://www.npmjs.com/package/@joe111/neo-ui)
  [![GitHub](https://img.shields.io/github/license/Joe-Moussally/react-native-neo-ui)](https://github.com/Joe-Moussally/react-native-neo-ui/blob/main/LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  
  ### 🌐 [**Visit Neo-UI.dev**](https://neo-ui.dev/) | 📚 [**Documentation**](https://docs.neo-ui.dev/)
</div>

---

## 🚧 **BETA DEVELOPMENT** 🚧

**⚠️ This library is currently in beta development (v1.3.13) and is still under active development. APIs may change, and some features may not be fully stable. Use with caution in production environments.**

---

## ✨ Features

- 🎨 **Comprehensive Theme System** - Fully customizable colors, typography, and spacing
- 🧩 **Rich Component Library** - 15+ pre-built components for common UI patterns
- 📱 **React Native First** - Built specifically for React Native with Expo support
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Navigation Ready** - Integrated navigation components with React Navigation
- 🚀 **Performance Optimized** - Lightweight and efficient
- 📦 **Tree Shakeable** - Individual component imports for optimal bundle size
- 🎭 **Modern Design** - Inspired by Material-UI with custom NeoUI styling

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

### Additional Dependencies

The package also requires:

```bash
npm install @expo/vector-icons
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

## 🧩 Available Components

### Layout & Navigation

- **Box** - Flexible container with theme-aware spacing and styling
- **Screen** - Screen wrapper with safe area handling and navigation integration
- **ParallaxScrollView** - Parallax scroll view component

### Typography & Text

- **Typography** - Text component with predefined styles and variants
- **ThemedText** - Theme-aware text component
- **ThemedView** - Theme-aware view component

### Form Controls & Input

- **Button** - Customizable button with multiple variants and states
- **TextField** - Input field with validation, theming, and form integration
- **Chip** - Compact elements for tags, filters, and actions

### Feedback & Notifications

- **Alert** - Alert messages with different severity levels and customizable styling
- **Toast** - Toast notifications with global state management and positioning
- **Skeleton** - Loading placeholders with customizable shapes and animations
- **Rating** - Interactive star rating component

### Data Display & Indicators

- **Avatar** - User profile pictures with fallbacks and group support
- **Badge** - Small status indicators and notification badges
- **Ticker** - Animated text ticker for scrolling content

### Theme System

- **ThemeProvider** - Context provider for theme management
- **useTheme** - Hook for accessing theme values
- **createTheme** - Utility for creating custom themes

## 🎨 Theming System

### Default Theme Usage

```tsx
import { ThemeProvider, useTheme } from "@joe111/neo-ui";

export function CustomComponent() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <Text style={theme.typography.h1}>Styled with theme</Text>
    </View>
  );
}
```

## 📱 Demo & Examples

### Demo Repository

Experience all components in action with our comprehensive demo app:

- [📖 Demo Documentation](https://docs.neo-ui.dev/demo) - Detailed demo guide with screenshots
- Clone and run the demo app locally to explore all components

### Run Demo App

```bash
git clone https://github.com/Joe-Moussally/react-native-neo-ui.git
cd react-native-neo-ui/example

# Install dependencies
npm install

# Start the demo app
npm start
```

## 📚 Documentation

- 📖 [Full Documentation](https://docs.neo-ui.dev/) - Complete API reference
- 🔄 [Changelog](https://github.com/Joe-Moussally/react-native-neo-ui/releases) - Version history and updates

## 🚀 Recent Updates (v1.3.13)

- ✅ **Individual Module Imports** - Tree-shakeable imports for better bundle optimization
- 🐛 **Bug Fixes** - Resolved import path issues and npm publishing
- 📦 **Build Improvements** - Enhanced build process with better TypeScript support
- 🔧 **Documentation** - Updated examples and usage guides

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/Joe-Moussally/react-native-neo-ui/blob/main/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

> 📄 **License Notice:** Neo UI is **source-available** under a custom license.  
> You're free to use it in personal or commercial apps and projects.  
> Redistribution or republishing as part of another library, toolkit, or competing product is **not allowed** without written permission.

Custom Source-Available License © [Joe Moussally](https://github.com/Joe-Moussally)

## 🙏 Support & Community

- ⭐ [Star on GitHub](https://github.com/Joe-Moussally/react-native-neo-ui) - Show your support!
- 🐛 [Report Issues](https://github.com/Joe-Moussally/react-native-neo-ui/issues) - Help us improve
- 💬 [Discussions](https://github.com/Joe-Moussally/react-native-neo-ui/discussions) - Ask questions and share ideas
- 📧 [Email Support](mailto:joemoussally111@gmail.com) - Direct contact

---

<div align="center">
  <p><strong>Made with ❤️ for the React Native community</strong></p>
  <p>
    <img src="https://raw.githubusercontent.com/Joe-Moussally/react-native-neo-ui/main/neo-logo-blue.svg" alt="NeoUI" width="32" height="32" />
    <em>Building beautiful mobile experiences, one component at a time.</em>
  </p>
</div>
