# Ticker

A scrolling text component for displaying continuous or animated text content.

## Installation

```typescript
import { Ticker } from "@/core/components/Ticker";
```

## Basic Usage

```typescript
import React from "react";
import { Ticker } from "@/core/components/Ticker";

export default function TickerExample() {
  return <Ticker text="This is a scrolling ticker message" />;
}
```

## Props

| Prop           | Type                   | Default  | Description                                 |
| -------------- | ---------------------- | -------- | ------------------------------------------- |
| `text`         | `string`               | -        | **Required.** Text to display in the ticker |
| `speed`        | `number`               | `50`     | Animation speed in pixels per second        |
| `direction`    | `"left" \| "right"`    | `"left"` | Scroll direction                            |
| `pauseOnHover` | `boolean`              | `false`  | Whether to pause animation on hover         |
| `loop`         | `boolean`              | `true`   | Whether to loop the animation               |
| `style`        | `StyleProp<ViewStyle>` | -        | Additional styles                           |
| `textStyle`    | `StyleProp<TextStyle>` | -        | Text styles                                 |

## Usage Examples

### Basic Ticker

```typescript
<Ticker text="Breaking news: This is important information!" />
```

### Custom Speed and Direction

```typescript
<Ticker text="Slow moving ticker" speed={20} direction="right" />
```

### Styled Ticker

```typescript
<Ticker
  text="Styled ticker message"
  textStyle={{ color: "red", fontSize: 18 }}
  style={{ backgroundColor: "#f0f0f0" }}
/>
```
