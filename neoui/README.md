# @neoui/core

A modern, customizable React Native UI library built with TypeScript. Inspired by Material-UI, @neoui provides a comprehensive set of components with a powerful theming system.

## Features

- 🎨 **Comprehensive Theme System** - Fully customizable colors, typography, and spacing
- 🧩 **Rich Component Library** - Pre-built components for common UI patterns
- 📱 **React Native First** - Built specifically for React Native with Expo support
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Navigation Ready** - Integrated navigation components
- 🚀 **Performance Optimized** - Lightweight and efficient

## Installation

```bash
npm install @neoui/core
# or
yarn add @neoui/core
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-native @react-navigation/native @react-navigation/bottom-tabs @react-navigation/elements react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg
```

## Quick Start

### 1. Setup Theme Provider

Wrap your app with the `ThemeProvider`:

```tsx
import React from "react";
import { ThemeProvider } from "@neoui/core";
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
import { Button, Typography, Box } from "@neoui/core";

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

## Components

### Layout

- `Box` - Flexible container with theme-aware spacing and styling
- `Screen` - Screen wrapper with safe area handling

### Typography

- `Typography` - Text component with predefined styles and variants

### Form Controls

- `Button` - Customizable button with multiple variants
- `TextField` - Input field with validation and theming
- `Chip` - Compact elements for tags, filters, or actions

### Feedback

- `Alert` - Alert messages with different severity levels
- `Toast` - Toast notifications with global state management
- `Skeleton` - Loading placeholders
- `Progress` - Progress indicators

### Data Display

- `Avatar` - User profile pictures with fallbacks
- `Badge` - Small status indicators
- `Rating` - Star rating component
- `Ticker` - Animated text ticker

### Navigation

- `Screen` - Screen wrapper with navigation integration
- Navigation utilities and helpers

## Theming

### Custom Theme

```tsx
import { ThemeProvider, createTheme } from "@neoui/core";

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
import { useTheme } from "@neoui/core";

export function CustomComponent() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      {/* Your content */}
    </View>
  );
}
```

## Example App

Check out the example app in the `/example` directory to see all components in action:

```bash
cd example
npm install
npm run ios # or android
```

## API Documentation

For detailed API documentation, visit [our documentation site](https://neoui.dev/docs).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [NeoUI Team](https://neoui.dev)

## Support

- 📖 [Documentation](https://neoui.dev/docs)
- 🐛 [Issue Tracker](https://github.com/neoui/neoui/issues)
- 💬 [Discussions](https://github.com/neoui/neoui/discussions)
- 📧 [Email Support](mailto:team@neoui.dev)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
