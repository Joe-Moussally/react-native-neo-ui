import { Box, Button, Typography, useTheme } from "@joe111/neo-ui";
import React from "react";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { theme, themeType, setThemeType } = useTheme();

  const toggleTheme = () => {
    setThemeType(theme.isDark ? "light" : "dark");
  };

  return (
    <Box
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      padding="lg"
      gap="lg"
      borderRadius={0}
    >
      <Typography variant="h1" style={styles.title}>
        NeoUI
      </Typography>

      <Box style={styles.infoContainer} gap="md">
        <Typography variant="body" style={styles.text}>
          Current theme: {themeType}
        </Typography>

        <Button variant="primary" onPress={toggleTheme} fullWidth>
          Toggle Theme
        </Button>

        <Button
          variant="secondary"
          onPress={() => setThemeType("system")}
          fullWidth
        >
          Use System Theme
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
});
