import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

// Define component item type
interface ComponentItem {
  id: string;
  name: string;
  description: string;
  route: string;
}

// Define the components we want to showcase
const COMPONENTS: ComponentItem[] = [
  {
    id: "typography",
    name: "Typography",
    description: "Text components with different variants and weights",
    route: "/components/typography",
  },
  // Add more components here as they are created
];

export default function ComponentsScreen() {
  const { theme } = useTheme();

  const navigateToComponent = (route: string) => {
    router.push(route as any);
  };

  const renderItem = ({ item }: { item: ComponentItem }) => (
    <TouchableOpacity
      style={[
        styles.componentCard,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
      onPress={() => navigateToComponent(item.route)}
      activeOpacity={0.7}
    >
      <View style={styles.componentContent}>
        <Typography variant="h3" style={styles.componentName}>
          {item.name}
        </Typography>
        <Typography variant="bodySmall" color={theme.colors.textSecondary}>
          {item.description}
        </Typography>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen title="Components">
      <FlatList
        data={[
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
          ...COMPONENTS,
        ]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  componentCard: {
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  componentContent: {
    padding: 16,
  },
  componentName: {
    marginBottom: 4,
  },
});
