# Button

A versatile button component with multiple variants, sizes, and states for consistent user interactions.

## Installation

```typescript
import { Button } from "@/core/components/Button";
```

## Basic Usage

```typescript
import React from "react";
import { Button } from "@/core/components/Button";

export default function ButtonExample() {
  return (
    <Button onPress={() => console.log("Button pressed!")}>Click me</Button>
  );
}
```

## Props

| Prop              | Type                                                                                                                   | Default     | Description                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `variant`         | `"primary" \| "secondary" \| "outline" \| "ghost" \| "soft" \| "text" \| "danger" \| "success" \| "warning" \| "info"` | `"primary"` | Visual variant of the button           |
| `size`            | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                                                 | `"md"`      | Size of the button                     |
| `color`           | `ButtonColorKey`                                                                                                       | -           | Custom color from theme                |
| `fullWidth`       | `boolean`                                                                                                              | `false`     | Whether button takes full width        |
| `loading`         | `boolean`                                                                                                              | `false`     | Show loading spinner                   |
| `disabled`        | `boolean`                                                                                                              | `false`     | Disable button interactions            |
| `startIcon`       | `ReactElement`                                                                                                         | -           | Icon to show at the start              |
| `endIcon`         | `ReactElement`                                                                                                         | -           | Icon to show at the end                |
| `children`        | `ReactNode`                                                                                                            | -           | Button content                         |
| `hapticsDisabled` | `boolean`                                                                                                              | `false`     | Disable haptic feedback                |
| `onPress`         | `() => void`                                                                                                           | -           | **Required.** Function called on press |
| `onPressIn`       | `(event: GestureResponderEvent) => void`                                                                               | -           | Function called on press in            |
| `onPressOut`      | `(event: GestureResponderEvent) => void`                                                                               | -           | Function called on press out           |
| `style`           | `StyleProp<ViewStyle>`                                                                                                 | -           | Additional styles                      |

## Types

```typescript
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "soft"
  | "text"
  | "danger"
  | "success"
  | "warning"
  | "info";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonColorKey = keyof typeof theme.colors;
```

## Usage Examples

### Basic Button

```typescript
<Button onPress={() => console.log("Pressed!")}>Click me</Button>
```

### Button Variants

```typescript
<Button variant="primary" onPress={handlePress}>
  Primary Button
</Button>

<Button variant="outline" onPress={handlePress}>
  Outline Button
</Button>

<Button variant="danger" onPress={handlePress}>
  Danger Button
</Button>
```

### Button with Icons

```typescript
<Button
  startIcon={<PlusIcon />}
  onPress={handlePress}
>
  Add Item
</Button>

<Button
  endIcon={<ArrowRightIcon />}
  onPress={handlePress}
>
  Continue
</Button>
```

### Loading State

```typescript
<Button loading onPress={handlePress}>
  Loading...
</Button>
```

### Custom Styling

```typescript
<Button
  style={{ marginTop: 20 }}
  color="secondary"
  size="lg"
  onPress={handlePress}
>
  Custom Button
</Button>
```

## Accessibility

- Supports screen readers with proper labels
- Handles keyboard navigation
- Provides haptic feedback (can be disabled)
- Respects system accessibility settings
- Proper focus management

## Best Practices

1. **Use appropriate variants**: Choose the right variant based on the action importance
2. **Consistent sizing**: Use consistent button sizes throughout your app
3. **Loading states**: Always show loading states for async operations
4. **Accessibility**: Provide meaningful labels for screen readers
5. **Haptic feedback**: Keep haptics enabled for better user experience
