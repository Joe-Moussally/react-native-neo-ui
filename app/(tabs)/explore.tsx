import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Color Palette
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
        {theme.isDark ? "Dark Theme" : "Light Theme"}
      </Text>

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
              <Text style={[styles.colorName, { color: theme.colors.text }]}>
                {item.name}
              </Text>
              <Text
                style={[
                  styles.colorValue,
                  { color: theme.colors.textSecondary },
                ]}
              >
                {item.color}
              </Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  colorValue: {
    fontSize: 14,
  },
});
