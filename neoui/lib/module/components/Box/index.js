"use strict";

import { useTheme } from "../../theme/index.js";
import { spacing } from "../../theme/spacing.js";
import React from "react";
import { StyleSheet, View } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
export const Box = ({
  children,
  color = "transparent",
  variant = "solid",
  margin,
  padding,
  gap,
  flexDirection = "column",
  flex,
  borderRadius,
  style,
  ...props
}) => {
  const {
    theme
  } = useTheme();
  const getBoxStyles = () => {
    const baseColor = theme.colors[color];
    let backgroundColor = "transparent";
    let borderColor = "transparent";
    let borderWidth = 0;
    switch (variant) {
      case "solid":
        backgroundColor = baseColor;
        break;
      case "soft":
        backgroundColor = baseColor + "15"; // 15% opacity
        break;
      case "outline":
        borderColor = baseColor;
        borderWidth = 2;
        break;
      case "filledOutline":
        backgroundColor = theme.colors.surface;
        borderColor = color === "transparent" ? theme.colors.border : baseColor;
        borderWidth = 2;
        break;
      case "transparent":
        backgroundColor = "transparent";
        break;
    }
    return {
      backgroundColor,
      borderColor,
      borderWidth
    };
  };
  const boxStyles = getBoxStyles();
  const containerStyle = [styles.container, {
    ...boxStyles,
    flexDirection,
    flex,
    margin: margin ? spacing[margin] : undefined,
    padding: padding ? spacing[padding] : undefined,
    gap: gap ? spacing[gap] : undefined,
    borderRadius: borderRadius !== undefined ? borderRadius : styles.container.borderRadius
  }, style];
  return /*#__PURE__*/_jsx(View, {
    style: containerStyle,
    ...props,
    children: children
  });
};
const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.rounded
  }
});
export * from "./types.js";
//# sourceMappingURL=index.js.map