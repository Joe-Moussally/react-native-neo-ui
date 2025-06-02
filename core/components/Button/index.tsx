import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import React from "react";
import {
  ActivityIndicator,
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ButtonColorKey,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./types";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  color,
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const getButtonColors = (
    variant: ButtonVariant,
    colorKey?: ButtonColorKey,
    disabled?: boolean
  ) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.disabled,
        textColor: theme.colors.background,
        borderColor: theme.colors.disabled,
      };
    }

    const baseColor = colorKey ? theme.colors[colorKey] : theme.colors.primary;

    switch (variant) {
      case "primary":
        return {
          backgroundColor: baseColor,
          textColor: theme.colors.background,
          borderColor: baseColor,
        };
      case "secondary":
        return {
          backgroundColor: theme.colors.surface,
          textColor: baseColor,
          borderColor: theme.colors.border,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          textColor: baseColor,
          borderColor: baseColor,
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          textColor: baseColor,
          borderColor: "transparent",
        };
      case "text":
        return {
          backgroundColor: "transparent",
          textColor: baseColor,
          borderColor: "transparent",
        };
      case "danger":
        return {
          backgroundColor: theme.colors.error,
          textColor: theme.colors.background,
          borderColor: theme.colors.error,
        };
      case "success":
        return {
          backgroundColor: theme.colors.success,
          textColor: theme.colors.background,
          borderColor: theme.colors.success,
        };
      case "warning":
        return {
          backgroundColor: theme.colors.warning,
          textColor: theme.colors.background,
          borderColor: theme.colors.warning,
        };
      case "info":
        return {
          backgroundColor: theme.colors.info,
          textColor: theme.colors.background,
          borderColor: theme.colors.info,
        };
      default:
        return {
          backgroundColor: baseColor,
          textColor: theme.colors.background,
          borderColor: baseColor,
        };
    }
  };

  const getSizeStyles = (size: ButtonSize) => {
    switch (size) {
      case "xs":
        return {
          paddingVertical: spacing.xs,
          paddingHorizontal: spacing.sm,
          borderRadius: 6,
          fontSize: 12,
          minHeight: 28,
        };
      case "sm":
        return {
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          borderRadius: 8,
          fontSize: 14,
          minHeight: 36,
        };
      case "md":
        return {
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderRadius: 10,
          fontSize: 16,
          minHeight: 44,
        };
      case "lg":
        return {
          paddingVertical: spacing.lg,
          paddingHorizontal: spacing.xl,
          borderRadius: 12,
          fontSize: 18,
          minHeight: 52,
        };
      case "xl":
        return {
          paddingVertical: spacing.xl,
          paddingHorizontal: spacing.xxl,
          borderRadius: 14,
          fontSize: 20,
          minHeight: 60,
        };
      default:
        return {
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderRadius: 10,
          fontSize: 16,
          minHeight: 44,
        };
    }
  };

  const colors = getButtonColors(variant, color, disabled || loading);
  const sizeStyles = getSizeStyles(size);

  const buttonStyle = [
    styles.button,
    {
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      paddingVertical: sizeStyles.paddingVertical,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      borderRadius: sizeStyles.borderRadius,
      minHeight: sizeStyles.minHeight,
      opacity: disabled && !loading ? 0.6 : 1,
      width: (fullWidth ? "100%" : undefined) as DimensionValue,
    },
    style,
  ];

  const textStyle = [
    styles.text,
    {
      color: colors.textColor,
      fontSize: sizeStyles.fontSize,
    },
  ];

  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      <View style={styles.content}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.textColor}
            style={styles.loadingIndicator}
          />
        )}
        {!loading && leftIcon && (
          <View style={styles.leftIcon}>{leftIcon}</View>
        )}
        {typeof children === "string" ? (
          <Text style={textStyle}>{children}</Text>
        ) : (
          children
        )}
        {!loading && rightIcon && (
          <View style={styles.rightIcon}>{rightIcon}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  loadingIndicator: {
    marginRight: 8,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export * from "./types";
