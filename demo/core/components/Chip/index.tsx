import { Typography } from "@joe111/neo-ui/Typography";
import { useTheme } from "@joe111/neo-ui/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ChipProps, ChipSize, ChipVariant } from "./types";

export const Chip: React.FC<ChipProps> = ({
  children,
  label,
  variant = "soft",
  size = "md",
  color = "primary",
  startIcon,
  endIcon,
  disabled = false,
  selected = false,
  margin,
  onDelete,
  deletable = false,
  onPress,
  style,
  textStyle,
  ...props
}) => {
  const { theme, spacing } = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  const styles = StyleSheet.create({
    chip: {
      alignSelf: "flex-start",
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    startIcon: {
      marginRight: spacing.xs,
    },
    endIcon: {
      marginLeft: spacing.xs,
    },
    deleteButton: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const getSizeStyles = (size: ChipSize) => {
    const sizes = {
      xs: {
        paddingHorizontal: spacing.xs,
        paddingVertical: spacing.xs / 2,
        borderRadius: 15,
        fontSize: 12,
        iconSize: 12,
        minHeight: 20,
      },
      sm: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: 17,
        fontSize: 14,
        iconSize: 14,
        minHeight: 24,
      },
      md: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: 22,
        fontSize: 14,
        iconSize: 16,
        minHeight: 32,
      },
      lg: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderRadius: 29,
        fontSize: 16,
        iconSize: 18,
        minHeight: 40,
      },
    };
    return sizes[size];
  };

  const getVariantStyles = (variant: ChipVariant) => {
    const baseColor = theme.colors[color];
    const isSelectedOrPressed = selected || isPressed;

    switch (variant) {
      case "solid":
        return {
          backgroundColor: isSelectedOrPressed ? baseColor : baseColor,
          borderWidth: 0,
          borderColor: undefined,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
        };
      case "soft":
        return {
          backgroundColor: isSelectedOrPressed
            ? baseColor + "25"
            : baseColor + "15",
          borderWidth: 0,
          borderColor: undefined,
          textColor: baseColor,
        };
      case "outline":
        return {
          backgroundColor: isSelectedOrPressed
            ? baseColor + "10"
            : "transparent",
          borderWidth: 2,
          borderColor: baseColor,
          textColor: baseColor,
        };
      case "ghost":
        return {
          backgroundColor: isSelectedOrPressed
            ? baseColor + "10"
            : "transparent",
          borderWidth: 0,
          borderColor: undefined,
          textColor: baseColor,
        };
    }
  };

  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);

  const renderIcon = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        size: sizeStyles.iconSize,
        color: variantStyles.textColor,
      });
    }
    return icon;
  };

  const renderDeleteIcon = () => {
    if (!deletable && !onDelete) return null;

    return (
      <Pressable
        onPress={onDelete}
        style={[styles.deleteButton, { marginLeft: spacing.xs }]}
        disabled={disabled}
      >
        <Ionicons
          name="close"
          size={sizeStyles.iconSize}
          color={variantStyles.textColor}
        />
      </Pressable>
    );
  };

  const handlePress = (event: any) => {
    onPress?.(event);
  };

  const chipStyle = {
    ...styles.chip,
    backgroundColor: variantStyles.backgroundColor,
    borderColor: variantStyles.borderColor,
    borderWidth: variantStyles.borderWidth,
    paddingHorizontal: sizeStyles.paddingHorizontal,
    paddingVertical: sizeStyles.paddingVertical,
    borderRadius: sizeStyles.borderRadius,
    minHeight: sizeStyles.minHeight,
    margin: margin ? spacing[margin] : undefined,
    opacity: disabled ? 0.6 : 1,
    ...(style as any),
  };

  const textProps = {
    variant: "bodySmall" as const,
    weight: "600" as const,
    style: [
      {
        color: variantStyles.textColor,
        fontSize: sizeStyles.fontSize,
      },
      textStyle,
    ],
  };

  return (
    <Pressable
      style={chipStyle}
      onPress={onPress ? handlePress : undefined}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}
      {...props}
    >
      <View style={styles.content}>
        {startIcon && (
          <View style={[styles.iconContainer, styles.startIcon]}>
            {renderIcon(startIcon)}
          </View>
        )}

        <Typography {...textProps}>{children || label}</Typography>

        {endIcon && !deletable && (
          <View style={[styles.iconContainer, styles.endIcon]}>
            {renderIcon(endIcon)}
          </View>
        )}

        {renderDeleteIcon()}
      </View>
    </Pressable>
  );
};

export * from "./types";
