"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Badge: true
};
exports.Badge = void 0;
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
const Badge = ({
  children,
  badgeContent,
  color = "primary",
  variant = "standard",
  max = 99,
  showZero = false,
  invisible = false,
  anchorOrigin = {
    vertical: "top",
    horizontal: "right"
  },
  style
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Determine if badge should be shown
  const shouldShowBadge = () => {
    if (invisible) return false;
    if (variant === "dot") return true;
    if (badgeContent === 0 || badgeContent === "0") return showZero;
    return badgeContent !== undefined && badgeContent !== null && badgeContent !== "";
  };

  // Format badge content
  const getDisplayContent = () => {
    if (variant === "dot") return "";
    if (typeof badgeContent === "number") {
      return badgeContent > max ? `${max}+` : badgeContent.toString();
    }
    return badgeContent?.toString() || "";
  };

  // Get badge colors
  const getBadgeColors = () => {
    const baseColor = theme.colors[color];
    return {
      backgroundColor: baseColor,
      textColor: theme.isDark ? theme.colors.text : theme.colors.background
    };
  };

  // Get badge position styles
  const getBadgePosition = anchorOrigin => {
    const {
      vertical,
      horizontal
    } = anchorOrigin;
    const offset = variant === "dot" ? 4 : 8;
    let position = {
      position: "absolute",
      zIndex: 1
    };
    if (vertical === "top") {
      position.top = -offset;
    } else {
      position.bottom = -offset;
    }
    if (horizontal === "right") {
      position.right = -offset;
    } else {
      position.left = -offset;
    }
    return position;
  };
  const colors = getBadgeColors();
  const displayContent = getDisplayContent();
  const showBadge = shouldShowBadge();
  const badgeStyle = [variant === "dot" ? styles.dotBadge : styles.standardBadge, {
    backgroundColor: colors.backgroundColor,
    ...getBadgePosition(anchorOrigin)
  }, !showBadge && styles.hidden];
  const textStyle = {
    ...styles.badgeText,
    color: colors.textColor
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, style],
    children: [children, showBadge && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: badgeStyle,
      children: variant === "standard" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: textStyle,
        numberOfLines: 1,
        children: displayContent
      })
    })]
  });
};
exports.Badge = Badge;
const styles = _reactNative.StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  },
  standardBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: _spacing.spacing.xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  dotBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    minWidth: 0
  },
  badgeText: {
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12
  },
  hidden: {
    opacity: 0
  }
});
//# sourceMappingURL=index.js.map