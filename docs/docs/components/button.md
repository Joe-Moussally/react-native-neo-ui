# Button

A versatile button component with multiple variants, sizes, and states for consistent user interactions.

import ComponentPreview from '@site/src/components/ComponentPreview';

## Installation

```typescript
import { Button } from "@joe111/neo-ui";
```

## Basic Usage

<ComponentPreview
title="Button"
description="A simple button with primary styling"
code={`<Button onPress={() => console.log("Button pressed!")}>
  Click me
</Button>`}
usage={`import React from "react";
import { Button } from "@joe111/neo-ui";

export default function ButtonExample() {
return (
<Button onPress={() => console.log("Button pressed!")}>
Click me
</Button>
);
}`}
/>

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

### Button Variants

<ComponentPreview
title="Button Variants"
description="Different visual styles for various use cases"
code={`<View style={{ gap: 12 }}>
<Button variant="primary" onPress={handlePress}>
Primary Button
</Button>

  <Button variant="secondary" onPress={handlePress}>
    Secondary Button
  </Button>
  
  <Button variant="outline" onPress={handlePress}>
    Outline Button
  </Button>
  
  <Button variant="ghost" onPress={handlePress}>
    Ghost Button
  </Button>
  
  <Button variant="danger" onPress={handlePress}>
    Danger Button
  </Button>
</View>`}
/>

### Button Sizes

<ComponentPreview
title="Button Sizes"
description="Different sizes from extra small to extra large"
code={`<View style={{ gap: 12 }}>
  <Button size="xs" onPress={handlePress}>Extra Small</Button>
  <Button size="sm" onPress={handlePress}>Small</Button>
  <Button size="md" onPress={handlePress}>Medium</Button>
  <Button size="lg" onPress={handlePress}>Large</Button>
  <Button size="xl" onPress={handlePress}>Extra Large</Button>
</View>`}
/>

### Button with Icons

<ComponentPreview
title="Buttons with Icons"
description="Adding icons to enhance button functionality"
code={`<View style={{ gap: 12 }}>
<Button
startIcon={<PlusIcon />}
onPress={handlePress}

>

    Add Item

  </Button>

<Button
endIcon={<ArrowRightIcon />}
variant="outline"
onPress={handlePress}

>

    Continue

  </Button>
  
  <Button
    startIcon={<HeartIcon />}
    endIcon={<StarIcon />}
    variant="ghost"
    onPress={handlePress}
  >
    Like & Favorite
  </Button>
</View>`}
/>

### Loading and Disabled States

<ComponentPreview
title="Button States"
description="Loading and disabled button states"
code={`<View style={{ gap: 12 }}>
<Button loading onPress={handlePress}>
Loading...
</Button>

  <Button disabled onPress={handlePress}>
    Disabled Button
  </Button>
  
  <Button 
    variant="outline" 
    loading 
    onPress={handlePress}
  >
    Processing...
  </Button>
</View>`}
/>

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
