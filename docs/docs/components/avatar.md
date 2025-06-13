# Avatar

A flexible avatar component for displaying user profile images, initials, or placeholder content.

## Installation

```typescript
import { Avatar } from "@/core/components/Avatar";
```

## Basic Usage

```typescript
import React from "react";
import { Avatar } from "@/core/components/Avatar";

export default function AvatarExample() {
  return (
    <Avatar source={{ uri: "https://example.com/avatar.jpg" }} size="md" />
  );
}
```

## Props

| Prop       | Type                                   | Default | Description                               |
| ---------- | -------------------------------------- | ------- | ----------------------------------------- |
| `source`   | `ImageSourcePropType`                  | -       | Image source for the avatar               |
| `size`     | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Size of the avatar                        |
| `name`     | `string`                               | -       | Name to generate initials from            |
| `fallback` | `ReactNode`                            | -       | Fallback content when image fails to load |
| `style`    | `StyleProp<ViewStyle>`                 | -       | Additional styles to apply                |

## Usage Examples

### With Image

```typescript
<Avatar source={{ uri: "https://example.com/user.jpg" }} />
```

### With Initials

```typescript
<Avatar name="John Doe" />
```

### Different Sizes

```typescript
<Avatar source={{ uri: 'https://example.com/user.jpg' }} size="xs" />
<Avatar source={{ uri: 'https://example.com/user.jpg' }} size="sm" />
<Avatar source={{ uri: 'https://example.com/user.jpg' }} size="md" />
<Avatar source={{ uri: 'https://example.com/user.jpg' }} size="lg" />
<Avatar source={{ uri: 'https://example.com/user.jpg' }} size="xl" />
```

## Accessibility

- Provides appropriate content description for screen readers
- Maintains proper contrast ratios for initials
- Supports focus states for interactive avatars
