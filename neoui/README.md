# @joe111/neo-ui

A modern, customizable React Native UI library built with TypeScript. Inspired by Material-UI, @neoui provides a comprehensive set of components with a powerful theming system.

## Features

- 🎨 **Comprehensive Theme System** - Fully customizable colors, typography, and spacing
- 🧩 **Rich Component Library** - Pre-built components for common UI patterns
- 📱 **React Native First** - Built specifically for React Native with Expo support
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Navigation Ready** - Integrated navigation components
- 🚀 **Performance Optimized** - Lightweight and efficient
- 📦 **Tree Shakeable** - Individual component imports for optimal bundle size

## Installation

```bash
npm install @joe111/neo-ui
# or
yarn add @joe111/neo-ui
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
import React from 'react';
import { ThemeProvider } from '@joe111/neo-ui/theme';
import { YourApp } from './YourApp';

export default function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use Components

You can import components in two ways:

#### Individual Imports (Recommended for Tree Shaking)

```tsx
import React from 'react';
import { Button } from '@joe111/neo-ui/Button';
import { Typography } from '@joe111/neo-ui/Typography';
import { Box } from '@joe111/neo-ui/Box';

export function YourApp() {
  return (
    <Box padding="lg">
      <Typography variant="h1">Welcome to NeoUI</Typography>
      <Button variant="primary" onPress={() => console.log('Hello NeoUI!')}>
        Get Started
      </Button>
    </Box>
  );
}
```

#### Barrel Imports (Legacy)

```tsx
import React from 'react';
import { Button, Typography, Box } from '@joe111/neo-ui';

export function YourApp() {
  return (
    <Box padding="lg">
      <Typography variant="h1">Welcome to NeoUI</Typography>
      <Button variant="primary" onPress={() => console.log('Hello NeoUI!')}>
        Get Started
      </Button>
    </Box>
  );
}
```

## Import Paths

### Components

- `@joe111/neo-ui/Alert` - Alert components
- `@joe111/neo-ui/Avatar` - Avatar and AvatarGroup
- `@joe111/neo-ui/Badge` - Badge component
- `@joe111/neo-ui/Box` - Layout container
- `@joe111/neo-ui/Button` - Button component
- `@joe111/neo-ui/Chip` - Chip component
- `@joe111/neo-ui/Rating` - Rating component
- `@joe111/neo-ui/Skeleton` - Loading skeleton
- `@joe111/neo-ui/TextField` - Text input
- `@joe111/neo-ui/Ticker` - Animated ticker
- `@joe111/neo-ui/Toast` - Toast notifications
- `@joe111/neo-ui/Typography` - Text component
- `@joe111/neo-ui/ParallaxScrollView` - Parallax scroll view
- `@joe111/neo-ui/ThemedText` - Themed text
- `@joe111/neo-ui/ThemedView` - Themed view

### Theme and Navigation

- `@joe111/neo-ui/theme` - Theme provider, hooks, and utilities
- `@joe111/neo-ui/navigation` - Navigation components and utilities

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
import { ThemeProvider, createTheme } from '@joe111/neo-ui/theme';

const customTheme = createTheme({
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
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
      fontWeight: 'bold',
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
import { useTheme } from '@joe111/neo-ui/theme';

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

## Migration Guide

### From v1.x to v2.x

Version 2.0 introduces individual module imports for better tree shaking. While the old barrel imports still work, we recommend migrating to individual imports:

```tsx
// Old (v1.x) - Still works but not recommended
import { Button, ThemeProvider } from '@joe111/neo-ui';

// New (v2.x) - Recommended
import { Button } from '@joe111/neo-ui/Button';
import { ThemeProvider } from '@joe111/neo-ui/theme';
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
