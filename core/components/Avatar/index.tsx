import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AvatarProps, AvatarSize, AvatarVariant } from "./types";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  color = "primary",
  size = "md",
  variant = "circular",
  children,
  style,
}) => {
  const { theme } = useTheme();
  const [imageError, setImageError] = useState(false);

  // Get initials from alt text
  const getInitials = (name?: string): string => {
    if (!name) return "";

    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  // Get size styles
  const getSizeStyles = (size: AvatarSize) => {
    const sizes = {
      xs: {
        width: 24,
        height: 24,
        fontSize: 10,
        iconSize: 12,
      },
      sm: {
        width: 32,
        height: 32,
        fontSize: 12,
        iconSize: 16,
      },
      md: {
        width: 40,
        height: 40,
        fontSize: 16,
        iconSize: 20,
      },
      lg: {
        width: 56,
        height: 56,
        fontSize: 20,
        iconSize: 28,
      },
      xl: {
        width: 72,
        height: 72,
        fontSize: 24,
        iconSize: 36,
      },
    };
    return sizes[size];
  };

  // Get variant styles
  const getVariantStyles = (
    variant: AvatarVariant,
    size: { width: number; height: number }
  ) => {
    switch (variant) {
      case "circular":
        return {
          borderRadius: size.width / 2,
        };
      case "rounded":
        return {
          borderRadius: spacing.rounded,
        };
      case "square":
        return {
          borderRadius: 0,
        };
      default:
        return {
          borderRadius: size.width / 2,
        };
    }
  };

  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant, sizeStyles);
  const backgroundColor = theme.colors[color as keyof typeof theme.colors];
  const textColor = theme.isDark ? theme.colors.text : theme.colors.background;

  const avatarStyle = [
    styles.avatar,
    {
      width: sizeStyles.width,
      height: sizeStyles.height,
      backgroundColor,
      ...variantStyles,
    },
    style,
  ];

  const textStyle = [
    styles.text,
    {
      fontSize: sizeStyles.fontSize,
      color: textColor,
    },
  ];

  // Render content based on priority: children > image > initials > icon
  const renderContent = () => {
    // Priority 1: Custom children
    if (children) {
      return children;
    }

    // Priority 2: Image (if src provided and no error)
    if (src && !imageError) {
      return (
        <Image
          source={{ uri: src }}
          style={[
            styles.image,
            {
              width: sizeStyles.width,
              height: sizeStyles.height,
              ...variantStyles,
            },
          ]}
          onError={() => setImageError(true)}
        />
      );
    }

    // Priority 3: Initials from alt text
    const initials = getInitials(alt);
    if (initials) {
      return <Text style={textStyle}>{initials}</Text>;
    }

    // Priority 4: Default user icon
    return (
      <Ionicons name="person" size={sizeStyles.iconSize} color={textColor} />
    );
  };

  return <View style={avatarStyle}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export { AvatarGroup } from "./AvatarGroup";
export * from "./types";
