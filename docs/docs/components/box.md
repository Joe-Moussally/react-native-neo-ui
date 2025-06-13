# Box

A flexible layout component that serves as a building block for creating responsive layouts with consistent spacing and styling.

## Installation

```typescript
import { Box } from "@/core/components/Box";
```

## Basic Usage

```typescript
import React from "react";
import { Box } from "@/core/components/Box";

export default function BoxExample() {
  return (
    <Box padding="md" margin="sm">
      <Text>Content goes here</Text>
    </Box>
  );
}
```

## Props

| Prop              | Type                                                                          | Default | Description                        |
| ----------------- | ----------------------------------------------------------------------------- | ------- | ---------------------------------- |
| `padding`         | `SpacingValue`                                                                | -       | Padding using theme spacing values |
| `margin`          | `SpacingValue`                                                                | -       | Margin using theme spacing values  |
| `backgroundColor` | `string`                                                                      | -       | Background color                   |
| `borderRadius`    | `number \| string`                                                            | -       | Border radius                      |
| `flex`            | `number`                                                                      | -       | Flex value                         |
| `flexDirection`   | `"row" \| "column"`                                                           | -       | Flex direction                     |
| `alignItems`      | `FlexAlignType`                                                               | -       | Align items                        |
| `justifyContent`  | `"flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around"` | -       | Justify content                    |
| `style`           | `StyleProp<ViewStyle>`                                                        | -       | Additional styles                  |

## Usage Examples

### Basic Layout

```typescript
<Box padding="lg" backgroundColor="#f5f5f5">
  <Text>Padded content</Text>
</Box>
```

### Flex Layout

```typescript
<Box flexDirection="row" justifyContent="space-between">
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```
