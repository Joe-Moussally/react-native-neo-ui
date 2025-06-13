# Alert

A flexible alert component for displaying contextual feedback messages to users. The Alert component supports different severity levels and variants to provide appropriate visual feedback.

## Installation

```typescript
import { Alert } from "@/core/components/Alert";
```

## Basic Usage

```typescript
import React from "react";
import { Alert } from "@/core/components/Alert";

export default function AlertExample() {
  return <Alert severity="info">This is an informational alert message.</Alert>;
}
```

## Props

| Prop       | Type                                          | Default   | Description                                                         |
| ---------- | --------------------------------------------- | --------- | ------------------------------------------------------------------- |
| `severity` | `"success" \| "info" \| "warning" \| "error"` | -         | **Required.** The severity level that determines the color and icon |
| `variant`  | `"solid" \| "soft"`                           | `"solid"` | The visual variant of the alert                                     |
| `title`    | `string`                                      | -         | Optional title for the alert                                        |
| `children` | `ReactNode`                                   | -         | **Required.** The main content of the alert                         |
| `style`    | `StyleProp<ViewStyle>`                        | -         | Additional styles to apply                                          |
| `showIcon` | `boolean`                                     | `true`    | Whether to show the severity icon                                   |
| `onClose`  | `() => void`                                  | -         | Callback for close action (not currently implemented)               |

## Severity Types

### Success

Use for positive feedback and successful operations.

```typescript
<Alert severity="success" title="Success!">
  Your changes have been saved successfully.
</Alert>
```

### Info

Use for general information and neutral messages.

```typescript
<Alert severity="info" title="Information">
  Please review the following details before proceeding.
</Alert>
```

### Warning

Use for warnings and potentially problematic situations.

```typescript
<Alert severity="warning" title="Warning">
  This action cannot be undone. Please proceed with caution.
</Alert>
```

### Error

Use for errors and critical issues that need immediate attention.

```typescript
<Alert severity="error" title="Error">
  An error occurred while processing your request.
</Alert>
```

## Variants

### Solid (Default)

Provides a strong visual emphasis with solid background colors.

```typescript
<Alert severity="info" variant="solid">
  This is a solid variant alert.
</Alert>
```

### Soft

Provides a subtle appearance with transparent backgrounds and colored borders.

```typescript
<Alert severity="info" variant="soft">
  This is a soft variant alert.
</Alert>
```

## Advanced Usage

### With Title and Custom Styling

```typescript
<Alert
  severity="warning"
  title="Important Notice"
  style={{ marginVertical: 16 }}
>
  Please update your profile information to continue using the service.
</Alert>
```

### Without Icon

```typescript
<Alert severity="info" showIcon={false}>
  This alert doesn't display an icon.
</Alert>
```

## Accessibility

- The Alert component uses semantic colors that work well in both light and dark themes
- Icons provide visual context that supplements the text content
- Color contrast is maintained according to accessibility standards

## Theming

The Alert component automatically adapts to your app's theme:

- Uses theme colors for success, info, warning, and error states
- Supports both light and dark themes
- Border radius and spacing follow the theme's design tokens

## Best Practices

1. **Use appropriate severity levels** - Match the severity to the importance and nature of the message
2. **Keep messages concise** - Alert messages should be brief and actionable
3. **Provide clear titles** - Use descriptive titles when the alert content is complex
4. **Consider placement** - Position alerts where users expect to see feedback
5. **Use soft variants sparingly** - Solid variants provide better visibility for important messages
