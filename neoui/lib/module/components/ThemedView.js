"use strict";

import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';
import { jsx as _jsx } from "react/jsx-runtime";
export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}) {
  const {
    theme
  } = useTheme();

  // Use provided colors or fall back to theme colors
  const backgroundColor = theme.isDark ? darkColor || theme.colors.background : lightColor || theme.colors.background;
  return /*#__PURE__*/_jsx(View, {
    style: [{
      backgroundColor
    }, style],
    ...otherProps
  });
}
//# sourceMappingURL=ThemedView.js.map