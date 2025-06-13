# Customization

Learn how to customize and extend TeamLock UI components to match your design requirements and brand identity.

## Overview

TeamLock UI is designed to be highly customizable while maintaining consistency and accessibility. You can customize components at multiple levels:

- **Theme Level**: Global color and spacing customization
- **Component Level**: Individual component styling and behavior
- **Instance Level**: Per-use customization with props and styles

## Theme Customization

### Custom Color Palette

Create your own color palette by extending or overriding the default theme:

```tsx
import React from "react";
import { ThemeProvider, lightColors, darkColors } from "teamlock-ui";

const customTheme = {
  colors: {
    light: {
      ...lightColors,
      primary: "#6366f1", // Indigo
      secondary: "#10b981", // Emerald
      accent: "#f59e0b", // Amber
      success: "#059669", // Custom success green
      error: "#dc2626", // Custom error red
      // Add brand-specific colors
      brand: "#8b5cf6", // Purple
      brandSecondary: "#ec4899", // Pink
    },
    dark: {
      ...darkColors,
      primary: "#818cf8", // Lighter indigo for dark mode
      secondary: "#34d399", // Lighter emerald
      accent: "#fbbf24", // Lighter amber
      success: "#10b981", // Adjusted for dark mode
      error: "#ef4444", // Adjusted for dark mode
      brand: "#a78bfa", // Lighter purple
      brandSecondary: "#f472b6", // Lighter pink
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyApp />
    </ThemeProvider>
  );
}
```

### Custom Spacing System

Modify the spacing system to match your design requirements:

```tsx
const customTheme = {
  spacing: {
    xs: 2, // Tighter spacing
    sm: 6,
    md: 12,
    lg: 20,
    xl: 28,
    xxl: 36,
    rounded: 12, // Larger border radius
    // Add custom spacing values
    tight: 4,
    loose: 48,
    section: 64,
  },
};
```

### Typography Customization

While TeamLock UI doesn't include a built-in typography system, you can create your own:

```tsx
const customTheme = {
  typography: {
    fontFamily: {
      regular: "Inter-Regular",
      medium: "Inter-Medium",
      semibold: "Inter-SemiBold",
      bold: "Inter-Bold",
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
};
```

## Component-Level Customization

### Creating Custom Variants

Extend existing components with new variants by creating wrapper components:

```tsx
import React from "react";
import { Button, useTheme } from "teamlock-ui";

interface CustomButtonProps extends ButtonProps {
  variant?: "gradient" | "neon" | ButtonProps["variant"];
}

export function CustomButton({ variant, style, ...props }: CustomButtonProps) {
  const { theme } = useTheme();

  const getCustomStyle = () => {
    switch (variant) {
      case "gradient":
        return {
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          borderWidth: 0,
        };
      case "neon":
        return {
          backgroundColor: "transparent",
          borderColor: theme.colors.accent,
          borderWidth: 2,
          shadowColor: theme.colors.accent,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        };
      default:
        return {};
    }
  };

  return <Button {...props} style={[getCustomStyle(), style]} />;
}
```

### Component Composition

Create complex components by combining multiple TeamLock UI components:

```tsx
import React from "react";
import { View } from "react-native";
import { Button, Avatar, Typography, useTheme } from "teamlock-ui";

interface UserCardProps {
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  onMessage: () => void;
  onCall: () => void;
}

export function UserCard({ user, onMessage, onCall }: UserCardProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
        borderRadius: theme.spacing.rounded,
        padding: theme.spacing.lg,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: theme.spacing.md }}>
        <Avatar
          source={{ uri: user.avatar }}
          size="lg"
          style={{ marginBottom: theme.spacing.sm }}
        />
        <Typography variant="h3" style={{ color: theme.colors.text }}>
          {user.name}
        </Typography>
        <Typography
          variant="body2"
          style={{ color: theme.colors.textSecondary }}
        >
          {user.role}
        </Typography>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm,
        }}
      >
        <Button
          variant="outline"
          size="sm"
          style={{ flex: 1 }}
          onPress={onMessage}
        >
          Message
        </Button>
        <Button
          variant="primary"
          size="sm"
          style={{ flex: 1 }}
          onPress={onCall}
        >
          Call
        </Button>
      </View>
    </View>
  );
}
```

## Advanced Customization Patterns

### Higher-Order Components (HOCs)

Create reusable customization patterns with HOCs:

```tsx
import React from "react";
import { useTheme } from "teamlock-ui";

function withBrandStyling<T extends object>(Component: React.ComponentType<T>) {
  return function BrandStyledComponent(props: T) {
    const { theme } = useTheme();

    const brandStyles = {
      shadowColor: theme.colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      borderRadius: theme.spacing.rounded * 1.5,
    };

    return <Component {...props} style={[brandStyles, (props as any).style]} />;
  };
}

// Usage
const BrandButton = withBrandStyling(Button);
const BrandCard = withBrandStyling(View);
```

### Custom Hooks for Styling

Create custom hooks for consistent styling patterns:

```tsx
import { useTheme } from "teamlock-ui";

export function useCardStyles() {
  const { theme } = useTheme();

  return {
    container: {
      backgroundColor: theme.colors.card,
      borderRadius: theme.spacing.rounded,
      padding: theme.spacing.lg,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    footer: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
    },
  };
}

// Usage
export function MyCard({ children }) {
  const styles = useCardStyles();

  return <View style={styles.container}>{children}</View>;
}
```

### Style Variants System

Create a systematic approach to component variants:

```tsx
import { useTheme } from "teamlock-ui";

const createVariantStyles = (theme: Theme) => ({
  card: {
    elevated: {
      backgroundColor: theme.colors.card,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
    flat: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    outlined: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
  },
  text: {
    primary: { color: theme.colors.text },
    secondary: { color: theme.colors.textSecondary },
    accent: { color: theme.colors.accent },
    muted: { color: theme.colors.disabled },
  },
});

export function useVariantStyles() {
  const { theme } = useTheme();
  return createVariantStyles(theme);
}
```

## Platform-Specific Customization

### iOS vs Android Styling

Customize components based on platform:

```tsx
import { Platform } from "react-native";
import { useTheme } from "teamlock-ui";

export function PlatformButton({ children, ...props }) {
  const { theme } = useTheme();

  const platformStyles = Platform.select({
    ios: {
      borderRadius: theme.spacing.rounded * 1.5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    android: {
      borderRadius: theme.spacing.rounded,
      elevation: 4,
    },
  });

  return (
    <Button {...props} style={[platformStyles, props.style]}>
      {children}
    </Button>
  );
}
```

## Animation Customization

### Custom Animation Presets

Create custom animation configurations:

```tsx
import {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export const animationPresets = {
  gentle: {
    damping: 20,
    stiffness: 200,
    mass: 1,
  },
  bouncy: {
    damping: 10,
    stiffness: 300,
    mass: 0.8,
  },
  smooth: {
    duration: 300,
    easing: "ease-out",
  },
};

export function useCustomAnimation(preset = "gentle") {
  const animatedValue = useSharedValue(0);

  const animate = (toValue: number) => {
    if (preset === "smooth") {
      animatedValue.value = withTiming(toValue, animationPresets.smooth);
    } else {
      animatedValue.value = withSpring(toValue, animationPresets[preset]);
    }
  };

  return { animatedValue, animate };
}
```

## Best Practices

### 1. Maintain Design Consistency

```tsx
// ✅ Good - Use theme values
const styles = {
  padding: theme.spacing.md,
  borderRadius: theme.spacing.rounded,
  backgroundColor: theme.colors.surface,
};

// ❌ Avoid - Hard-coded values
const styles = {
  padding: 16,
  borderRadius: 8,
  backgroundColor: "#f8fafc",
};
```

### 2. Create Reusable Patterns

```tsx
// ✅ Good - Reusable component
export function ActionCard({ title, actions, children }) {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
      <CardActions actions={actions} />
    </Card>
  );
}

// ❌ Avoid - Repeating patterns
```

### 3. Use TypeScript for Better DX

```tsx
interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    brand: string;
    brandSecondary: string;
  };
  spacing: Theme['spacing'] & {
    section: number;
  };
}

// Typed theme provider
<ThemeProvider<CustomTheme> theme={customTheme}>
```

### 4. Test Across Themes

Always test your customizations in both light and dark modes:

```tsx
export function CustomComponent() {
  const { theme, isDark } = useTheme();

  // Ensure styles work in both modes
  const dynamicStyles = {
    backgroundColor: isDark ? theme.colors.surface : theme.colors.background,
    borderColor: theme.colors.border, // Automatically adapts
  };

  return <View style={dynamicStyles} />;
}
```

## Migration and Upgrades

When upgrading TeamLock UI versions, follow these practices:

1. **Version Lock**: Pin specific versions in production
2. **Test Customizations**: Verify custom components after updates
3. **Theme Validation**: Check theme structure changes
4. **Gradual Migration**: Update components incrementally

---

_Customization is powerful, but remember that consistency and accessibility should always be priorities. Happy customizing!_
