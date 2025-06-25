"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = Typography;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Typography({
  style,
  variant = 'body',
  weight,
  color,
  lightColor,
  darkColor,
  children,
  ...rest
}) {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Determine text color
  const textColor = color ? color : theme.isDark && darkColor ? darkColor : !theme.isDark && lightColor ? lightColor : theme.colors.text;

  // Get the style for the variant
  const variantStyle = styles[variant] || styles.body;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: [variantStyle, weight ? {
      fontWeight: weight
    } : undefined, {
      color: textColor
    }, style],
    ...rest,
    children: children
  });
}
const styles = _reactNative.StyleSheet.create({
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
    fontWeight: '600'
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: 'underline'
  }
});

// Export types
//# sourceMappingURL=index.js.map