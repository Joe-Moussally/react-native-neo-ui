# Getting Started

This guide will help you set up TeamLock UI in your React Native project and start building beautiful, accessible mobile applications.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 16 or higher)
- **React Native** development environment set up
- **Expo CLI** (if using Expo)
- **TypeScript** knowledge (recommended)

## Installation

### Using npm

```bash
npm install teamlock-ui
```

### Using yarn

```bash
yarn add teamlock-ui
```

### Using pnpm

```bash
pnpm add teamlock-ui
```

## Peer Dependencies

TeamLock UI requires the following peer dependencies:

```bash
npm install react react-native @expo/vector-icons expo-router
```

Or with yarn:

```bash
yarn add react react-native @expo/vector-icons expo-router
```

## Basic Setup

### 1. Theme Provider Setup

Wrap your entire application with the `ThemeProvider` to enable theming:

```tsx
// App.tsx (for standard React Native)
import React from "react";
import { ThemeProvider } from "teamlock-ui";
import { MainNavigator } from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}
```

For Expo Router projects:

```tsx
// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "teamlock-ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
```

### 2. Your First Screen

Create your first screen using TeamLock UI components:

```tsx
// app/index.tsx (Expo Router) or src/screens/HomeScreen.tsx
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Screen, Button, TextField } from "teamlock-ui";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name && email) {
      Alert.alert("Success", `Hello ${name}! We'll contact you at ${email}`);
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <Screen title="Welcome to TeamLock UI">
      <View style={{ padding: 20, gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          Get Started
        </Text>

        <TextField
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          required
        />

        <TextField
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          required
        />

        <Button variant="primary" size="lg" fullWidth onPress={handleSubmit}>
          Get Started
        </Button>

        <Button
          variant="outline"
          size="md"
          fullWidth
          onPress={() => Alert.alert("Info", "Learn more about TeamLock UI")}
        >
          Learn More
        </Button>
      </View>
    </Screen>
  );
}
```

## Project Structure

Here's a recommended project structure when using TeamLock UI:

```
your-app/
├── app/                    # Expo Router pages (if using Expo Router)
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
├── src/
│   ├── components/         # Custom components
│   │   ├── CustomCard.tsx
│   │   └── UserProfile.tsx
│   ├── screens/           # Screen components (if not using Expo Router)
│   │   ├── HomeScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/        # Navigation setup (if not using Expo Router)
│   │   └── MainNavigator.tsx
│   ├── hooks/             # Custom hooks
│   │   └── useAuth.ts
│   ├── utils/             # Utility functions
│   │   └── validation.ts
│   └── types/             # TypeScript type definitions
│       └── index.ts
├── package.json
└── tsconfig.json
```

## TypeScript Configuration

If you're using TypeScript (recommended), make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["es2017", "es2018", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src/**/*", "app/**/*", "App.tsx"],
  "exclude": ["node_modules"]
}
```

## Environment Setup

### Expo Projects

If you're using Expo, add these dependencies to your `package.json`:

```json
{
  "dependencies": {
    "expo": "~49.0.0",
    "expo-router": "^2.0.0",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.0",
    "teamlock-ui": "^1.0.0",
    "@expo/vector-icons": "^13.0.0"
  }
}
```

### React Native CLI Projects

For React Native CLI projects, ensure you have:

```json
{
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.0",
    "teamlock-ui": "^1.0.0",
    "@react-navigation/native": "^6.0.0",
    "@react-navigation/native-stack": "^6.0.0",
    "react-native-screens": "^3.0.0",
    "react-native-safe-area-context": "^4.0.0"
  }
}
```

## Common Patterns

### Creating Custom Components

Extend TeamLock UI components to create your own:

```tsx
// src/components/CustomCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, Button } from "teamlock-ui";

interface CustomCardProps {
  title: string;
  description: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

export function CustomCard({
  title,
  description,
  onPress,
  children,
}: CustomCardProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children}
      {onPress && (
        <Button variant="outline" size="sm" onPress={onPress}>
          Learn More
        </Button>
      )}
    </View>
  );
}
```

### Form Handling

Create forms with validation:

```tsx
// src/components/ContactForm.tsx
import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TextField, Button } from "teamlock-ui";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      Alert.alert("Success", "Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Alert.alert("Error", "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <TextField
        label="Name"
        placeholder="Your full name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        error={!!errors.name}
        errorText={errors.name}
        required
      />

      <TextField
        label="Email"
        placeholder="your@email.com"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        error={!!errors.email}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        required
      />

      <TextField
        label="Message"
        placeholder="Your message..."
        value={formData.message}
        onChangeText={(text) => setFormData({ ...formData, message: text })}
        error={!!errors.message}
        errorText={errors.message}
        multiline
        numberOfLines={4}
        required
      />

      <Button
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
        onPress={handleSubmit}
      >
        Send Message
      </Button>
    </View>
  );
}
```

## Testing Setup

### Jest Configuration

Add testing support with Jest:

```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

Create `jest.config.js`:

```javascript
module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|teamlock-ui)/)",
  ],
};
```

### Example Test

```tsx
// __tests__/CustomCard.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "teamlock-ui";
import { CustomCard } from "../src/components/CustomCard";

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("CustomCard", () => {
  it("renders title and description", () => {
    const { getByText } = renderWithTheme(
      <CustomCard title="Test Title" description="Test Description" />
    );

    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test Description")).toBeTruthy();
  });

  it("calls onPress when button is pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = renderWithTheme(
      <CustomCard
        title="Test Title"
        description="Test Description"
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText("Learn More"));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
```

## Troubleshooting

### Common Issues

1. **Theme not applied**: Make sure your app is wrapped with `ThemeProvider`
2. **TypeScript errors**: Ensure all peer dependencies are installed
3. **Navigation issues**: Check that you're using the correct navigation setup for your project type
4. **Icons not showing**: Install and configure `@expo/vector-icons` or `react-native-vector-icons`

### Debug Mode

Enable debug mode to see theme and component information:

```tsx
import { ThemeProvider } from "teamlock-ui";

<ThemeProvider debug>
  <YourApp />
</ThemeProvider>;
```

## Next Steps

Now that you have TeamLock UI set up, explore these areas:

1. **[Components](./components/button)** - Learn about available components
2. **[Navigation](./navigation)** - Set up navigation patterns
3. **[Theming](./theming)** - Customize the appearance
4. **[Customization](./customization)** - Advanced customization techniques

## Example Projects

Check out these example projects to see TeamLock UI in action:

- **Basic App**: Simple app with forms and navigation
- **E-commerce App**: Shopping app with complex UI patterns
- **Dashboard App**: Data visualization and charts
- **Social App**: User profiles and social features

---

_Ready to build amazing mobile apps? Start exploring the components and create something beautiful!_
