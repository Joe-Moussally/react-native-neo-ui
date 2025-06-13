# ThemedText

A themed text component that automatically adapts to your app's theme configuration, providing consistent styling across light and dark modes.

## Installation

```typescript
import { ThemedText } from "@/core/components/ThemedText";
```

## Basic Usage

```typescript
import React from "react";
import { ThemedText } from "@/core/components/ThemedText";

export default function ThemedTextExample() {
  return <ThemedText type="title">Welcome to our themed app</ThemedText>;
}
```

## Props

| Prop         | Type                                                                | Default     | Description                 |
| ------------ | ------------------------------------------------------------------- | ----------- | --------------------------- |
| `type`       | `"default" \| "title" \| "defaultSemiBold" \| "subtitle" \| "link"` | `"default"` | Text type variant           |
| `lightColor` | `string`                                                            | -           | Color to use in light theme |
| `darkColor`  | `string`                                                            | -           | Color to use in dark theme  |
| `children`   | `ReactNode`                                                         | -           | **Required.** Text content  |
| `style`      | `StyleProp<TextStyle>`                                              | -           | Additional text styles      |

## Text Types

### Default

```typescript
<ThemedText type="default">
  This is default themed text that adapts to light/dark mode.
</ThemedText>
```

### Title

```typescript
<ThemedText type="title">Large title text</ThemedText>
```

### Subtitle

```typescript
<ThemedText type="subtitle">Subtitle text with medium emphasis</ThemedText>
```

### Link

```typescript
<ThemedText type="link">Clickable link text</ThemedText>
```

### Semi Bold

```typescript
<ThemedText type="defaultSemiBold">Semi-bold emphasized text</ThemedText>
```

## Custom Colors

```typescript
<ThemedText lightColor="#333333" darkColor="#ffffff">
  Custom colored themed text
</ThemedText>
```

## Accessibility

- Automatically maintains proper contrast ratios between light and dark themes
- Uses semantic text colors that adapt to the current theme
- Supports screen readers with appropriate text styling
