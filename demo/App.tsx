import { Ionicons } from "@expo/vector-icons";
import { RootToastProvider, ThemeProvider, useTheme } from "@joe111/neo-ui";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";

// Import your screens
import ExploreScreen from "./app/(tabs)/explore";
import HomeScreen from "./app/(tabs)/index";

const Tab = createBottomTabNavigator();

// Inner component that uses the theme
const AppTabs = () => {
  const { theme } = useTheme();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.colors.surface,
              borderTopColor: theme.colors.border,
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.textSecondary,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Explore") {
                iconName = focused ? "code-slash" : "code-slash-outline";
              } else {
                iconName = "ellipse";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style={theme.isDark ? "light" : "dark"} />
    </>
  );
};

export default function App() {
  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootToastProvider>
        <AppTabs />
      </RootToastProvider>
    </ThemeProvider>
  );
}
