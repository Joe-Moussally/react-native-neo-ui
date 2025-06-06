import { useTheme } from "@/core";
import { Stack } from "expo-router";
import React from "react";

export default function ComponentsLayout() {
  const { theme } = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Components",
        }}
      />
      <Stack.Screen name="typography" options={{ title: "Typography" }} />
      <Stack.Screen name="button" options={{ title: "Button" }} />
      <Stack.Screen name="alert" options={{ title: "Alert" }} />
      <Stack.Screen name="avatar" options={{ title: "Avatar" }} />
      <Stack.Screen name="badge" options={{ title: "Badge" }} />
      <Stack.Screen name="box" options={{ title: "Box" }} />
      <Stack.Screen name="textfield" options={{ title: "TextField" }} />
      <Stack.Screen name="chip" options={{ title: "Chip" }} />
    </Stack>
  );
}
