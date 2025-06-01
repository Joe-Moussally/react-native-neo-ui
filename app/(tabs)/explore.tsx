import { Typography } from "@/core/components/Typography";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "../../core/theme";

export default function ExploreScreen() {
  const { theme } = useTheme();

  // Sample color showcase items
  const colorItems = [
    { name: "Primary", color: theme.colors.primary },
    { name: "Secondary", color: theme.colors.secondary },
    { name: "Accent", color: theme.colors.accent },
    { name: "Background", color: theme.colors.background },
    { name: "Surface", color: theme.colors.surface },
    { name: "Surface Variant", color: theme.colors.surfaceVariant },
    { name: "Text", color: theme.colors.text },
    { name: "Text Secondary", color: theme.colors.textSecondary },
    { name: "Error", color: theme.colors.error },
    { name: "Success", color: theme.colors.success },
    { name: "Warning", color: theme.colors.warning },
    { name: "Info", color: theme.colors.info },
  ];

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Typography variant="h1" style={styles.title}>
        Color Palette
      </Typography>

      <Typography
        variant="bodyLarge"
        color={theme.colors.textSecondary}
        style={styles.subtitle}
      >
        {theme.isDark ? "Dark Theme" : "Light Theme"}
      </Typography>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {colorItems.map((item, index) => (
          <View key={index} style={styles.colorRow}>
            <View
              style={[styles.colorSwatch, { backgroundColor: item.color }]}
            />
            <View style={styles.colorInfo}>
              <Typography
                variant="body"
                weight="medium"
                style={styles.colorName}
              >
                {item.name}
              </Typography>
              <Typography
                variant="bodySmall"
                color={theme.colors.textSecondary}
                style={styles.colorValue}
              >
                {item.color}
              </Typography>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  colorInfo: {
    flex: 1,
  },
  colorName: {
    marginBottom: 2,
  },
  colorValue: {},
});
