# ThemedView

A themed view container component that automatically adapts its background color and styling to your app's current theme (light/dark mode).

## Installation

```typescript
import { ThemedView } from "@/core/components/ThemedView";
```

## Basic Usage

```typescript
import React from "react";
import { ThemedView } from "@/core/components/ThemedView";

export default function ThemedViewExample() {
  return (
    <ThemedView>
      <Text>Content that adapts to theme</Text>
    </ThemedView>
  );
}
```

## Props

| Prop         | Type                   | Default | Description                            |
| ------------ | ---------------------- | ------- | -------------------------------------- |
| `lightColor` | `string`               | -       | Background color to use in light theme |
| `darkColor`  | `string`               | -       | Background color to use in dark theme  |
| `children`   | `ReactNode`            | -       | Content to render inside the view      |
| `style`      | `StyleProp<ViewStyle>` | -       | Additional view styles                 |

## Usage Examples

### Default Themed View

```typescript
<ThemedView>
  <Text>This view automatically uses theme colors</Text>
</ThemedView>
```

### Custom Theme Colors

```typescript
<ThemedView lightColor="#f8f9fa" darkColor="#1a1a1a">
  <Text>Custom themed background</Text>
</ThemedView>
```

### With Additional Styling

```typescript
<ThemedView
  style={{
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  }}
>
  <Text>Styled themed view</Text>
</ThemedView>
```

## Best Practices

1. **Use for main containers** - ThemedView is ideal for main screen containers that need to adapt to theme changes
2. **Combine with ThemedText** - Use together with ThemedText for fully themed interfaces
3. **Consistent theme colors** - Let the component use default theme colors when possible for consistency
4. **Performance considerations** - The component automatically re-renders when theme changes occur

## Accessibility

- Automatically maintains proper contrast ratios between themes
- Provides consistent visual hierarchy across light and dark modes
- Supports system theme preferences
