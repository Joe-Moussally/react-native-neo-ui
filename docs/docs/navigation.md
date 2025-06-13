# Navigation

TeamLock UI provides navigation components and utilities to create consistent and accessible navigation experiences across your React Native application. Built on top of React Navigation and Expo Router, it offers a streamlined approach to screen management and navigation patterns.

## Overview

The navigation system in TeamLock UI consists of:

- **Screen Component**: A wrapper component that provides consistent screen layout and theming
- **Navigation Utilities**: Helper functions and hooks for navigation
- **Theme Integration**: Automatic theme application to navigation elements

## Screen Component

The `Screen` component is the foundation of navigation in TeamLock UI. It provides consistent styling, safe area handling, and theme integration for all screens in your application.

### Import

```tsx
import { Screen } from "teamlock-ui";
```

### Basic Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Screen } from "teamlock-ui";

export function HomeScreen() {
  return (
    <Screen title="Home">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to TeamLock!</Text>
      </View>
    </Screen>
  );
}
```

### Screen with Custom Header

```tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Screen, Button } from "teamlock-ui";
import { Ionicons } from "@expo/vector-icons";

export function ProfileScreen() {
  const handleSettings = () => {
    // Navigate to settings
  };

  const handleBack = () => {
    // Handle back navigation
  };

  return (
    <Screen
      title="Profile"
      headerLeft={() => (
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      )}
      headerRight={() => (
        <TouchableOpacity onPress={handleSettings}>
          <Ionicons name="settings" size={24} />
        </TouchableOpacity>
      )}
    >
      {/* Screen content */}
    </Screen>
  );
}
```

### Screen without Safe Area

For screens that need full control over the layout:

```tsx
<Screen title="Full Screen" useSafeArea={false}>
  {/* Content that extends to screen edges */}
</Screen>
```

### Custom Screen Options

Pass additional React Navigation options:

```tsx
<Screen
  title="Modal Screen"
  options={{
    presentation: "modal",
    headerShown: false,
    animation: "slide_from_bottom",
  }}
>
  {/* Modal content */}
</Screen>
```

### Custom Styling

Apply custom styles to the screen container:

```tsx
<Screen
  title="Custom Screen"
  style={{
    backgroundColor: "#f0f0f0",
    padding: 20,
  }}
>
  {/* Screen content */}
</Screen>
```

## Navigation Patterns

### Tab Navigation

Using Expo Router with tab navigation:

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "teamlock-ui";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

### Stack Navigation

```tsx
// app/_layout.tsx
import { Stack } from "expo-router";
import { useTheme } from "teamlock-ui";

export default function RootLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          color: theme.colors.text,
        },
        headerShown: false, // Let Screen component handle headers
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
```

### Modal Navigation

```tsx
// app/modal.tsx
import React from "react";
import { View, Text } from "react-native";
import { Screen, Button } from "teamlock-ui";
import { router } from "expo-router";

export default function ModalScreen() {
  return (
    <Screen
      title="Modal"
      options={{
        presentation: "modal",
        headerLeft: () => (
          <Button variant="ghost" size="sm" onPress={() => router.back()}>
            Cancel
          </Button>
        ),
        headerRight: () => (
          <Button
            variant="ghost"
            size="sm"
            onPress={() => {
              // Save and close
              router.back();
            }}
          >
            Save
          </Button>
        ),
      }}
    >
      <View style={{ padding: 20 }}>
        <Text>Modal content goes here</Text>
      </View>
    </Screen>
  );
}
```

## Navigation Hooks

### useRouter

Access the Expo Router instance:

```tsx
import { router } from "expo-router";

export function NavigationExample() {
  const handleNavigate = () => {
    router.push("/profile");
  };

  const handleBack = () => {
    router.back();
  };

  const handleReplace = () => {
    router.replace("/login");
  };

  return (
    <Screen title="Navigation">
      <Button onPress={handleNavigate}>Go to Profile</Button>
      <Button onPress={handleBack}>Go Back</Button>
      <Button onPress={handleReplace}>Replace with Login</Button>
    </Screen>
  );
}
```

### usePathname

Get the current route pathname:

```tsx
import { usePathname } from "expo-router";

export function CurrentRoute() {
  const pathname = usePathname();

  return (
    <Screen title="Current Route">
      <Text>Current path: {pathname}</Text>
    </Screen>
  );
}
```

### useLocalSearchParams

Access route parameters:

```tsx
import { useLocalSearchParams } from "expo-router";

export function UserProfile() {
  const { id } = useLocalSearchParams();

  return (
    <Screen title="User Profile">
      <Text>User ID: {id}</Text>
    </Screen>
  );
}
```

## Theme Integration

Navigation components automatically integrate with the TeamLock UI theme system:

```tsx
import { useTheme } from "teamlock-ui";

export function ThemedNavigation() {
  const { theme } = useTheme();

  return (
    <Screen
      title="Themed Screen"
      options={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.onPrimary,
      }}
    >
      {/* Content automatically uses theme colors */}
    </Screen>
  );
}
```

## Complete Navigation Example

```tsx
// app/(tabs)/index.tsx
import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { Screen, Button, TextField, Card } from "teamlock-ui";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  const showNotifications = () => {
    Alert.alert("Notifications", "No new notifications");
  };

  return (
    <Screen
      title="TeamLock"
      headerRight={() => (
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Button
            variant="ghost"
            size="sm"
            onPress={showNotifications}
            startIcon={<Ionicons name="notifications" />}
          />
          <Button
            variant="ghost"
            size="sm"
            onPress={handleSettings}
            startIcon={<Ionicons name="settings" />}
          />
        </View>
      )}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <TextField
          label="Search"
          placeholder="Search for anything..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          startIcon={<Ionicons name="search" />}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          style={{ marginBottom: 20 }}
        />

        <Card style={{ marginBottom: 16 }}>
          <Card.Content>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
              Welcome Back!
            </Text>
            <Text style={{ marginBottom: 16 }}>
              Ready to secure your team's workflow?
            </Text>
            <Button
              variant="primary"
              fullWidth
              onPress={handleProfile}
              startIcon={<Ionicons name="person" />}
            >
              View Profile
            </Button>
          </Card.Content>
        </Card>

        <View style={{ gap: 12 }}>
          <Button
            variant="outline"
            fullWidth
            onPress={() => router.push("/vault")}
            startIcon={<Ionicons name="lock-closed" />}
          >
            Access Vault
          </Button>

          <Button
            variant="outline"
            fullWidth
            onPress={() => router.push("/team")}
            startIcon={<Ionicons name="people" />}
          >
            Manage Team
          </Button>

          <Button
            variant="outline"
            fullWidth
            onPress={() => router.push("/reports")}
            startIcon={<Ionicons name="analytics" />}
          >
            View Reports
          </Button>
        </View>
      </ScrollView>
    </Screen>
  );
}
```

## Screen Props

| Prop          | Type                                    | Default | Description                   |
| ------------- | --------------------------------------- | ------- | ----------------------------- |
| `children`    | `ReactNode`                             | -       | Screen content                |
| `title`       | `string`                                | -       | Screen title for header       |
| `useSafeArea` | `boolean`                               | `true`  | Whether to use SafeAreaView   |
| `headerLeft`  | `() => ReactNode`                       | -       | Custom left header component  |
| `headerRight` | `() => ReactNode`                       | -       | Custom right header component |
| `options`     | `Partial<NativeStackNavigationOptions>` | -       | Additional navigation options |
| `style`       | `ViewStyle`                             | -       | Custom container styles       |

## Navigation Options

Common navigation options you can pass to the `options` prop:

```tsx
{
  // Header configuration
  headerShown: boolean;
  headerTitle: string;
  headerBackVisible: boolean;
  headerBackTitle: string;

  // Presentation
  presentation: "card" | "modal" | "transparentModal";
  animation: "default" |
    "fade" |
    "slide_from_right" |
    "slide_from_left" |
    "slide_from_bottom";

  // Gestures
  gestureEnabled: boolean;
  fullScreenGestureEnabled: boolean;

  // Status bar
  statusBarStyle: "auto" | "inverted";
  statusBarBackgroundColor: string;
}
```

## Best Practices

1. **Consistent Screen Structure**: Always wrap your screen content with the `Screen` component:

   ```tsx
   // ✅ Good
   <Screen title="My Screen">
     <Content />
   </Screen>

   // ❌ Avoid
   <View>
     <Content />
   </View>
   ```

2. **Use Semantic Navigation**: Choose appropriate navigation patterns for your content:

   ```tsx
   // Modal for temporary actions
   <Screen options={{ presentation: 'modal' }}>

   // Stack for hierarchical navigation
   <Screen title="Details">
   ```

3. **Theme Integration**: Let the Screen component handle theming automatically:

   ```tsx
   // ✅ Automatic theming
   <Screen title="Themed Screen">

   // ❌ Manual theme handling not needed
   <Screen options={{ headerStyle: { backgroundColor: 'blue' } }}>
   ```

4. **Accessibility**: Provide meaningful titles and navigation cues:

   ```tsx
   <Screen
     title="User Profile"
     headerLeft={() => (
       <Button
         accessibilityLabel="Go back to previous screen"
         onPress={router.back}
       >
         Back
       </Button>
     )}
   >
   ```

5. **Performance**: Use appropriate navigation methods:

   ```tsx
   // For going back
   router.back();

   // For replacing current screen
   router.replace("/login");

   // For adding to stack
   router.push("/details");
   ```

## Troubleshooting

### Common Issues

1. **Header not showing**: Ensure `headerShown` is not set to `false` in parent navigators
2. **Theme not applied**: Make sure your app is wrapped with `ThemeProvider`
3. **Safe area issues**: Toggle `useSafeArea` prop based on your screen needs
4. **Navigation not working**: Verify your file-based routing structure matches Expo Router conventions

### Debug Navigation

```tsx
import { usePathname, useSegments } from "expo-router";

export function NavigationDebug() {
  const pathname = usePathname();
  const segments = useSegments();

  console.log("Current path:", pathname);
  console.log("Route segments:", segments);

  return null;
}
```

---

_Navigation is the backbone of user experience. Design it thoughtfully to guide users through your app seamlessly!_
