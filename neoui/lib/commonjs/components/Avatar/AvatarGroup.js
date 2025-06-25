"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarGroup = void 0;
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AvatarGroup = ({
  children,
  max = 5,
  spacing = "sm",
  style
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Convert children to array and handle max limit
  const childrenArray = _react.default.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const visibleChildren = childrenArray.slice(0, max);
  const hiddenCount = Math.max(0, totalChildren - max);

  // Get spacing value from theme
  const spacingValue = _spacing.spacing[spacing];
  const containerStyle = [styles.container, style];
  const renderOverflowAvatar = () => {
    if (hiddenCount === 0) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Avatar, {
      color: "surface",
      style: [styles.avatar, {
        marginLeft: -spacingValue,
        zIndex: 0,
        borderWidth: 2,
        borderColor: theme.colors.background
      }],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
        style: [styles.overflowText, {
          color: theme.colors.text
        }],
        children: ["+", hiddenCount]
      })
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: containerStyle,
    children: [visibleChildren.map((child, index) => {
      if (! /*#__PURE__*/_react.default.isValidElement(child)) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.avatarWrapper, {
          marginLeft: index > 0 ? -spacingValue : 0,
          zIndex: visibleChildren.length - index
        }],
        children: /*#__PURE__*/_react.default.cloneElement(child, {
          style: [child.props.style, styles.avatar, {
            borderWidth: 2,
            borderColor: theme.colors.background
          }]
        })
      }, index);
    }), renderOverflowAvatar()]
  });
};
exports.AvatarGroup = AvatarGroup;
const styles = _reactNative.StyleSheet.create({
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