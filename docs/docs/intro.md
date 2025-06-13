# Welcome to TeamLock UI

TeamLock UI is a comprehensive React Native component library designed for building secure, accessible, and beautiful mobile applications. Built with TypeScript and optimized for both iOS and Android platforms.

## ✨ Features

- **🎨 Beautiful Design System**: Carefully crafted components with consistent styling
- **🌙 Dark Mode Support**: Automatic system preference detection with manual override
- **♿ Accessibility First**: Built-in accessibility features for inclusive experiences
- **📱 Cross-Platform**: Optimized for both iOS and Android
- **🔧 TypeScript Ready**: Full TypeScript support with comprehensive type definitions
- **🎯 Developer Experience**: Intuitive APIs with extensive documentation
- **🚀 Performance Optimized**: Lightweight components with minimal overhead
- **🔒 Security Focused**: Built with security best practices in mind

## 🚀 Quick Start

### Installation

```bash
npm install teamlock-ui
# or
yarn add teamlock-ui
```

### Setup

Wrap your app with the `ThemeProvider`:

```tsx
import React from "react";
import { ThemeProvider } from "teamlock-ui";
import { YourApp } from "./YourApp";

export default function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Your First Component

```tsx
import React from "react";
import { Screen, Button, TextField } from "teamlock-ui";

export function LoginScreen() {
  return (
    <Screen title="Login">
      <TextField
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button variant="primary" fullWidth>
        Sign In
      </Button>
    </Screen>
  );
}
```

## 📚 What's Included

### Core Components

- **[Button](./components/button)** - Versatile button component with multiple variants
- **[TextField](./components/textfield)** - Flexible text input with validation support
- **[Screen](./navigation)** - Navigation wrapper with consistent theming

### Navigation

- **[Screen Component](./navigation)** - Consistent screen layout and theming
- **[Navigation Patterns](./navigation)** - Best practices for app navigation

### Theming

- **[Theme System](./theming)** - Comprehensive theming with light/dark mode
- **[Customization](./customization)** - Extend and customize components

## 🎯 Design Principles

### Consistency

Every component follows the same design language, ensuring a cohesive user experience across your entire application.

### Accessibility

Built with accessibility in mind from the ground up. All components include proper ARIA labels, keyboard navigation, and screen reader support.

### Performance

Optimized for mobile performance with minimal bundle size impact and efficient rendering.

### Developer Experience

Intuitive APIs, comprehensive TypeScript support, and extensive documentation to help you build faster.

### Security

Designed with security best practices, including secure text entry, input validation, and protection against common vulnerabilities.

## 🏗️ Architecture

TeamLock UI is built on top of proven technologies:

- **React Native** - Cross-platform mobile development
- **Expo Router** - File-based navigation system
- **TypeScript** - Type safety and better developer experience
- **React Context** - State management for theming
- **React Native Reanimated** - Smooth animations and interactions

## 🌟 Why TeamLock UI?

### For Developers

- **Rapid Development**: Pre-built components accelerate development
- **Type Safety**: Full TypeScript support prevents runtime errors
- **Consistent APIs**: Learn once, use everywhere approach
- **Extensive Documentation**: Comprehensive guides and examples

### For Designers

- **Design System**: Consistent visual language across all components
- **Customizable**: Easy to adapt to your brand and design requirements
- **Responsive**: Components adapt to different screen sizes
- **Accessible**: Built-in accessibility ensures inclusive design

### For Teams

- **Collaboration**: Shared component library improves team efficiency
- **Maintainability**: Centralized components reduce code duplication
- **Quality**: Battle-tested components with comprehensive testing
- **Documentation**: Self-documenting code with extensive examples

## 🚦 Getting Started

Ready to build amazing mobile apps? Here's your roadmap:

1. **[Installation & Setup](./getting-started)** - Get up and running in minutes
2. **[Components](./components/button)** - Explore available components
3. **[Navigation](./navigation)** - Learn navigation patterns
4. **[Theming](./theming)** - Customize the look and feel
5. **[Customization](./customization)** - Advanced customization techniques

## 🤝 Community & Support

- **GitHub**: [teamlock-ui](https://github.com/teamlock/teamlock-ui)
- **Issues**: Report bugs and request features
- **Discussions**: Community support and questions
- **Documentation**: Comprehensive guides and API reference

## 📄 License

TeamLock UI is open source software licensed under the MIT License.

---

_Ready to build secure and beautiful mobile applications? Let's get started!_
