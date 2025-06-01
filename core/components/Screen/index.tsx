import { useTheme } from "@/core/theme";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScreenProps } from "./types";

export const Screen: React.FC<ScreenProps> = ({
  children,
  title,
  useSafeArea = true,
  headerLeft,
  headerRight,
  stackOptions,
  style,
}) => {
  const { theme } = useTheme();

  // Combine default stack options with custom ones
  const screenOptions = {
    title,
    headerLeft,
    headerRight,
    headerStyle: {
      backgroundColor: theme.colors.surface,
    },
    headerTintColor: theme.colors.text,
    headerTitleStyle: {
      color: theme.colors.text,
    },
    ...stackOptions,
  };

  const Container = useSafeArea ? SafeAreaView : View;

  return (
    <>
      <Stack.Screen options={screenOptions} />
      <Container
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
          },
          style,
        ]}
      >
        {children}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export * from "./types";
