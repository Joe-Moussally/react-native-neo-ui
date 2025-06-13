# Progress

A progress indicator component for showing the completion progress of a task or operation.

## Installation

```typescript
import { Progress } from "@/core/components/Progress";
```

## Basic Usage

```typescript
import React from "react";
import { Progress } from "@/core/components/Progress";

export default function ProgressExample() {
  return <Progress value={65} max={100} />;
}
```

## Props

| Prop        | Type                                                            | Default     | Description                              |
| ----------- | --------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `value`     | `number`                                                        | -           | **Required.** Current progress value     |
| `max`       | `number`                                                        | `100`       | Maximum progress value                   |
| `variant`   | `"linear" \| "circular"`                                        | `"linear"`  | Visual variant of the progress indicator |
| `size`      | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Size of the progress indicator           |
| `color`     | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Color of the progress bar                |
| `showLabel` | `boolean`                                                       | `false`     | Whether to show progress percentage      |
| `style`     | `StyleProp<ViewStyle>`                                          | -           | Additional styles                        |

## Usage Examples

### Linear Progress

```typescript
<Progress value={50} />
<Progress value={75} showLabel />
```

### Circular Progress

```typescript
<Progress value={80} variant="circular" />
```

### Different Colors

```typescript
<Progress value={30} color="warning" />
<Progress value={100} color="success" />
```
