# Theme Hook Usage Examples

## New Direct Access Pattern ✨

With the updated theme hook, you can now access colors and spacing directly:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@joe111/neo-ui';

export const MyComponent = () => {
  // Direct access to colors, spacing, and isDark
  const { colors, spacing, isDark } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        padding: spacing.md,
        margin: spacing.sm,
        borderRadius: spacing.rounded,
      }}
    >
      <Text style={{ color: colors.text }}>
        Hello from {isDark ? 'dark' : 'light'} theme!
      </Text>
    </View>
  );
};
```

## Backward Compatibility

The old pattern still works for existing code:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@joe111/neo-ui';

export const LegacyComponent = () => {
  // Old pattern still works
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        padding: 16,
      }}
    >
      <Text style={{ color: theme.colors.text }}>
        Legacy usage still works!
      </Text>
    </View>
  );
};
```

## Available Colors

- `colors.primary`
- `colors.secondary`
- `colors.accent`
- `colors.background`
- `colors.surface`
- `colors.surfaceVariant`
- `colors.error`
- `colors.success`
- `colors.warning`
- `colors.info`
- `colors.text`
- `colors.textSecondary`
- `colors.border`
- `colors.disabled`
- `colors.divider`
- `colors.card`
- `colors.shadow`
- `colors.tabBar`
- `colors.tabBarInactive`
- `colors.tabBarActive`

## Available Spacing

- `spacing.xs` (4)
- `spacing.sm` (8)
- `spacing.md` (16)
- `spacing.lg` (24)
- `spacing.xl` (32)
- `spacing.xxl` (40)
- `spacing.rounded` (10)

## Theme Control

```tsx
const { themeType, setThemeType, isDark } = useTheme();

// Set theme manually
setThemeType('dark'); // Force dark theme
setThemeType('light'); // Force light theme
setThemeType('system'); // Follow system preference

// Check current theme
console.log('Current theme is dark:', isDark);
```
