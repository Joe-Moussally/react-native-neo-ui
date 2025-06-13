# Theming

TeamLock UI provides a comprehensive theming system that allows you to customize the appearance of your application while maintaining consistency and accessibility. The theme system supports both light and dark modes with automatic system preference detection.

## Overview

The theming system includes:

- **Color Palette**: Semantic color tokens for consistent styling
- **Spacing System**: Standardized spacing values for layout consistency
- **Theme Provider**: Context-based theme management
- **Theme Hook**: Easy access to theme values in components
- **Automatic Dark Mode**: System preference detection and manual override

## Getting Started

### Setup Theme Provider

Wrap your app with the `ThemeProvider` to enable theming:

```tsx
// App.tsx or _layout.tsx
import React from "react";
import { ThemeProvider } from "teamlock-ui";
import { YourAppContent } from "./YourAppContent";

export default function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### Using the Theme Hook

Access theme values in your components:

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "teamlock-ui";

export function ThemedComponent() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.text, { color: theme.colors.text }]}>
        Hello, themed world!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
```

## Color System

TeamLock UI uses a semantic color system that adapts to light and dark themes:

### Primary Colors

```tsx
const { theme } = useTheme();

// Primary brand colors
theme.colors.primary; // Main brand color
theme.colors.secondary; // Secondary brand color
theme.colors.accent; // Accent/highlight color
```

### Surface Colors

```tsx
// Background and surface colors
theme.colors.background; // Main background
theme.colors.surface; // Card/surface background
theme.colors.surfaceVariant; // Alternative surface
theme.colors.card; // Card background
```

### Semantic Colors

```tsx
// Status and feedback colors
theme.colors.error; // Error states
theme.colors.success; // Success states
theme.colors.warning; // Warning states
theme.colors.info; // Information states
```

### Text Colors

```tsx
// Text colors
theme.colors.text; // Primary text
theme.colors.textSecondary; // Secondary text
theme.colors.disabled; // Disabled text
```

### Border and Divider Colors

```tsx
// Structural colors
theme.colors.border; // Borders and outlines
theme.colors.divider; // Dividers and separators
theme.colors.shadow; // Drop shadows
```

### Navigation Colors

```tsx
// Navigation-specific colors
theme.colors.tabBar; // Tab bar background
theme.colors.tabBarActive; // Active tab color
theme.colors.tabBarInactive; // Inactive tab color
```

## Complete Color Palette

### Light Theme Colors

```tsx
const lightColors = {
  primary: "#0284c7",
  secondary: "#059669",
  accent: "#8b5cf6",
  background: "#ffffff",
  surface: "#f8fafc",
  surfaceVariant: "#f1f5f9",
  error: "#dc2626",
  success: "#16a34a",
  warning: "#ca8a04",
  info: "#0ea5e9",
  text: "#0f172a",
  textSecondary: "#475569",
  border: "#cbd5e1",
  disabled: "#94a3b8",
  divider: "#e2e8f0",
  card: "#ffffff",
  shadow: "rgba(0, 0, 0, 0.1)",
  tabBar: "#ffffff",
  tabBarInactive: "#64748b",
  tabBarActive: "#0284c7",
};
```

### Dark Theme Colors

```tsx
const darkColors = {
  primary: "#0ea5e9",
  secondary: "#10b981",
  accent: "#a78bfa",
  background: "#0f172a",
  surface: "#1e293b",
  surfaceVariant: "#334155",
  error: "#ef4444",
  success: "#22c55e",
  warning: "#eab308",
  info: "#38bdf8",
  text: "#f8fafc",
  textSecondary: "#cbd5e1",
  border: "#475569",
  disabled: "#64748b",
  divider: "#334155",
  card: "#1e293b",
  shadow: "rgba(0, 0, 0, 0.3)",
  tabBar: "#0f172a",
  tabBarInactive: "#94a3b8",
  tabBarActive: "#38bdf8",
};
```

## Spacing System

Consistent spacing values for layouts:

```tsx
const { theme } = useTheme();

// Available spacing values
const spacing = {
  xs: 4, // Extra small
  sm: 8, // Small
  md: 16, // Medium (default)
  lg: 24, // Large
  xl: 32, // Extra large
  xxl: 40, // Extra extra large
  rounded: 10, // Border radius
};

// Usage in styles
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    margin: spacing.lg,
    borderRadius: spacing.rounded,
  },
});
```

## Theme Management

### Manual Theme Control

Control the theme manually:

```tsx
import React from "react";
import { View } from "react-native";
import { useTheme, Button } from "teamlock-ui";

export function ThemeControls() {
  const { theme, themeType, setThemeType } = useTheme();

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Button
        variant={themeType === "light" ? "primary" : "outline"}
        onPress={() => setThemeType("light")}
      >
        Light Theme
      </Button>

      <Button
        variant={themeType === "dark" ? "primary" : "outline"}
        onPress={() => setThemeType("dark")}
      >
        Dark Theme
      </Button>

      <Button
        variant={themeType === "system" ? "primary" : "outline"}
        onPress={() => setThemeType("system")}
      >
        System Theme
      </Button>
    </View>
  );
}
```

### Theme Detection

Check current theme state:

```tsx
import { useTheme } from "teamlock-ui";

export function ThemeInfo() {
  const { theme, themeType } = useTheme();

  return (
    <View>
      <Text>Current theme type: {themeType}</Text>
      <Text>Is dark mode: {theme.isDark ? "Yes" : "No"}</Text>
      <Text>Primary color: {theme.colors.primary}</Text>
    </View>
  );
}
```

## Custom Styling Patterns

### Theme-Aware Components

Create components that automatically adapt to theme changes:

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "teamlock-ui";

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "elevated";
}

export function CustomCard({
  title,
  children,
  variant = "default",
}: CustomCardProps) {
  const { theme } = useTheme();

  const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      ...(variant === "elevated" && {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 3,
      }),
      borderWidth: variant === "default" ? 1 : 0,
      borderColor: theme.colors.border,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 12,
    },
  });

  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.title}>{title}</Text>
      {children}
    </View>
  );
}
```

### Conditional Styling

Apply different styles based on theme:

```tsx
import { useTheme } from "teamlock-ui";

export function ConditionalStyling() {
  const { theme } = useTheme();

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      // Different border styles for light/dark
      borderWidth: theme.isDark ? 0 : 1,
      borderColor: theme.colors.border,
      // Different shadows for light/dark
      ...(theme.isDark
        ? {
            shadowColor: "#000",
            shadowOpacity: 0.3,
          }
        : {
            shadowColor: theme.colors.shadow,
            shadowOpacity: 0.1,
          }),
    },
    text: {
      color: theme.colors.text,
      // Different font weights for themes
      fontWeight: theme.isDark ? "400" : "500",
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>Themed content</Text>
    </View>
  );
}
```

### Theme-Based Animations

Create animations that respond to theme changes:

```tsx
import React, { useEffect } from "react";
import { Animated } from "react-native";
import { useTheme } from "teamlock-ui";

export function ThemeTransition({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade out and in when theme changes
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [theme.isDark]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  );
}
```

## Advanced Theming

### Custom Theme Extension

Extend the theme with custom properties:

```tsx
// types/theme.ts
import { Theme as BaseTheme } from "teamlock-ui";

declare module "teamlock-ui" {
  interface Theme extends BaseTheme {
    customColors: {
      brand: string;
      highlight: string;
    };
    typography: {
      fontFamily: string;
      sizes: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }
}

// CustomThemeProvider.tsx
import React from "react";
import { ThemeProvider as BaseThemeProvider, useTheme } from "teamlock-ui";

const customThemeExtension = {
  customColors: {
    brand: "#ff6b6b",
    highlight: "#4ecdc4",
  },
  typography: {
    fontFamily: "Inter",
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
  },
};

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseThemeProvider>
      <ThemeExtender>{children}</ThemeExtender>
    </BaseThemeProvider>
  );
}

function ThemeExtender({ children }: { children: React.ReactNode }) {
  const { theme: baseTheme, ...rest } = useTheme();

  const extendedTheme = {
    ...baseTheme,
    ...customThemeExtension,
  };

  return (
    <ThemeContext.Provider value={{ theme: extendedTheme, ...rest }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Theme Persistence

Persist theme preferences:

```tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "teamlock-ui";

const THEME_STORAGE_KEY = "teamlock_theme_preference";

export function usePersistedTheme() {
  const { themeType, setThemeType } = useTheme();

  // Load theme preference on app start
  React.useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
          setThemeType(savedTheme as "light" | "dark" | "system");
        }
      } catch (error) {
        console.warn("Failed to load theme preference:", error);
      }
    };

    loadThemePreference();
  }, []);

  // Save theme preference when it changes
  React.useEffect(() => {
    const saveThemePreference = async () => {
      try {
        await AsyncStorage.setItem(THEME_STORAGE_KEY, themeType);
      } catch (error) {
        console.warn("Failed to save theme preference:", error);
      }
    };

    saveThemePreference();
  }, [themeType]);

  return { themeType, setThemeType };
}
```

## Complete Theming Example

```tsx
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Screen, Button, TextField, Card, useTheme } from "teamlock-ui";

export function ThemingShowcase() {
  const { theme, themeType, setThemeType } = useTheme();
  const [inputValue, setInputValue] = useState("");

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      gap: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 12,
    },
    colorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    colorSwatch: {
      width: 60,
      height: 60,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    colorLabel: {
      fontSize: 12,
      color: theme.colors.textSecondary,
      textAlign: "center",
      marginTop: 4,
    },
    themeControls: {
      flexDirection: "row",
      gap: 8,
    },
  });

  const colorSwatches = [
    { name: "Primary", color: theme.colors.primary },
    { name: "Secondary", color: theme.colors.secondary },
    { name: "Accent", color: theme.colors.accent },
    { name: "Error", color: theme.colors.error },
    { name: "Success", color: theme.colors.success },
    { name: "Warning", color: theme.colors.warning },
    { name: "Info", color: theme.colors.info },
  ];

  return (
    <Screen title="Theming Showcase">
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        {/* Theme Controls */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme Controls</Text>
          <View style={styles.themeControls}>
            <Button
              variant={themeType === "light" ? "primary" : "outline"}
              size="sm"
              onPress={() => setThemeType("light")}
            >
              Light
            </Button>
            <Button
              variant={themeType === "dark" ? "primary" : "outline"}
              size="sm"
              onPress={() => setThemeType("dark")}
            >
              Dark
            </Button>
            <Button
              variant={themeType === "system" ? "primary" : "outline"}
              size="sm"
              onPress={() => setThemeType("system")}
            >
              System
            </Button>
          </View>
        </View>

        {/* Color Palette */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Color Palette</Text>
          <View style={styles.colorGrid}>
            {colorSwatches.map((swatch) => (
              <View key={swatch.name} style={{ alignItems: "center" }}>
                <View
                  style={[
                    styles.colorSwatch,
                    { backgroundColor: swatch.color },
                  ]}
                />
                <Text style={styles.colorLabel}>{swatch.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Components */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Themed Components</Text>

          <Card style={{ marginBottom: 16 }}>
            <Card.Content>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  marginBottom: 8,
                }}
              >
                Sample Card
              </Text>
              <Text style={{ color: theme.colors.textSecondary }}>
                This card automatically adapts to the current theme.
              </Text>
            </Card.Content>
          </Card>

          <TextField
            label="Sample Input"
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
            style={{ marginBottom: 16 }}
          />

          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <Button variant="primary" size="sm">
              Primary
            </Button>
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="outline" size="sm">
              Outline
            </Button>
            <Button variant="ghost" size="sm">
              Ghost
            </Button>
          </View>
        </View>

        {/* Theme Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme Information</Text>
          <Card>
            <Card.Content>
              <Text style={{ color: theme.colors.text, marginBottom: 4 }}>
                Current Theme: {themeType}
              </Text>
              <Text style={{ color: theme.colors.text, marginBottom: 4 }}>
                Dark Mode: {theme.isDark ? "Enabled" : "Disabled"}
              </Text>
              <Text style={{ color: theme.colors.textSecondary }}>
                Primary Color: {theme.colors.primary}
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  );
}
```

## Theme Types

### ThemeType

```tsx
type ThemeType = "light" | "dark" | "system";
```

### Theme Interface

```tsx
interface Theme {
  colors: ColorPalette;
  isDark: boolean;
}
```

### ThemeContextType

```tsx
interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
}
```

### ColorPalette

```tsx
interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceVariant: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  text: string;
  textSecondary: string;
  border: string;
  disabled: string;
  divider: string;
  card: string;
  shadow: string;
  tabBar: string;
  tabBarInactive: string;
  tabBarActive: string;
}
```

## Best Practices

1. **Use Semantic Colors**: Always use semantic color tokens instead of hardcoded values:

   ```tsx
   // ✅ Good
   color: theme.colors.text;

   // ❌ Avoid
   color: "#000000";
   ```

2. **Consistent Spacing**: Use the spacing system for consistent layouts:

   ```tsx
   // ✅ Good
   padding: spacing.md;

   // ❌ Avoid
   padding: 16;
   ```

3. **Theme-Aware Components**: Create components that automatically adapt:

   ```tsx
   // ✅ Good - automatically themed
   <Button variant="primary">Submit</Button>

   // ❌ Avoid - manual styling
   <TouchableOpacity style={{ backgroundColor: '#blue' }}>
   ```

4. **Test Both Themes**: Always test your components in both light and dark modes:

   ```tsx
   // Use theme controls to switch between modes during development
   ```

5. **Accessibility**: Ensure sufficient contrast in both themes:
   ```tsx
   // Theme colors are designed with accessibility in mind
   // Use semantic colors to maintain contrast ratios
   ```

---

_Consistent theming creates cohesive user experiences. Use the theme system to maintain visual harmony across your application!_
