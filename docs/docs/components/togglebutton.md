# ToggleButton

A toggle button component for binary state selection, providing visual feedback for on/off states.

## Installation

```typescript
import { ToggleButton } from "@/core/components/ToggleButton";
```

## Basic Usage

```typescript
import React, { useState } from "react";
import { ToggleButton } from "@/core/components/ToggleButton";

export default function ToggleButtonExample() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ToggleButton
      value={isToggled}
      onToggle={setIsToggled}
      label="Enable notifications"
    />
  );
}
```

## Props

| Prop       | Type                                                            | Default     | Description                                      |
| ---------- | --------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| `value`    | `boolean`                                                       | -           | **Required.** Current toggle state               |
| `onToggle` | `(value: boolean) => void`                                      | -           | **Required.** Callback when toggle state changes |
| `label`    | `string`                                                        | -           | Label text for the toggle button                 |
| `disabled` | `boolean`                                                       | `false`     | Whether the toggle is disabled                   |
| `size`     | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Size of the toggle button                        |
| `color`    | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Color variant                                    |
| `style`    | `StyleProp<ViewStyle>`                                          | -           | Additional styles                                |

## Usage Examples

### Basic Toggle

```typescript
<ToggleButton value={darkMode} onToggle={setDarkMode} label="Dark Mode" />
```

### Different Sizes

```typescript
<ToggleButton value={small} onToggle={setSmall} size="sm" />
<ToggleButton value={medium} onToggle={setMedium} size="md" />
<ToggleButton value={large} onToggle={setLarge} size="lg" />
```

### Disabled State

```typescript
<ToggleButton
  value={false}
  onToggle={() => {}}
  disabled
  label="Disabled toggle"
/>
```
