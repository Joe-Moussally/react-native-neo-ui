import { useTheme } from "@joe111/neo-ui/theme";
import { spacing as themeSpacing } from "@/core/theme/spacing";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "./index";
import { AvatarGroupProps } from "./types";

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  spacing = "sm",
  style,
}) => {
  const { theme } = useTheme();

  // Convert children to array and handle max limit
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const visibleChildren = childrenArray.slice(0, max);
  const hiddenCount = Math.max(0, totalChildren - max);

  // Get spacing value from theme
  const spacingValue = themeSpacing[spacing];

  const containerStyle = [styles.container, style];

  const renderOverflowAvatar = () => {
    if (hiddenCount === 0) return null;

    return (
      <Avatar
        color="surface"
        style={[
          styles.avatar,
          {
            marginLeft: -spacingValue,
            zIndex: 0,
            borderWidth: 2,
            borderColor: theme.colors.background,
          },
        ]}
      >
        <Text style={[styles.overflowText, { color: theme.colors.text }]}>
          +{hiddenCount}
        </Text>
      </Avatar>
    );
  };

  return (
    <View style={containerStyle}>
      {visibleChildren.map((child, index) => {
        if (!React.isValidElement(child)) return null;

        return (
          <View
            key={index}
            style={[
              styles.avatarWrapper,
              {
                marginLeft: index > 0 ? -spacingValue : 0,
                zIndex: visibleChildren.length - index,
              },
            ]}
          >
            {React.cloneElement(child as React.ReactElement<any>, {
              style: [
                (child as React.ReactElement<any>).props.style,
                styles.avatar,
                {
                  borderWidth: 2,
                  borderColor: theme.colors.background,
                },
              ],
            })}
          </View>
        );
      })}
      {renderOverflowAvatar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    position: "relative",
  },
  overflowText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
