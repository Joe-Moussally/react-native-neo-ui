"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemedView = ThemedView;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}) {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Use provided colors or fall back to theme colors
  const backgroundColor = theme.isDark ? darkColor || theme.colors.background : lightColor || theme.colors.background;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [{
      backgroundColor
    }, style],
    ...otherProps
  });
}
//# sourceMappingURL=ThemedView.js.map