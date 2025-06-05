import { useTheme } from "@/core/theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenProps } from "./types";

export const Screen: React.FC<ScreenProps> = ({
  children,
  title,
  useSafeArea = true,
  headerLeft,
  headerRight,
  options,
  style,
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  // Combine default stack options with custom ones
  const screenOptions: NativeStackNavigationOptions = {
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
    headerBackButtonMenuEnabled: false,
    headerBackButtonDisplayMode: "minimal",
    ...options,
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
            // Add bottom padding to account for tab bar when using SafeAreaView
            // paddingBottom: useSafeArea ? insets.bottom : 0,
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
