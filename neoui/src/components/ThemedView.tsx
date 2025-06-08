import React from 'react';
import { View, type ViewProps } from 'react-native';

import { useTheme } from '../theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { theme } = useTheme();

  // Use provided colors or fall back to theme colors
  const backgroundColor = theme.isDark
    ? darkColor || theme.colors.background
    : lightColor || theme.colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
