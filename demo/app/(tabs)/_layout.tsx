import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@joe111/neo-ui";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabBarActive,
        tabBarInactiveTintColor: theme.colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar,
          borderTopColor: theme.colors.border,
          ...Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              // position: "absolute",
            },
            default: {},
          }),
        },
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        tabBarLabelStyle: {
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: "Components",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cubes" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
