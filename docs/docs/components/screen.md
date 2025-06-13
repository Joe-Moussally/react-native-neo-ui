# Screen

A screen container component that provides consistent layout and navigation structure for your app screens.

## Installation

```typescript
import { Screen } from "@/core/navigation/Screen";
```

## Basic Usage

```typescript
import React from "react";
import { Screen } from "@/core/navigation/Screen";

export default function MyScreen() {
  return (
    <Screen title="My Screen">
      <Text>Screen content goes here</Text>
    </Screen>
  );
}
```

## Props

| Prop           | Type                   | Default | Description                  |
| -------------- | ---------------------- | ------- | ---------------------------- |
| `title`        | `string`               | -       | Screen title for navigation  |
| `showHeader`   | `boolean`              | `true`  | Whether to show the header   |
| `headerStyle`  | `StyleProp<ViewStyle>` | -       | Custom header styles         |
| `contentStyle` | `StyleProp<ViewStyle>` | -       | Custom content area styles   |
| `children`     | `ReactNode`            | -       | **Required.** Screen content |
| `onBack`       | `() => void`           | -       | Custom back button handler   |
| `rightAction`  | `ReactElement`         | -       | Right side header action     |

## Usage Examples

### Basic Screen

```typescript
<Screen title="Settings">
  <Text>Settings content</Text>
</Screen>
```

### Screen without Header

```typescript
<Screen showHeader={false}>
  <Text>Full screen content</Text>
</Screen>
```

### Screen with Custom Actions

```typescript
<Screen
  title="Profile"
  rightAction={<Button title="Edit" onPress={handleEdit} />}
>
  <Text>Profile content</Text>
</Screen>
```

## Accessibility

- Provides proper navigation structure for screen readers
- Supports focus management between screens
- Header title is announced when screen loads
