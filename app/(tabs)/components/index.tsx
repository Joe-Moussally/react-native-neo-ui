import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

// Define component item type
interface ComponentItem {
  id: string;
  name: string;
  description: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
}

// Define the components we want to showcase - moved outside component to prevent recreation
const COMPONENTS: ComponentItem[] = [
  {
    id: "typography",
    name: "Typography",
    description: "Text components with different variants and weights",
    route: "/components/typography",
    icon: "text",
  },
  {
    id: "button",
    name: "Button",
    description: "Interactive button components with various styles and states",
    route: "/components/button",
    icon: "radio-button-on",
  },
  {
    id: "alert",
    name: "Alert",
    description: "Display important messages with different severity levels",
    route: "/components/alert",
    icon: "alert-circle",
  },
  {
    id: "badge",
    name: "Badge",
    description: "Small badge to display notifications and status indicators",
    route: "/components/badge",
    icon: "notifications",
  },
  {
    id: "box",
    name: "Box",
    description:
      "Container component for layout with spacing, colors, and variants",
    route: "/components/box",
    icon: "square",
  },
  {
    id: "textfield",
    name: "TextField",
    description: "Input field component with labels, validation, and icons",
    route: "/components/textfield",
    icon: "create",
  },
  {
    id: "chip",
    name: "Chip",
    description:
      "Compact elements for tags, filters, and interactive selections",
    route: "/components/chip",
    icon: "pricetag",
  },
  // Add more components here as they are created
];

export default function ComponentsScreen() {
  const { theme } = useTheme();

  const navigateToComponent = useCallback((route: string) => {
    router.push(route as any);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: ComponentItem }) => (
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
          <View style={styles.componentHeader}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.colors.primary + "15" },
              ]}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color={theme.colors.primary}
              />
            </View>
            <View style={styles.componentInfo}>
              <Typography variant="h3" style={styles.componentName}>
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
    [theme.colors, navigateToComponent]
  );

  const keyExtractor = useCallback(
    (item: ComponentItem, index: number) => `${item.id}-${index}`,
    []
  );

  const memoizedData = useMemo(() => COMPONENTS, []);

  return (
    <Screen
      title="Components"
      options={{
        headerLargeTitle: true,
        headerSearchBarOptions: {
          placeholder: "Search components",
          tintColor: theme.colors.primary,
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
  componentCard: {
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  componentContent: {
    padding: 16,
  },
  componentHeader: {
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
  componentInfo: {
    flex: 1,
  },
  componentName: {
    marginBottom: 4,
  },
});
