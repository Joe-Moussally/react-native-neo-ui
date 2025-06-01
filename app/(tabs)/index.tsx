import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <Text style={[styles.title, { color: theme.colors.text }]}>Home</Text>

      <View style={styles.infoContainer}>
        <Text style={[styles.text, { color: theme.colors.text }]}>
          Current theme: {themeType}
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={toggleTheme}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  theme.colors.text === theme.colors.background
                    ? theme.colors.text
                    : "white",
              },
            ]}
          >
            Toggle Theme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.secondary, marginTop: 10 },
          ]}
          onPress={() => setThemeType("system")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  theme.colors.text === theme.colors.background
                    ? theme.colors.text
                    : "white",
              },
            ]}
          >
            Use System Theme
          </Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: "500",
  },
});
