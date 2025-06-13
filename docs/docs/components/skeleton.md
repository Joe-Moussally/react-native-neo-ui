# Skeleton

A loading placeholder component that provides a low fidelity UI preview while content is loading.

## Installation

```typescript
import { Skeleton } from "@/core/components/Skeleton";
```

## Basic Usage

```typescript
import React from "react";
import { Skeleton } from "@/core/components/Skeleton";

export default function SkeletonExample() {
  return <Skeleton width={200} height={20} />;
}
```

## Props

| Prop           | Type                                    | Default         | Description            |
| -------------- | --------------------------------------- | --------------- | ---------------------- |
| `width`        | `number \| string`                      | `"100%"`        | Width of the skeleton  |
| `height`       | `number \| string`                      | `20`            | Height of the skeleton |
| `variant`      | `"text" \| "rectangular" \| "circular"` | `"rectangular"` | Shape variant          |
| `animation`    | `"pulse" \| "wave" \| "none"`           | `"pulse"`       | Animation type         |
| `borderRadius` | `number`                                | -               | Custom border radius   |
| `style`        | `StyleProp<ViewStyle>`                  | -               | Additional styles      |

## Usage Examples

### Text Skeleton

```typescript
<Skeleton variant="text" width="80%" />
```

### Avatar Skeleton

```typescript
<Skeleton variant="circular" width={40} height={40} />
```

### Card Skeleton

```typescript
<View>
  <Skeleton width="100%" height={200} />
  <Skeleton variant="text" width="60%" />
  <Skeleton variant="text" width="80%" />
</View>
```
