import { Stack } from "expo-router";
import React from "react";

export default function ComponentsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Components" }} />
      <Stack.Screen name="typography" options={{ title: "Typography" }} />
    </Stack>
  );
}
