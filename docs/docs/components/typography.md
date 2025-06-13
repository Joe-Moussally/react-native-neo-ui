# Typography

A flexible text component that provides consistent typography styles across your application.

## Installation

```typescript
import { Typography } from "@/core/components/Typography";
```

## Basic Usage

```typescript
import React from "react";
import { Typography } from "@/core/components/Typography";

export default function TypographyExample() {
  return <Typography variant="h1">Welcome to our app</Typography>;
}
```

## Props

| Prop       | Type                                                                                            | Default   | Description                |
| ---------- | ----------------------------------------------------------------------------------------------- | --------- | -------------------------- |
| `variant`  | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "body1" \| "body2" \| "caption" \| "overline"` | `"body1"` | Typography variant         |
| `color`    | `"primary" \| "secondary" \| "error" \| "warning" \| "info" \| "success"`                       | -         | Text color variant         |
| `align`    | `"left" \| "center" \| "right" \| "justify"`                                                    | `"left"`  | Text alignment             |
| `weight`   | `"light" \| "regular" \| "medium" \| "semibold" \| "bold"`                                      | -         | Font weight                |
| `children` | `ReactNode`                                                                                     | -         | **Required.** Text content |
| `style`    | `StyleProp<TextStyle>`                                                                          | -         | Additional text styles     |

## Variants

### Headings

```typescript
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
```

### Body Text

```typescript
<Typography variant="body1">
  This is body text with the default size and weight.
</Typography>
<Typography variant="body2">
  This is smaller body text for secondary content.
</Typography>
```

### Utility Text

```typescript
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">OVERLINE TEXT</Typography>
```

## Usage Examples

### Colored Text

```typescript
<Typography color="primary">Primary colored text</Typography>
<Typography color="error">Error colored text</Typography>
<Typography color="success">Success colored text</Typography>
```

### Aligned Text

```typescript
<Typography align="center">Center aligned text</Typography>
<Typography align="right">Right aligned text</Typography>
```

### Custom Weight

```typescript
<Typography weight="bold">Bold text</Typography>
<Typography weight="light">Light text</Typography>
```
