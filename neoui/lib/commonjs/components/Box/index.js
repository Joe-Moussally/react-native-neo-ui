"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Box: true
};
exports.Box = void 0;
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
var _react = _interopRequireDefault(require("react"));
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Box = ({
  children,
  color = "transparent",
  variant = "solid",
  margin,
  padding,
  gap,
  flexDirection = "column",
  flex,
  borderRadius,
  style,
  ...props
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const getBoxStyles = () => {
    const baseColor = theme.colors[color];
    let backgroundColor = "transparent";
    let borderColor = "transparent";
    let borderWidth = 0;
    switch (variant) {
      case "solid":
        backgroundColor = baseColor;
        break;
      case "soft":
        backgroundColor = baseColor + "15"; // 15% opacity
        break;
      case "outline":
        borderColor = baseColor;
        borderWidth = 2;
        break;
      case "filledOutline":
        backgroundColor = theme.colors.surface;
        borderColor = color === "transparent" ? theme.colors.border : baseColor;
        borderWidth = 2;
        break;
      case "transparent":
        backgroundColor = "transparent";
        break;
    }
    return {
      backgroundColor,
      borderColor,
      borderWidth
    };
  };
  const boxStyles = getBoxStyles();
  const containerStyle = [styles.container, {
    ...boxStyles,
    flexDirection,
    flex,
    margin: margin ? _spacing.spacing[margin] : undefined,
    padding: padding ? _spacing.spacing[padding] : undefined,
    gap: gap ? _spacing.spacing[gap] : undefined,
    borderRadius: borderRadius !== undefined ? borderRadius : styles.container.borderRadius
  }, style];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: containerStyle,
    ...props,
    children: children
  });
};
exports.Box = Box;
const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: _spacing.spacing.rounded
  }
});
//# sourceMappingURL=index.js.map