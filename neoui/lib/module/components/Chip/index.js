"use strict";

import { Typography } from "../Typography";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/spacing";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Chip = ({
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
  const {
    theme
  } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const getSizeStyles = size => {
    const sizes = {
      xs: {
        paddingHorizontal: spacing.xs,
        paddingVertical: spacing.xs / 2,
        borderRadius: 15,
        fontSize: 12,
        iconSize: 12,
        minHeight: 20
      },
      sm: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: 17,
        fontSize: 14,
        iconSize: 14,
        minHeight: 24
      },
      md: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: 22,
        fontSize: 14,
        iconSize: 16,
        minHeight: 32
      },
      lg: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderRadius: 29,
        fontSize: 16,
        iconSize: 18,
        minHeight: 40
      }
    };
    return sizes[size];
  };
  const getVariantStyles = variant => {
    const baseColor = theme.colors[color];
    const isSelectedOrPressed = selected || isPressed;
    switch (variant) {
      case "solid":
        return {
          backgroundColor: isSelectedOrPressed ? baseColor : baseColor,
          borderWidth: 0,
          borderColor: undefined,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background
        };
      case "soft":
        return {
          backgroundColor: isSelectedOrPressed ? baseColor + "25" : baseColor + "15",
          borderWidth: 0,
          borderColor: undefined,
          textColor: baseColor
        };
      case "outline":
        return {
          backgroundColor: isSelectedOrPressed ? baseColor + "10" : "transparent",
          borderWidth: 2,
          borderColor: baseColor,
          textColor: baseColor
        };
      case "ghost":
        return {
          backgroundColor: isSelectedOrPressed ? baseColor + "10" : "transparent",
          borderWidth: 0,
          borderColor: undefined,
          textColor: baseColor
        };
    }
  };
  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);
  const renderIcon = icon => {
    if (/*#__PURE__*/React.isValidElement(icon)) {
      return /*#__PURE__*/React.cloneElement(icon, {
        size: sizeStyles.iconSize,
        color: variantStyles.textColor
      });
    }
    return icon;
  };
  const renderDeleteIcon = () => {
    if (!deletable && !onDelete) return null;
    return /*#__PURE__*/_jsx(Pressable, {
      onPress: onDelete,
      style: [styles.deleteButton, {
        marginLeft: spacing.xs
      }],
      disabled: disabled,
      children: /*#__PURE__*/_jsx(Ionicons, {
        name: "close",
        size: sizeStyles.iconSize,
        color: variantStyles.textColor
      })
    });
  };
  const handlePress = event => {
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
    ...style
  };
  const textProps = {
    variant: "bodySmall",
    weight: "600",
    style: [{
      color: variantStyles.textColor,
      fontSize: sizeStyles.fontSize
    }, textStyle]
  };
  return /*#__PURE__*/_jsx(Pressable, {
    style: chipStyle,
    onPress: onPress ? handlePress : undefined,
    onPressIn: () => setIsPressed(true),
    onPressOut: () => setIsPressed(false),
    disabled: disabled,
    ...props,
    children: /*#__PURE__*/_jsxs(View, {
      style: styles.content,
      children: [startIcon && /*#__PURE__*/_jsx(View, {
        style: [styles.iconContainer, styles.startIcon],
        children: renderIcon(startIcon)
      }), /*#__PURE__*/_jsx(Typography, {
        ...textProps,
        children: children || label
      }), endIcon && !deletable && /*#__PURE__*/_jsx(View, {
        style: [styles.iconContainer, styles.endIcon],
        children: renderIcon(endIcon)
      }), renderDeleteIcon()]
    })
  });
};
const styles = StyleSheet.create({
  chip: {
    alignSelf: "flex-start"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  startIcon: {
    marginRight: spacing.xs
  },
  endIcon: {
    marginLeft: spacing.xs
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export * from "./types";
//# sourceMappingURL=index.js.map