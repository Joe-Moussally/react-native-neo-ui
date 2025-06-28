"use strict";

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme';
import { jsx as _jsx } from "react/jsx-runtime";
export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}) {
  const {
    theme
  } = useTheme();

  // Use provided colors or fall back to theme colors
  const color = theme.isDark ? darkColor || theme.colors.text : lightColor || theme.colors.text;
  return /*#__PURE__*/_jsx(Text, {
    style: [{
      color
    }, type === 'default' ? styles.default : undefined, type === 'title' ? styles.title : undefined, type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined, type === 'subtitle' ? styles.subtitle : undefined, type === 'link' ? styles.link : undefined, style],
    ...rest
  });
}
const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4'
  }
});
//# sourceMappingURL=ThemedText.js.map