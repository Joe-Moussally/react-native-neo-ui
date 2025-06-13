# Rating

A star rating component for collecting and displaying user ratings and reviews.

## Installation

```typescript
import { Rating } from "@/core/components/Rating";
```

## Basic Usage

```typescript
import React from "react";
import { Rating } from "@/core/components/Rating";

export default function RatingExample() {
  return <Rating value={4} max={5} />;
}
```

## Props

| Prop             | Type                       | Default | Description                        |
| ---------------- | -------------------------- | ------- | ---------------------------------- |
| `value`          | `number`                   | -       | **Required.** Current rating value |
| `max`            | `number`                   | `5`     | Maximum rating value               |
| `size`           | `"sm" \| "md" \| "lg"`     | `"md"`  | Size of the rating stars           |
| `color`          | `string`                   | -       | Color of filled stars              |
| `readonly`       | `boolean`                  | `false` | Whether the rating is read-only    |
| `onRatingChange` | `(rating: number) => void` | -       | Callback when rating changes       |
| `allowHalf`      | `boolean`                  | `false` | Whether to allow half-star ratings |
| `style`          | `StyleProp<ViewStyle>`     | -       | Additional styles                  |

## Usage Examples

### Basic Rating

```typescript
<Rating value={3.5} />
```

### Interactive Rating

```typescript
<Rating value={0} onRatingChange={(rating) => console.log("Rating:", rating)} />
```

### Half Star Ratings

```typescript
<Rating value={3.5} allowHalf />
```

### Read-only Rating

```typescript
<Rating value={4} readonly />
```
