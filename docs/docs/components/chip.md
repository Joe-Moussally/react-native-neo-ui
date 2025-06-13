# Chip

A compact element that represents an input, attribute, or action. Chips are commonly used for tags, categories, or selections.

## Installation

```typescript
import { Chip } from "@/core/components/Chip";
```

## Basic Usage

```typescript
import React from "react";
import { Chip } from "@/core/components/Chip";

export default function ChipExample() {
  return <Chip label="React Native" />;
}
```

## Props

| Prop            | Type                                                            | Default     | Description                               |
| --------------- | --------------------------------------------------------------- | ----------- | ----------------------------------------- |
| `label`         | `string`                                                        | -           | **Required.** Text to display in the chip |
| `variant`       | `"filled" \| "outlined"`                                        | `"filled"`  | Visual variant of the chip                |
| `size`          | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Size of the chip                          |
| `color`         | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Color variant                             |
| `onPress`       | `() => void`                                                    | -           | Callback when chip is pressed             |
| `onDeletePress` | `() => void`                                                    | -           | Callback when delete button is pressed    |
| `disabled`      | `boolean`                                                       | `false`     | Whether the chip is disabled              |
| `style`         | `StyleProp<ViewStyle>`                                          | -           | Additional styles                         |

## Usage Examples

### Basic Chips

```typescript
<Chip label="Technology" />
<Chip label="Design" variant="outlined" />
```

### Interactive Chips

```typescript
<Chip
  label="Removable"
  onDeletePress={() => console.log('Delete pressed')}
/>
<Chip
  label="Clickable"
  onPress={() => console.log('Chip pressed')}
/>
```

### Different Colors

```typescript
<Chip label="Primary" color="primary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Error" color="error" />
```
