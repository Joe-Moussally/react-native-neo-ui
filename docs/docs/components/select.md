# Select

A dropdown selection component for choosing from a list of options.

## Installation

```typescript
import { Select } from "@/core/components/Select";
```

## Basic Usage

```typescript
import React from "react";
import { Select } from "@/core/components/Select";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function SelectExample() {
  return (
    <Select
      options={options}
      placeholder="Choose an option"
      onSelectionChange={(value) => console.log(value)}
    />
  );
}
```

## Props

| Prop                | Type                                  | Default | Description                               |
| ------------------- | ------------------------------------- | ------- | ----------------------------------------- |
| `options`           | `SelectOption[]`                      | -       | **Required.** Array of selectable options |
| `value`             | `string \| string[]`                  | -       | Selected value(s)                         |
| `placeholder`       | `string`                              | -       | Placeholder text                          |
| `multiple`          | `boolean`                             | `false` | Allow multiple selections                 |
| `disabled`          | `boolean`                             | `false` | Whether the select is disabled            |
| `onSelectionChange` | `(value: string \| string[]) => void` | -       | Callback when selection changes           |
| `style`             | `StyleProp<ViewStyle>`                | -       | Additional styles                         |

## Types

```typescript
interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}
```
