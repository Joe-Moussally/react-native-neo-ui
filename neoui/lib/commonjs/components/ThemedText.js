"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemedText = ThemedText;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}) {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Use provided colors or fall back to theme colors
  const color = theme.isDark ? darkColor || theme.colors.text : lightColor || theme.colors.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: [{
      color
    }, type === 'default' ? styles.default : undefined, type === 'title' ? styles.title : undefined, type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined, type === 'subtitle' ? styles.subtitle : undefined, type === 'link' ? styles.link : undefined, style],
    ...rest
  });
}
const styles = _reactNative.StyleSheet.create({
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