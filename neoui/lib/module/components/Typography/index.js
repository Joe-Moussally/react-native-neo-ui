"use strict";

import { useTheme } from "../../theme/index.js";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
export function Typography({
  style,
  variant = "body",
  weight,
  color,
  lightColor,
  darkColor,
  children,
  ...rest
}) {
  const {
    theme
  } = useTheme();

  // Determine text color
  const textColor = color ? color : theme.isDark && darkColor ? darkColor : !theme.isDark && lightColor ? lightColor : theme.colors.text;

  // Get the style for the variant
  const variantStyle = styles[variant] || styles.body;
  return /*#__PURE__*/_jsx(Text, {
    style: [variantStyle, weight ? {
      fontWeight: weight
    } : undefined, {
      color: textColor
    }, style],
    ...rest,
    children: children
  });
}
const styles = StyleSheet.create({
  display: {
    fontSize: 36,
    lineHeight: 44
  },
  h1: {
    fontSize: 32,
    lineHeight: 40
  },
  h2: {
    fontSize: 28,
    lineHeight: 36
  },
  h3: {
    fontSize: 24,
    lineHeight: 32
  },
  body: {
    fontSize: 16,
    lineHeight: 24
  },
  bodyLarge: {
    fontSize: 18,
    lineHeight: 26
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20
  },
  caption: {
    fontSize: 12,
    lineHeight: 16
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600"
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "underline"
  }
});
//# sourceMappingURL=index.js.map