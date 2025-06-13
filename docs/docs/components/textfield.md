# TextField

Text fields allow users to enter and edit text. TeamLock UI's TextField component provides a flexible and accessible input solution with multiple variants and customization options.

## Import

```tsx
import { TextField } from "teamlock-ui";
```

## Basic Usage

```tsx
import React, { useState } from "react";
import { TextField } from "teamlock-ui";

export function BasicTextFieldExample() {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="Email"
      placeholder="Enter your email"
      value={value}
      onChangeText={setValue}
    />
  );
}
```

## Variants

The TextField component supports three visual variants:

### Filled (Default)

```tsx
<TextField variant="filled" label="Filled TextField" placeholder="Enter text" />
```

### Outlined

```tsx
<TextField
  variant="outline"
  label="Outlined TextField"
  placeholder="Enter text"
/>
```

### Underline

```tsx
<TextField
  variant="underline"
  label="Underline TextField"
  placeholder="Enter text"
/>
```

## Sizes

Text fields come in three different sizes:

```tsx
<TextField size="sm" label="Small" placeholder="Small text field" />
<TextField size="md" label="Medium" placeholder="Medium text field" />
<TextField size="lg" label="Large" placeholder="Large text field" />
```

## Colors

Customize text field colors using semantic color keys:

```tsx
<TextField color="primary" label="Primary" />
<TextField color="secondary" label="Secondary" />
<TextField color="accent" label="Accent" />
<TextField color="success" label="Success" />
<TextField color="error" label="Error" />
<TextField color="warning" label="Warning" />
<TextField color="info" label="Info" />
```

## States

### Error State

```tsx
<TextField
  label="Email"
  placeholder="Enter your email"
  error
  errorText="Please enter a valid email address"
/>
```

### Disabled State

```tsx
<TextField
  label="Disabled Field"
  placeholder="This field is disabled"
  disabled
/>
```

### Loading State

```tsx
<TextField label="Loading Field" placeholder="Loading..." loading />
```

### Required Field

```tsx
<TextField
  label="Required Field"
  placeholder="This field is required"
  required
/>
```

## Helper Text

Provide additional context with helper text:

```tsx
<TextField
  label="Password"
  placeholder="Enter your password"
  secureTextEntry
  helperText="Password must be at least 8 characters long"
/>
```

## Icons

Add icons to enhance the user experience:

```tsx
import { Ionicons } from '@expo/vector-icons';

// Start icon
<TextField
  label="Search"
  placeholder="Search..."
  startIcon={<Ionicons name="search" />}
/>

// End icon
<TextField
  label="Password"
  placeholder="Enter password"
  secureTextEntry
  endIcon={<Ionicons name="eye-off" />}
/>

// Both icons
<TextField
  label="Amount"
  placeholder="0.00"
  startIcon={<Ionicons name="card" />}
  endIcon={<Ionicons name="calculator" />}
/>
```

## Multiline Text

Create text areas for longer content:

```tsx
<TextField
  label="Description"
  placeholder="Enter a description..."
  multiline
  numberOfLines={4}
/>
```

## Input Types

Configure different input behaviors:

### Email Input

```tsx
<TextField
  label="Email"
  placeholder="user@example.com"
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
/>
```

### Phone Number

```tsx
<TextField
  label="Phone"
  placeholder="+1 (555) 123-4567"
  keyboardType="phone-pad"
/>
```

### Numeric Input

```tsx
<TextField label="Age" placeholder="25" keyboardType="numeric" />
```

### Password Input

```tsx
<TextField
  label="Password"
  placeholder="Enter password"
  secureTextEntry
  autoCapitalize="none"
  autoCorrect={false}
/>
```

## Full Width

Make text fields span the full width of their container:

```tsx
<TextField
  label="Full Width Field"
  placeholder="This field spans full width"
  fullWidth
/>
```

## Styling

### Custom Styles

```tsx
<TextField
  label="Custom Styled"
  placeholder="Custom styling"
  style={{
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  }}
  containerStyle={{
    marginVertical: 10,
  }}
/>
```

### Theme-Aware Styling

```tsx
import { useTheme } from "teamlock-ui";

export function ThemedTextField() {
  const { theme } = useTheme();

  return (
    <TextField
      label="Themed Field"
      placeholder="Theme-aware styling"
      style={{
        borderColor: theme.colors.accent,
        backgroundColor: theme.colors.surface,
      }}
    />
  );
}
```

## Event Handlers

Handle various text field events:

```tsx
<TextField
  label="Interactive Field"
  placeholder="Type something..."
  onChangeText={(text) => console.log("Text changed:", text)}
  onFocus={() => console.log("Field focused")}
  onBlur={() => console.log("Field blurred")}
  onSubmitEditing={() => console.log("Submit pressed")}
/>
```

## Complete Example

```tsx
import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TextField, Button } from "teamlock-ui";
import { Ionicons } from "@expo/vector-icons";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Form submitted successfully!");
    }, 2000);
  };

  return (
    <View style={{ padding: 20, gap: 16 }}>
      <TextField
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        error={!!errors.name}
        errorText={errors.name}
        required
        startIcon={<Ionicons name="person" />}
        fullWidth
      />

      <TextField
        label="Email Address"
        placeholder="user@example.com"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        error={!!errors.email}
        errorText={errors.email}
        required
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        startIcon={<Ionicons name="mail" />}
        fullWidth
      />

      <TextField
        label="Phone Number"
        placeholder="+1 (555) 123-4567"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
        startIcon={<Ionicons name="call" />}
        fullWidth
      />

      <TextField
        label="Message"
        placeholder="Enter your message..."
        value={formData.message}
        onChangeText={(text) => setFormData({ ...formData, message: text })}
        multiline
        numberOfLines={4}
        helperText="Optional: Tell us more about your inquiry"
        fullWidth
      />

      <Button
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
        onPress={handleSubmit}
      >
        Submit Form
      </Button>
    </View>
  );
}
```

## Props

| Prop              | Type                     | Default       | Description                    |
| ----------------- | ------------------------ | ------------- | ------------------------------ |
| `label`           | `string`                 | -             | Field label text               |
| `placeholder`     | `string`                 | -             | Placeholder text               |
| `value`           | `string`                 | -             | Current input value            |
| `onChangeText`    | `(text: string) => void` | -             | Text change handler            |
| `variant`         | `TextFieldVariant`       | `"filled"`    | Visual style variant           |
| `size`            | `TextFieldSize`          | `"md"`        | Field size                     |
| `color`           | `TextFieldColorKey`      | `"primary"`   | Color theme key                |
| `fullWidth`       | `boolean`                | `false`       | Whether field takes full width |
| `disabled`        | `boolean`                | `false`       | Disable field interaction      |
| `error`           | `boolean`                | `false`       | Show error state               |
| `loading`         | `boolean`                | `false`       | Show loading indicator         |
| `required`        | `boolean`                | `false`       | Mark field as required         |
| `helperText`      | `string`                 | -             | Helper text below field        |
| `errorText`       | `string`                 | -             | Error message text             |
| `startIcon`       | `React.ReactNode`        | -             | Icon at start of field         |
| `endIcon`         | `React.ReactNode`        | -             | Icon at end of field           |
| `multiline`       | `boolean`                | `false`       | Enable multiline input         |
| `numberOfLines`   | `number`                 | `1`           | Number of lines for multiline  |
| `secureTextEntry` | `boolean`                | `false`       | Hide text input (passwords)    |
| `keyboardType`    | `KeyboardTypeOptions`    | `"default"`   | Keyboard type                  |
| `autoCapitalize`  | `AutoCapitalize`         | `"sentences"` | Auto-capitalization behavior   |
| `autoCorrect`     | `boolean`                | `true`        | Enable auto-correction         |
| `returnKeyType`   | `ReturnKeyTypeOptions`   | `"done"`      | Return key type                |
| `style`           | `StyleProp<TextStyle>`   | -             | Input style overrides          |
| `containerStyle`  | `StyleProp<ViewStyle>`   | -             | Container style overrides      |
| `onFocus`         | `() => void`             | -             | Focus event handler            |
| `onBlur`          | `() => void`             | -             | Blur event handler             |
| `onSubmitEditing` | `() => void`             | -             | Submit event handler           |

## Types

### TextFieldVariant

```tsx
type TextFieldVariant = "filled" | "outline" | "underline";
```

### TextFieldSize

```tsx
type TextFieldSize = "sm" | "md" | "lg";
```

### TextFieldColorKey

```tsx
type TextFieldColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "error"
  | "warning"
  | "info";
```

## Accessibility

The TextField component includes built-in accessibility features:

- Proper `accessibilityRole` is set to "text"
- Labels are properly associated with inputs
- Error states are announced to screen readers
- Supports `accessibilityLabel` and `accessibilityHint`
- Required fields are properly indicated

```tsx
<TextField
  label="Email"
  placeholder="Enter email"
  accessibilityLabel="Email address input"
  accessibilityHint="Enter your email address for account access"
  required
/>
```

## Best Practices

1. **Always provide labels** for better accessibility:

   ```tsx
   // ✅ Good
   <TextField label="Email" placeholder="user@example.com" />

   // ❌ Avoid
   <TextField placeholder="Email" />
   ```

2. **Use appropriate keyboard types**:

   ```tsx
   <TextField keyboardType="email-address" />
   <TextField keyboardType="phone-pad" />
   <TextField keyboardType="numeric" />
   ```

3. **Provide helpful error messages**:

   ```tsx
   <TextField
     error={!!emailError}
     errorText="Please enter a valid email address"
   />
   ```

4. **Use helper text for guidance**:

   ```tsx
   <TextField helperText="Password must be at least 8 characters" />
   ```

5. **Disable auto-features for sensitive inputs**:
   ```tsx
   <TextField secureTextEntry autoCapitalize="none" autoCorrect={false} />
   ```

---

_Text fields are essential for user input. Design them thoughtfully to create great user experiences!_
