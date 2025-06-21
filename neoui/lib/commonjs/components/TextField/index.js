"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TextField: true
};
exports.TextField = void 0;
var _Box = require("../Box");
var _Typography = require("../Typography");
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
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
const TextField = ({
  label,
  placeholder,
  value,
  onChangeText,
  variant = "filled",
  size = "md",
  color = "primary",
  fullWidth = false,
  disabled = false,
  error = false,
  loading = false,
  required = false,
  helperText,
  errorText,
  startIcon,
  endIcon,
  margin,
  multiline = false,
  numberOfLines = 1,
  secureTextEntry = false,
  autoCapitalize = "sentences",
  autoCorrect = true,
  keyboardType = "default",
  returnKeyType = "done",
  onFocus,
  onBlur,
  onSubmitEditing,
  style,
  containerStyle,
  ...props
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const textInputRef = (0, _react.useRef)(null);
  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();

    // Scroll to view when focused (with a small delay to ensure layout is complete)
    if (multiline) {
      setTimeout(() => {
        textInputRef.current?.measure((x, y, width, height, pageX, pageY) => {
          // You can implement scrollTo functionality here if you have a ScrollView reference
          // For now, we'll just focus the input
          textInputRef.current?.focus();
        });
      }, 100);
    }
  };
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };
  const getSizeStyles = size => {
    const sizes = {
      sm: {
        height: 36,
        fontSize: 14,
        paddingHorizontal: _spacing.spacing.sm,
        paddingVertical: _spacing.spacing.xs,
        borderRadius: _spacing.spacing.rounded,
        iconSize: 16
      },
      md: {
        height: 44,
        fontSize: 16,
        paddingHorizontal: _spacing.spacing.md,
        paddingVertical: _spacing.spacing.sm,
        borderRadius: _spacing.spacing.rounded,
        iconSize: 20
      },
      lg: {
        height: 52,
        fontSize: 18,
        paddingHorizontal: _spacing.spacing.lg,
        paddingVertical: _spacing.spacing.md,
        borderRadius: _spacing.spacing.rounded,
        iconSize: 24
      }
    };
    return sizes[size];
  };
  const getVariantStyles = variant => {
    const baseColor = theme.colors[color];
    const errorColor = theme.colors.error;
    const currentColor = error ? errorColor : baseColor;
    switch (variant) {
      case "filled":
        return {
          backgroundColor: isFocused ? currentColor + "10" : theme.colors.surface,
          borderWidth: isFocused ? 2 : 1,
          borderColor: isFocused ? currentColor : theme.colors.border
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: isFocused ? 2 : 1,
          borderColor: isFocused ? currentColor : theme.colors.border
        };
      case "underline":
        return {
          backgroundColor: "transparent",
          borderBottomWidth: isFocused ? 2 : 1,
          borderBottomColor: isFocused ? currentColor : theme.colors.border
        };
    }
  };
  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);
  const inputHeight = multiline ? Math.max(sizeStyles.height * (numberOfLines || 3), sizeStyles.height * 2) : sizeStyles.height;
  const textColor = disabled ? theme.colors.disabled : theme.colors.text;
  const placeholderColor = disabled ? theme.colors.disabled : theme.colors.textSecondary;

  // Clone icons with proper color and size
  const renderIcon = icon => {
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return /*#__PURE__*/_react.default.cloneElement(icon, {
        size: sizeStyles.iconSize,
        color: disabled ? theme.colors.disabled : theme.colors.textSecondary
      });
    }
    return icon;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.Box, {
    margin: margin,
    style: containerStyle,
    flexDirection: "column",
    gap: "xs",
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.labelContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.Typography, {
        variant: "bodySmall",
        weight: "medium",
        color: error ? theme.colors.error : theme.colors.text,
        children: [label, required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
          variant: "bodySmall",
          color: theme.colors.error,
          children: " *"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.Box, {
      style: [styles.inputContainer, {
        ...variantStyles,
        borderRadius: variant === "underline" ? 0 : sizeStyles.borderRadius,
        height: inputHeight,
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? "100%" : undefined
      }],
      flexDirection: "row",
      padding: undefined // Override Box padding
      ,
      children: [startIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, styles.startIcon],
        children: renderIcon(startIcon)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
        ref: textInputRef,
        style: [styles.input, {
          fontSize: sizeStyles.fontSize,
          color: textColor,
          paddingHorizontal: startIcon || endIcon ? _spacing.spacing.xs : sizeStyles.paddingHorizontal,
          paddingVertical: sizeStyles.paddingVertical,
          textAlignVertical: multiline ? "top" : "center",
          minHeight: multiline ? sizeStyles.height : undefined,
          height: multiline ? inputHeight - sizeStyles.paddingVertical * 2 : undefined
        }, style],
        value: value,
        onChangeText: onChangeText,
        placeholder: placeholder,
        placeholderTextColor: placeholderColor,
        editable: !disabled && !loading,
        multiline: multiline,
        numberOfLines: numberOfLines,
        secureTextEntry: secureTextEntry,
        autoCapitalize: autoCapitalize,
        autoCorrect: autoCorrect,
        keyboardType: keyboardType,
        returnKeyType: returnKeyType,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onSubmitEditing: onSubmitEditing,
        scrollEnabled: multiline,
        blurOnSubmit: !multiline,
        ...props
      }), (endIcon || loading) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, styles.endIcon],
        children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          size: "small",
          color: theme.colors.primary
        }) : renderIcon(endIcon)
      })]
    }), (helperText || errorText) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "bodySmall",
      color: error ? theme.colors.error : theme.colors.textSecondary,
      children: error ? errorText : helperText
    })]
  });
};
exports.TextField = TextField;
const styles = _reactNative.StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  inputContainer: {
    alignItems: "center"
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  startIcon: {
    paddingLeft: _spacing.spacing.sm,
    paddingRight: _spacing.spacing.xs
  },
  endIcon: {
    paddingRight: _spacing.spacing.sm,
    paddingLeft: _spacing.spacing.xs
  }
});
//# sourceMappingURL=index.js.map