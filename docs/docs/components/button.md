# Button

A versatile button component with multiple variants, sizes, and states for consistent user interactions.

import ComponentPreview from '@site/src/components/ComponentPreview';

## Installation

```typescript
import { Button } from "@joe111/neo-ui";
```

## Basic Usage

<ComponentPreview
title="Basic Button"
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

type ButtonColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "success"
  | "warning"
  | "info";
```

## Variants

All available button variants with different visual styles for various use cases.

<ComponentPreview
title="All Button Variants"
description="Complete collection of button variants from primary to info"
code={`<View style={{ gap: 12 }}>
<Button variant="primary" onPress={handlePress}>
Primary
</Button>

  <Button variant="secondary" onPress={handlePress}>
    Secondary
  </Button>
  
  <Button variant="outline" onPress={handlePress}>
    Outline
  </Button>
  
  <Button variant="ghost" onPress={handlePress}>
    Ghost
  </Button>
  
  <Button variant="soft" onPress={handlePress}>
    Soft
  </Button>
  
  <Button variant="text" onPress={handlePress}>
    Text
  </Button>
  
  <Button variant="danger" onPress={handlePress}>
    Danger
  </Button>
  
  <Button variant="success" onPress={handlePress}>
    Success
  </Button>
  
  <Button variant="warning" onPress={handlePress}>
    Warning
  </Button>
  
  <Button variant="info" onPress={handlePress}>
    Info
  </Button>
</View>`}
/>

## Sizes

Different button sizes from extra small to extra large.

<ComponentPreview
title="Button Sizes"
description="Five different sizes to fit various UI contexts"
code={`<View style={{ gap: 12, alignItems: 'flex-start' }}>
<Button size="xs" onPress={handlePress}>
XS
</Button>

  <Button size="sm" onPress={handlePress}>
    SM
  </Button>
  
  <Button size="md" onPress={handlePress}>
    MD
  </Button>
  
  <Button size="lg" onPress={handlePress}>
    LG
  </Button>
  
  <Button size="xl" onPress={handlePress}>
    XL
  </Button>
</View>`}
/>

## Colors

Custom color variants using theme colors.

<ComponentPreview
title="Button Colors"
description="Apply theme colors to customize button appearance"
code={`<View style={{ gap: 12 }}>
<Button color="primary" onPress={handlePress}>
Primary Color
</Button>

  <Button color="secondary" onPress={handlePress}>
    Secondary Color
  </Button>
  
  <Button color="accent" onPress={handlePress}>
    Accent Color
  </Button>
  
  <Button color="error" onPress={handlePress}>
    Error Color
  </Button>
  
  <Button color="success" onPress={handlePress}>
    Success Color
  </Button>
  
  <Button color="warning" onPress={handlePress}>
    Warning Color
  </Button>
  
  <Button color="info" onPress={handlePress}>
    Info Color
  </Button>
</View>`}
/>

## States

Different button states including disabled, loading, and full width.

<ComponentPreview
title="Button States"
description="Various states that buttons can have for different interactions"
code={`<View style={{ gap: 12 }}>
<Button disabled onPress={handlePress}>
Disabled Button
</Button>

  <Button loading onPress={handlePress}>
    Loading Button
  </Button>
  
  <Button fullWidth onPress={handlePress}>
    Full Width Button
  </Button>
  
  <Button hapticsDisabled onPress={handlePress}>
    No Haptics Button
  </Button>
</View>`}
/>

## With Icons

Buttons can include icons at the start, end, or both positions.

<ComponentPreview
title="Buttons with Icons"
description="Enhance buttons with icons for better visual communication"
code={`<View style={{ gap: 12 }}>
<Button
startIcon={<MailIcon size={16} />}
onPress={handlePress}

>

    Email

  </Button>
  
  <Button
    endIcon={<ArrowForwardIcon size={16} />}
    variant="outline"
    onPress={handlePress}
  >
    Next
  </Button>
  
  <Button
    startIcon={<SettingsIcon size={16} />}
    endIcon={<FlashIcon size={16} />}
    variant="ghost"
    onPress={handlePress}
  >
    Settings
  </Button>
</View>`}
/>

## Icon-Only Buttons

Perfect square buttons containing only icons, ideal for toolbars and compact layouts.

<ComponentPreview
title="Icon-Only Buttons"
description="Square buttons with just icons, perfect for compact interfaces"
code={`<View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
<Button
variant="primary"
size="md"
style={{ aspectRatio: 1, minWidth: 42 }}
onPress={handlePress}

>

    <PersonIcon size={20} />

  </Button>
  
  <Button
    variant="outline"
    size="sm"
    style={{ aspectRatio: 1, minWidth: 34 }}
    onPress={handlePress}
  >
    <SettingsIcon size={16} />
  </Button>
  
  <Button
    variant="ghost"
    size="lg"
    style={{ aspectRatio: 1, minWidth: 50 }}
    onPress={handlePress}
  >
    <HeartIcon size={24} />
  </Button>
  
  <Button
    variant="soft"
    size="md"
    style={{ aspectRatio: 1, minWidth: 42 }}
    onPress={handlePress}
  >
    <StarIcon size={20} />
  </Button>
  
  <Button
    variant="danger"
    size="sm"
    style={{ aspectRatio: 1, minWidth: 34 }}
    onPress={handlePress}
  >
    <CloseIcon size={16} />
  </Button>
</View>`}
/>

## Icon Button Sizes

Icon-only buttons in all available sizes with proper proportions.

<ComponentPreview
title="Icon Button Sizes"
description="Icon buttons scaled to different sizes while maintaining aspect ratio"
code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
<Button
variant="primary"
size="xs"
style={{ aspectRatio: 1, minWidth: 26 }}
onPress={handlePress}

>

    <AddIcon size={12} />

  </Button>
  
  <Button
    variant="primary"
    size="sm"
    style={{ aspectRatio: 1, minWidth: 34 }}
    onPress={handlePress}
  >
    <AddIcon size={16} />
  </Button>
  
  <Button
    variant="primary"
    size="md"
    style={{ aspectRatio: 1, minWidth: 42 }}
    onPress={handlePress}
  >
    <AddIcon size={20} />
  </Button>
  
  <Button
    variant="primary"
    size="lg"
    style={{ aspectRatio: 1, minWidth: 50 }}
    onPress={handlePress}
  >
    <AddIcon size={24} />
  </Button>
  
  <Button
    variant="primary"
    size="xl"
    style={{ aspectRatio: 1, minWidth: 58 }}
    onPress={handlePress}
  >
    <AddIcon size={28} />
  </Button>
</View>`}
/>

## Combined Examples

Combining different props for specific use cases.

<ComponentPreview
title="Combined Properties"
description="Examples showing combinations of variant, size, and color properties"
code={`<View style={{ gap: 12 }}>
<Button
variant="primary"
size="lg"
color="success"
onPress={handlePress}

>

    Large Success Primary

  </Button>
  
  <Button
    variant="outline"
    size="sm"
    color="error"
    onPress={handlePress}
  >
    Small Error Outline
  </Button>
  
  <Button
    variant="ghost"
    size="md"
    color="info"
    onPress={handlePress}
  >
    Medium Info Ghost
  </Button>
</View>`}
/>

## Interactive Examples

Real-world examples with dynamic states and user interactions.

<ComponentPreview
title="Interactive Loading States"
description="Buttons that demonstrate loading states and user feedback"
code={`const [loadingStates, setLoadingStates] = useState({});

const toggleLoading = (key) => {
setLoadingStates(prev => ({ ...prev, [key]: !prev[key] }));
setTimeout(() => {
setLoadingStates(prev => ({ ...prev, [key]: false }));
}, 2000);
};

return (
<View style={{ gap: 12 }}>
<Button
variant="primary"
loading={loadingStates.save}
onPress={() => toggleLoading('save')}
startIcon={!loadingStates.save ? <SaveIcon size={16} /> : undefined} >
{loadingStates.save ? 'Saving...' : 'Save Document'}
</Button>

    <Button
      variant="danger"
      loading={loadingStates.delete}
      onPress={() => toggleLoading('delete')}
      startIcon={!loadingStates.delete ? <TrashIcon size={16} /> : undefined}
    >
      {loadingStates.delete ? 'Deleting...' : 'Delete Item'}
    </Button>

    <Button
      variant="success"
      size="lg"
      loading={loadingStates.submit}
      onPress={() => toggleLoading('submit')}
      fullWidth
    >
      {loadingStates.submit ? 'Submitting...' : 'Submit Form'}
    </Button>

  </View>
);`}
/>

## Accessibility

- ✅ **Screen Reader Support**: Proper labels and roles for assistive technologies
- ✅ **Keyboard Navigation**: Full keyboard support with focus management
- ✅ **Haptic Feedback**: Tactile feedback on press (can be disabled)
- ✅ **System Accessibility**: Respects user's accessibility preferences
- ✅ **Focus Indicators**: Clear visual focus states for keyboard users
- ✅ **Loading States**: Announces state changes to screen readers

## Best Practices

### **1. Choose Appropriate Variants**

- **Primary**: Main actions (submit, save, continue)
- **Secondary**: Secondary actions (cancel, back)
- **Outline**: Alternative actions or toggle states
- **Ghost**: Subtle actions or navigation
- **Danger**: Destructive actions (delete, remove)

### **2. Consistent Sizing**

- Use consistent button sizes within the same context
- Larger buttons for primary actions
- Smaller buttons for secondary or compact layouts

### **3. Loading States**

- Always show loading states for async operations
- Disable interaction during loading
- Provide clear loading text

### **4. Icon Usage**

- Use icons to enhance button meaning
- Keep icons simple and recognizable
- Maintain consistent icon sizes relative to button size

### **5. Accessibility**

- Provide meaningful labels for screen readers
- Use proper color contrast
- Keep haptic feedback enabled for better UX
- Ensure sufficient touch target size (minimum 44px)

### **6. Full Width Usage**

- Use full-width buttons for primary actions on mobile
- Avoid full-width buttons in wide desktop layouts
- Consider responsive breakpoints
