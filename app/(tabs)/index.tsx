import { Typography } from "@/core/components/Typography";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../core/theme";

export default function HomeScreen() {
  const { theme, themeType, setThemeType } = useTheme();

  const toggleTheme = () => {
    setThemeType(theme.isDark ? "light" : "dark");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Typography variant="h1" style={styles.title}>
        Home
      </Typography>

      <View style={styles.infoContainer}>
        <Typography variant="body" style={styles.text}>
          Current theme: {themeType}
        </Typography>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={toggleTheme}
        >
          <Typography
            variant="button"
            weight="medium"
            style={styles.buttonText}
            color="white"
          >
            Toggle Theme
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.secondary, marginTop: 10 },
          ]}
          onPress={() => setThemeType("system")}
        >
          <Typography
            variant="button"
            weight="medium"
            style={styles.buttonText}
            color="white"
          >
            Use System Theme
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
