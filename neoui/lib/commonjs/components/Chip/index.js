"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Chip: true
};
exports.Chip = void 0;
var _Typography = require("../Typography");
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
var _vectorIcons = require("@expo/vector-icons");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Chip = ({
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
  } = (0, _theme.useTheme)();
  const [isPressed, setIsPressed] = (0, _react.useState)(false);
  const getSizeStyles = size => {
    const sizes = {
      xs: {
        paddingHorizontal: _spacing.spacing.xs,
        paddingVertical: _spacing.spacing.xs / 2,
        borderRadius: 15,
        fontSize: 12,
        iconSize: 12,
        minHeight: 20
      },
      sm: {
        paddingHorizontal: _spacing.spacing.sm,
        paddingVertical: _spacing.spacing.xs,
        borderRadius: 17,
        fontSize: 14,
        iconSize: 14,
        minHeight: 24
      },
      md: {
        paddingHorizontal: _spacing.spacing.md,
        paddingVertical: _spacing.spacing.sm,
        borderRadius: 22,
        fontSize: 14,
        iconSize: 16,
        minHeight: 32
      },
      lg: {
        paddingHorizontal: _spacing.spacing.lg,
        paddingVertical: _spacing.spacing.md,
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
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return /*#__PURE__*/_react.default.cloneElement(icon, {
        size: sizeStyles.iconSize,
        color: variantStyles.textColor
      });
    }
    return icon;
  };
  const renderDeleteIcon = () => {
    if (!deletable && !onDelete) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      onPress: onDelete,
      style: [styles.deleteButton, {
        marginLeft: _spacing.spacing.xs
      }],
      disabled: disabled,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
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
    margin: margin ? _spacing.spacing[margin] : undefined,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    style: chipStyle,
    onPress: onPress ? handlePress : undefined,
    onPressIn: () => setIsPressed(true),
    onPressOut: () => setIsPressed(false),
    disabled: disabled,
    ...props,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.content,
      children: [startIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, styles.startIcon],
        children: renderIcon(startIcon)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
        ...textProps,
        children: children || label
      }), endIcon && !deletable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, styles.endIcon],
        children: renderIcon(endIcon)
      }), renderDeleteIcon()]
    })
  });
};
exports.Chip = Chip;
const styles = _reactNative.StyleSheet.create({
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
    marginRight: _spacing.spacing.xs
  },
  endIcon: {
    marginLeft: _spacing.spacing.xs
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});
//# sourceMappingURL=index.js.map