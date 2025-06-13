# Tabs

A tab navigation component for organizing content into multiple sections with easy switching between them.

## Installation

```typescript
import { Tabs } from "@/core/navigation/Tabs";
```

## Basic Usage

```typescript
import React from "react";
import { Tabs } from "@/core/navigation/Tabs";

const tabs = [
  { id: "tab1", label: "Home", content: <HomeContent /> },
  { id: "tab2", label: "Profile", content: <ProfileContent /> },
  { id: "tab3", label: "Settings", content: <SettingsContent /> },
];

export default function TabsExample() {
  return <Tabs tabs={tabs} defaultActiveTab="tab1" />;
}
```

## Props

| Prop               | Type                                  | Default     | Description                      |
| ------------------ | ------------------------------------- | ----------- | -------------------------------- |
| `tabs`             | `TabItem[]`                           | -           | **Required.** Array of tab items |
| `activeTab`        | `string`                              | -           | Currently active tab ID          |
| `defaultActiveTab` | `string`                              | -           | Default active tab ID            |
| `onTabChange`      | `(tabId: string) => void`             | -           | Callback when tab changes        |
| `variant`          | `"default" \| "pills" \| "underline"` | `"default"` | Visual variant of tabs           |
| `position`         | `"top" \| "bottom"`                   | `"top"`     | Position of tab bar              |
| `style`            | `StyleProp<ViewStyle>`                | -           | Additional styles                |

## Types

```typescript
interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactElement;
  disabled?: boolean;
}
```

## Usage Examples

### Basic Tabs

```typescript
<Tabs tabs={tabs} />
```

### Controlled Tabs

```typescript
<Tabs tabs={tabs} activeTab={currentTab} onTabChange={setCurrentTab} />
```

### Tabs with Icons

```typescript
const tabsWithIcons = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    content: <HomeContent />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <ProfileIcon />,
    content: <ProfileContent />,
  },
];
```

### Different Variants

```typescript
<Tabs tabs={tabs} variant="pills" />
<Tabs tabs={tabs} variant="underline" />
```

## Accessibility

- Supports keyboard navigation between tabs
- Provides proper ARIA labels and roles
- Announces tab changes to screen readers
- Maintains focus management when switching tabs
