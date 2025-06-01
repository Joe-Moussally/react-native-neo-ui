import { useTheme } from "@/core/theme";
import { Stack } from "expo-router";
import React from "react";

export default function ComponentsLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerBackButtonMenuEnabled: false,
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Components" }} />
      <Stack.Screen name="typography" options={{ title: "Typography" }} />
    </Stack>
  );
}
