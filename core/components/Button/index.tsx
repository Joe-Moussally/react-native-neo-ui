import { useTheme } from "@/core/theme";
import { spacing } from "@/core/theme/spacing";
import * as Haptics from "expo-haptics";
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
  startIcon,
  endIcon,
  children,
  style,
  hapticsDisabled = false,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const { theme } = useTheme();

  const handlePressIn = (event: any) => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPressIn?.(event);
  };

  const handlePressOut = (event: any) => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPressOut?.(event);
  };

  // Check if this is an icon-only button (no text children)
  const isIconOnly =
    !children ||
    (typeof children !== "string" && React.isValidElement(children));

  const getButtonColors = (
    variant: ButtonVariant,
    colorKey?: ButtonColorKey,
    disabled?: boolean
  ) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.disabled,
        textColor: theme.colors.textSecondary,
        borderColor: theme.colors.disabled,
      };
    }

    const baseColor = colorKey ? theme.colors[colorKey] : theme.colors.primary;

    switch (variant) {
      case "primary":
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
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
      case "soft":
        return {
          backgroundColor: baseColor + "15", // 15% opacity
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
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: theme.colors.error,
        };
      case "success":
        return {
          backgroundColor: theme.colors.success,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: theme.colors.success,
        };
      case "warning":
        return {
          backgroundColor: theme.colors.warning,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: theme.colors.warning,
        };
      case "info":
        return {
          backgroundColor: theme.colors.info,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: theme.colors.info,
        };
      default:
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: baseColor,
        };
    }
  };

  const getSizeStyles = (size: ButtonSize) => {
    const baseStyles = {
      xs: {
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderRadius: 6,
        fontSize: 12,
        minHeight: 26,
      },
      sm: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderRadius: 8,
        fontSize: 14,
        minHeight: 34,
      },
      md: {
        paddingVertical: spacing.sm + 2,
        paddingHorizontal: spacing.lg,
        borderRadius: 10,
        fontSize: 16,
        minHeight: 42,
      },
      lg: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: 12,
        fontSize: 18,
        minHeight: 50,
      },
      xl: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xxl,
        borderRadius: 14,
        fontSize: 20,
        minHeight: 58,
      },
    };

    const sizeStyle = baseStyles[size] || baseStyles.md;

    // For icon-only buttons, remove horizontal padding
    if (isIconOnly) {
      return {
        ...sizeStyle,
        paddingHorizontal: 0,
      };
    }

    return sizeStyle;
  };

  const colors = getButtonColors(variant, color, disabled || loading);
  const sizeStyles = getSizeStyles(size);

  // Determine border width - make outline variants thicker
  const borderWidth = variant === "outline" ? 2 : 1;

  const buttonStyle = [
    styles.button,
    {
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth,
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

  // Clone icons with proper color inheritance
  const cloneIconWithColor = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        color: colors.textColor,
      });
    }
    return icon;
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={isDisabled}
      activeOpacity={0.7}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
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
        {!loading && startIcon && (
          <View style={styles.startIcon}>{cloneIconWithColor(startIcon)}</View>
        )}
        {typeof children === "string" ? (
          <Text style={textStyle}>{children}</Text>
        ) : React.isValidElement(children) ? (
          cloneIconWithColor(children)
        ) : (
          children
        )}
        {!loading && endIcon && (
          <View style={styles.endIcon}>{cloneIconWithColor(endIcon)}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
  startIcon: {
    marginRight: 8,
  },
  endIcon: {
    marginLeft: 8,
  },
});

export * from "./types";
