# Toast

A temporary notification component that appears briefly to provide feedback to users.

## Installation

```typescript
import { Toast } from "@/core/components/Toast";
```

## Basic Usage

```typescript
import React from "react";
import { Toast } from "@/core/components/Toast";

export default function ToastExample() {
  return (
    <Toast
      message="Operation completed successfully!"
      type="success"
      visible={true}
    />
  );
}
```

## Props

| Prop        | Type                                          | Default  | Description                           |
| ----------- | --------------------------------------------- | -------- | ------------------------------------- |
| `message`   | `string`                                      | -        | **Required.** Toast message content   |
| `type`      | `"success" \| "error" \| "warning" \| "info"` | `"info"` | Type of toast notification            |
| `visible`   | `boolean`                                     | `false`  | Whether the toast is visible          |
| `duration`  | `number`                                      | `3000`   | Auto-dismiss duration in milliseconds |
| `position`  | `"top" \| "bottom"`                           | `"top"`  | Position of the toast                 |
| `onDismiss` | `() => void`                                  | -        | Callback when toast is dismissed      |
| `style`     | `StyleProp<ViewStyle>`                        | -        | Additional styles                     |

## Usage Examples

### Success Toast

```typescript
<Toast message="Profile updated successfully!" type="success" visible={true} />
```

### Error Toast

```typescript
<Toast message="Failed to save changes" type="error" visible={true} />
```

### Auto-dismiss Toast

```typescript
<Toast
  message="Settings saved"
  type="info"
  visible={true}
  duration={5000}
  onDismiss={() => setToastVisible(false)}
/>
```
