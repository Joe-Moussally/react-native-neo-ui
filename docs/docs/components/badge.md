# Badge

A small status indicator component for displaying notifications, counts, or status information.

## Installation

```typescript
import { Badge } from "@/core/components/Badge";
```

## Basic Usage

```typescript
import React from "react";
import { Badge } from "@/core/components/Badge";

export default function BadgeExample() {
  return <Badge count={5} />;
}
```

## Props

| Prop       | Type                                                            | Default     | Description                           |
| ---------- | --------------------------------------------------------------- | ----------- | ------------------------------------- |
| `count`    | `number`                                                        | -           | Number to display in the badge        |
| `variant`  | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Visual variant of the badge           |
| `size`     | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Size of the badge                     |
| `showZero` | `boolean`                                                       | `false`     | Whether to show badge when count is 0 |
| `max`      | `number`                                                        | `99`        | Maximum count to display              |
| `style`    | `StyleProp<ViewStyle>`                                          | -           | Additional styles to apply            |

## Usage Examples

### Basic Badge

```typescript
<Badge count={3} />
```

### Different Variants

```typescript
<Badge count={5} variant="primary" />
<Badge count={2} variant="success" />
<Badge count={1} variant="warning" />
<Badge count={8} variant="error" />
```

### With Maximum Count

```typescript
<Badge count={150} max={99} /> // Shows "99+"
```
