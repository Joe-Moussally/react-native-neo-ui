import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BadgeAnchorOrigin, BadgeProps } from "./types";

export const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  color = "primary",
  variant = "standard",
  max = 99,
  showZero = false,
  invisible = false,
  anchorOrigin = { vertical: "top", horizontal: "right" },
  style,
}) => {
  const { theme } = useTheme();

  // Determine if badge should be shown
  const shouldShowBadge = () => {
    if (invisible) return false;
    if (variant === "dot") return true;
    if (badgeContent === 0 || badgeContent === "0") return showZero;
    return (
      badgeContent !== undefined && badgeContent !== null && badgeContent !== ""
    );
  };

  // Format badge content
  const getDisplayContent = () => {
    if (variant === "dot") return "";
    if (typeof badgeContent === "number") {
      return badgeContent > max ? `${max}+` : badgeContent.toString();
    }
    return badgeContent?.toString() || "";
  };

  // Get badge colors
  const getBadgeColors = () => {
    const baseColor = theme.colors[color as keyof typeof theme.colors];
    return {
      backgroundColor: baseColor,
      textColor: theme.isDark ? theme.colors.text : theme.colors.background,
    };
  };

  // Get badge position styles
  const getBadgePosition = (anchorOrigin: BadgeAnchorOrigin) => {
    const { vertical, horizontal } = anchorOrigin;
    const offset = variant === "dot" ? 4 : 8;

    let position: any = {
      position: "absolute" as const,
      zIndex: 1,
    };

    if (vertical === "top") {
      position.top = -offset;
    } else {
      position.bottom = -offset;
    }

    if (horizontal === "right") {
      position.right = -offset;
    } else {
      position.left = -offset;
    }

    return position;
  };

  const colors = getBadgeColors();
  const displayContent = getDisplayContent();
  const showBadge = shouldShowBadge();

  const badgeStyle = [
    variant === "dot" ? styles.dotBadge : styles.standardBadge,
    {
      backgroundColor: colors.backgroundColor,
      ...getBadgePosition(anchorOrigin),
    },
    !showBadge && styles.hidden,
  ];

  const textStyle = {
    ...styles.badgeText,
    color: colors.textColor,
  };

  return (
    <View style={[styles.container, style]}>
      {children}
      {showBadge && (
        <View style={badgeStyle}>
          {variant === "standard" && (
            <Text style={textStyle} numberOfLines={1}>
              {displayContent}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  standardBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: spacing.xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dotBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    minWidth: 0,
  },
  badgeText: {
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12,
  },
  hidden: {
    opacity: 0,
  },
});

export * from "./types";
