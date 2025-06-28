"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true
};
exports.Button = void 0;
var Haptics = _interopRequireWildcard(require("expo-haptics"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const AnimatedPressable = _reactNativeReanimated.default.createAnimatedComponent(_reactNative.Pressable);
const Button = ({
  variant = 'primary',
  size = 'md',
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
  const {
    theme
  } = (0, _theme.useTheme)();
  const pressed = (0, _reactNativeReanimated.useSharedValue)(0);
  const handlePressIn = event => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    pressed.value = (0, _reactNativeReanimated.withSpring)(1, {
      damping: 15,
      stiffness: 300
    });
    onPressIn?.(event);
  };
  const handlePressOut = event => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    pressed.value = (0, _reactNativeReanimated.withSpring)(0, {
      damping: 15,
      stiffness: 300
    });
    onPressOut?.(event);
  };

  // Check if this is an icon-only button (no text children)
  const isIconOnly = !children || typeof children !== 'string' && /*#__PURE__*/_react.default.isValidElement(children);
  const getButtonColors = (variant, colorKey, disabled) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.disabled,
        textColor: theme.colors.textSecondary,
        borderColor: theme.colors.disabled,
        shadowColor: theme.colors.disabled
      };
    }
    const baseColor = colorKey ? theme.colors[colorKey] : theme.colors.primary;
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: baseColor,
          shadowColor: baseColor
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.surface,
          textColor: baseColor,
          borderColor: theme.colors.border,
          shadowColor: theme.colors.border
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: baseColor,
          shadowColor: baseColor
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor
        };
      case 'soft':
        return {
          backgroundColor: baseColor + '15',
          // 15% opacity
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor
        };
      default:
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: baseColor,
          shadowColor: baseColor
        };
    }
  };
  const getSizeStyles = size => {
    const baseStyles = {
      xs: {
        paddingVertical: _spacing.spacing.xs,
        paddingHorizontal: _spacing.spacing.sm,
        borderRadius: _spacing.spacing.rounded,
        fontSize: 12,
        minHeight: 26,
        shadowOffset: 2
      },
      sm: {
        paddingVertical: _spacing.spacing.sm,
        paddingHorizontal: _spacing.spacing.md,
        borderRadius: _spacing.spacing.rounded,
        fontSize: 14,
        minHeight: 34,
        shadowOffset: 3
      },
      md: {
        paddingVertical: _spacing.spacing.sm + 2,
        paddingHorizontal: _spacing.spacing.lg,
        borderRadius: _spacing.spacing.rounded,
        fontSize: 16,
        minHeight: 42,
        shadowOffset: 4
      },
      lg: {
        paddingVertical: _spacing.spacing.md,
        paddingHorizontal: _spacing.spacing.xl,
        borderRadius: _spacing.spacing.rounded,
        fontSize: 18,
        minHeight: 50,
        shadowOffset: 5
      },
      xl: {
        paddingVertical: _spacing.spacing.lg,
        paddingHorizontal: _spacing.spacing.xxl,
        borderRadius: _spacing.spacing.rounded,
        fontSize: 20,
        minHeight: 58,
        shadowOffset: 6
      }
    };
    const sizeStyle = baseStyles[size] || baseStyles.md;

    // For icon-only buttons, remove horizontal padding
    if (isIconOnly) {
      return {
        ...sizeStyle,
        paddingHorizontal: 0
      };
    }
    return sizeStyle;
  };
  const colors = getButtonColors(variant, color, disabled || loading);
  const sizeStyles = getSizeStyles(size);

  // Determine border width - make outline variants thicker
  const borderWidth = variant === 'outline' ? 2 : 1;

  // Determine if this variant should have shadows
  const shouldHaveShadow = !['outline', 'ghost', 'soft', 'text'].includes(variant);

  // Animated styles for 3D effect
  const animatedButtonStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const translateY = (0, _reactNativeReanimated.interpolate)(pressed.value, [0, 1], [0, shouldHaveShadow ? sizeStyles.shadowOffset / 2 : 0]);
    const shadowOffsetY = (0, _reactNativeReanimated.interpolate)(pressed.value, [0, 1], [sizeStyles.shadowOffset, sizeStyles.shadowOffset / 2]);
    const shadowOpacity = (0, _reactNativeReanimated.interpolate)(pressed.value, [0, 1], [0.3, 0.15]);
    const baseStyle = {
      transform: [{
        translateY
      }],
      elevation: shouldHaveShadow ? (0, _reactNativeReanimated.interpolate)(pressed.value, [0, 1], [sizeStyles.shadowOffset, sizeStyles.shadowOffset / 2]) : 0
    };

    // Add iOS-specific shadow properties only for variants that should have shadows
    if (_reactNative.Platform.OS === 'ios' && shouldHaveShadow) {
      return {
        ...baseStyle,
        shadowOffset: {
          width: 0,
          height: shadowOffsetY
        },
        shadowOpacity,
        shadowRadius: sizeStyles.shadowOffset
      };
    }
    return baseStyle;
  });
  const buttonStyle = [styles.button, {
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
    borderWidth,
    paddingVertical: sizeStyles.paddingVertical,
    paddingHorizontal: sizeStyles.paddingHorizontal,
    borderRadius: sizeStyles.borderRadius,
    minHeight: sizeStyles.minHeight,
    opacity: disabled && !loading ? 0.6 : 1,
    width: fullWidth ? '100%' : undefined,
    marginBottom: shouldHaveShadow ? sizeStyles.shadowOffset : 0,
    // Reserve space for shadow only when needed
    ...(_reactNative.Platform.OS === 'ios' && shouldHaveShadow && {
      shadowColor: colors.shadowColor
    })
  }, style];
  const textStyle = [styles.text, {
    color: colors.textColor,
    fontSize: sizeStyles.fontSize
  }];
  const isDisabled = disabled || loading;

  // Clone icons with proper color inheritance
  const cloneIconWithColor = icon => {
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return /*#__PURE__*/_react.default.cloneElement(icon, {
        color: colors.textColor
      });
    }
    return icon;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedPressable, {
    style: [buttonStyle, animatedButtonStyle],
    disabled: isDisabled,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    ...props,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.content,
      children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
        size: "small",
        color: colors.textColor,
        style: styles.loadingIndicator
      }), !loading && startIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.startIcon,
        children: cloneIconWithColor(startIcon)
      }), typeof children === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: textStyle,
        children: children
      }) : /*#__PURE__*/_react.default.isValidElement(children) ? cloneIconWithColor(children) : children, !loading && endIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.endIcon,
        children: cloneIconWithColor(endIcon)
      })]
    })
  });
};
exports.Button = Button;
const styles = _reactNative.StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: '600',
    textAlign: 'center'
  },
  loadingIndicator: {
    marginRight: 8
  },
  startIcon: {
    marginRight: 8
  },
  endIcon: {
    marginLeft: 8
  }
});
//# sourceMappingURL=index.js.map