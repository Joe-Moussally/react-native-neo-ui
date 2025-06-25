"use strict";

import { useTheme } from "../../theme/index.js";
import { spacing as themeSpacing } from "../../theme/spacing.js";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "./index.js";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export const AvatarGroup = ({
  children,
  max = 5,
  spacing = "sm",
  style
}) => {
  const {
    theme
  } = useTheme();

  // Convert children to array and handle max limit
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const visibleChildren = childrenArray.slice(0, max);
  const hiddenCount = Math.max(0, totalChildren - max);

  // Get spacing value from theme
  const spacingValue = themeSpacing[spacing];
  const containerStyle = [styles.container, style];
  const renderOverflowAvatar = () => {
    if (hiddenCount === 0) return null;
    return /*#__PURE__*/_jsx(Avatar, {
      color: "surface",
      style: [styles.avatar, {
        marginLeft: -spacingValue,
        zIndex: 0,
        borderWidth: 2,
        borderColor: theme.colors.background
      }],
      children: /*#__PURE__*/_jsxs(Text, {
        style: [styles.overflowText, {
          color: theme.colors.text
        }],
        children: ["+", hiddenCount]
      })
    });
  };
  return /*#__PURE__*/_jsxs(View, {
    style: containerStyle,
    children: [visibleChildren.map((child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) return null;
      return /*#__PURE__*/_jsx(View, {
        style: [styles.avatarWrapper, {
          marginLeft: index > 0 ? -spacingValue : 0,
          zIndex: visibleChildren.length - index
        }],
        children: /*#__PURE__*/React.cloneElement(child, {
          style: [child.props.style, styles.avatar, {
            borderWidth: 2,
            borderColor: theme.colors.background
          }]
        })
      }, index);
    }), renderOverflowAvatar()]
  });
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatarWrapper: {
    position: "relative"
  },
  avatar: {
    position: "relative"
  },
  overflowText: {
    fontSize: 12,
    fontWeight: "600"
  }
});
//# sourceMappingURL=AvatarGroup.js.map