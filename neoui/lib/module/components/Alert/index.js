"use strict";

import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../../theme';
import { spacing } from '../../theme/spacing';
import { Box } from '../Box';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Alert = ({
  severity,
  variant = 'solid',
  title,
  children,
  style,
  showIcon = true
}) => {
  const {
    theme
  } = useTheme();
  const getAlertColors = (severity, variant) => {
    const baseColors = {
      success: theme.colors.success,
      info: theme.colors.info,
      warning: theme.colors.warning,
      error: theme.colors.error
    };
    const severityColor = baseColors[severity];
    if (variant === 'solid') {
      return {
        backgroundColor: severityColor,
        textColor: theme.isDark ? theme.colors.text : theme.colors.background,
        iconColor: theme.isDark ? theme.colors.text : theme.colors.background,
        borderColor: severityColor
      };
    } else {
      // soft variant
      return {
        backgroundColor: severityColor + '15',
        textColor: severityColor,
        iconColor: severityColor,
        borderColor: severityColor + '40'
      };
    }
  };
  const getIcon = severity => {
    const iconSize = 20;
    const colors = getAlertColors(severity, variant);
    switch (severity) {
      case 'success':
        return /*#__PURE__*/_jsx(Feather, {
          name: "check-circle",
          size: iconSize,
          color: colors.iconColor
        });
      case 'info':
        return /*#__PURE__*/_jsx(Feather, {
          name: "info",
          size: iconSize,
          color: colors.iconColor
        });
      case 'warning':
        return /*#__PURE__*/_jsx(Feather, {
          name: "alert-triangle",
          size: iconSize,
          color: colors.iconColor
        });
      case 'error':
        return /*#__PURE__*/_jsx(Feather, {
          name: "x-circle",
          size: iconSize,
          color: colors.iconColor
        });
      default:
        return /*#__PURE__*/_jsx(Feather, {
          name: "info",
          size: iconSize,
          color: colors.iconColor
        });
    }
  };
  const colors = getAlertColors(severity, variant);
  const titleStyle = [styles.title, {
    color: colors.textColor
  }];
  const messageStyle = [styles.message, {
    color: colors.textColor
  }];
  return /*#__PURE__*/_jsx(Box, {
    style: [{
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth: 1,
      marginVertical: spacing.xs
    }, style],
    padding: "md",
    borderRadius: spacing.rounded,
    children: /*#__PURE__*/_jsxs(Box, {
      flexDirection: "row",
      style: {
        alignItems: 'flex-start'
      },
      children: [showIcon && /*#__PURE__*/_jsx(Box, {
        style: {
          marginRight: spacing.sm,
          marginTop: 2
        },
        children: getIcon(severity)
      }), /*#__PURE__*/_jsxs(Box, {
        flex: 1,
        children: [title && /*#__PURE__*/_jsx(Text, {
          style: titleStyle,
          children: title
        }), /*#__PURE__*/_jsx(Text, {
          style: messageStyle,
          children: children
        })]
      })]
    })
  });
};
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  message: {
    fontSize: 14,
    lineHeight: 20
  }
});
export * from './types';
//# sourceMappingURL=index.js.map