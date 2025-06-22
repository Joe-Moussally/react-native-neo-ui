import { Ionicons } from "@expo/vector-icons";
import { Screen, Typography, useTheme } from "@joe111/neo-ui";
import { router } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

// Define example item type
interface ExampleItem {
  id: string;
  name: string;
  description: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
}

// Define the examples we want to showcase
const EXAMPLES: ExampleItem[] = [
  {
    id: "social-profile",
    name: "Social Profile",
    description: "User profile screen with avatar, stats, and social actions",
    route: "/examples/social-profile",
    icon: "person-circle",
  },
  {
    id: "product-showcase",
    name: "Product Showcase",
    description:
      "E-commerce product page with ratings, reviews, and purchase options",
    route: "/examples/product-showcase",
    icon: "storefront",
  },
  {
    id: "dashboard",
    name: "Analytics Dashboard",
    description:
      "Business dashboard with charts, metrics, and status indicators",
    route: "/examples/dashboard",
    icon: "analytics",
  },
  {
    id: "notification-center",
    name: "Notification Center",
    description:
      "Modern notification feed with different alert types and actions",
    route: "/examples/notification-center",
    icon: "notifications",
  },
  {
    id: "settings-profile",
    name: "Settings & Profile",
    description:
      "User settings page with form inputs, toggles, and preferences",
    route: "/examples/settings-profile",
    icon: "settings",
  },
  {
    id: "restaurant-menu",
    name: "Restaurant Menu",
    description: "Food delivery app with menu items, ratings, and ordering",
    route: "/examples/restaurant-menu",
    icon: "restaurant",
  },
  {
    id: "music-player",
    name: "Music Player",
    description:
      "Audio player interface with controls, playlists, and now playing",
    route: "/examples/music-player",
    icon: "musical-notes",
  },
  {
    id: "task-manager",
    name: "Task Manager",
    description:
      "Productivity app with todo lists, progress tracking, and priorities",
    route: "/examples/task-manager",
    icon: "checkmark-circle",
  },
];

export default function ExamplesScreen() {
  const { theme } = useTheme();

  const navigateToExample = useCallback((route: string) => {
    router.push(route as any);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: ExampleItem }) => (
      <TouchableOpacity
        style={[
          styles.exampleCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
        onPress={() => navigateToExample(item.route)}
        activeOpacity={0.7}
      >
        <View style={styles.exampleContent}>
          <View style={styles.exampleHeader}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.colors.accent + "15" },
              ]}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color={theme.colors.accent}
              />
            </View>
            <View style={styles.exampleInfo}>
              <Typography variant="h3" style={styles.exampleName}>
                {item.name}
              </Typography>
              <Typography
                variant="bodySmall"
                color={theme.colors.textSecondary}
              >
                {item.description}
              </Typography>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </View>
        </View>
      </TouchableOpacity>
    ),
    [theme.colors, navigateToExample]
  );

  const keyExtractor = useCallback(
    (item: ExampleItem, index: number) => `${item.id}-${index}`,
    []
  );

  const memoizedData = useMemo(() => EXAMPLES, []);

  return (
    <Screen
      title="Examples"
      options={{
        headerLargeTitle: true,
        headerSearchBarOptions: {
          placeholder: "Search examples",
          tintColor: theme.colors.accent,
          headerIconColor: theme.colors.text,
          hintTextColor: theme.colors.textSecondary,
          shouldShowHintSearchIcon: false,
          textColor: theme.colors.text,
          barTintColor: theme.colors.surface,
        },
      }}
    >
      <FlatList
        data={memoizedData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        getItemLayout={(data, index) => ({
          length: 80, // Approximate height of each item
          offset: 80 * index,
          index,
        })}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  exampleCard: {
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  exampleContent: {
    padding: 16,
  },
  exampleHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  exampleInfo: {
    flex: 1,
  },
  exampleName: {
    marginBottom: 4,
  },
});
