"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Avatar: true,
  AvatarGroup: true
};
exports.Avatar = void 0;
Object.defineProperty(exports, "AvatarGroup", {
  enumerable: true,
  get: function () {
    return _AvatarGroup.AvatarGroup;
  }
});
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
var _Ionicons = _interopRequireDefault(require("@expo/vector-icons/Ionicons"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
var _AvatarGroup = require("./AvatarGroup");
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Avatar = ({
  src,
  alt,
  color = "primary",
  size = "md",
  variant = "circular",
  children,
  style
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const [imageError, setImageError] = (0, _react.useState)(false);

  // Get initials from alt text
  const getInitials = name => {
    if (!name) return "";
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  // Get size styles
  const getSizeStyles = size => {
    const sizes = {
      xs: {
        width: 24,
        height: 24,
        fontSize: 10,
        iconSize: 12
      },
      sm: {
        width: 32,
        height: 32,
        fontSize: 12,
        iconSize: 16
      },
      md: {
        width: 40,
        height: 40,
        fontSize: 16,
        iconSize: 20
      },
      lg: {
        width: 56,
        height: 56,
        fontSize: 20,
        iconSize: 28
      },
      xl: {
        width: 72,
        height: 72,
        fontSize: 24,
        iconSize: 36
      }
    };
    return sizes[size];
  };

  // Get variant styles
  const getVariantStyles = (variant, size) => {
    switch (variant) {
      case "circular":
        return {
          borderRadius: size.width / 2
        };
      case "rounded":
        return {
          borderRadius: _spacing.spacing.rounded
        };
      case "square":
        return {
          borderRadius: 0
        };
      default:
        return {
          borderRadius: size.width / 2
        };
    }
  };
  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant, sizeStyles);
  const backgroundColor = theme.colors[color];
  const textColor = theme.isDark ? theme.colors.text : theme.colors.background;
  const avatarStyle = [styles.avatar, {
    width: sizeStyles.width,
    height: sizeStyles.height,
    backgroundColor,
    ...variantStyles
  }, style];
  const textStyle = [styles.text, {
    fontSize: sizeStyles.fontSize,
    color: textColor
  }];

  // Render content based on priority: children > image > initials > icon
  const renderContent = () => {
    // Priority 1: Custom children
    if (children) {
      return children;
    }

    // Priority 2: Image (if src provided and no error)
    if (src && !imageError) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: {
          uri: src
        },
        style: [styles.image, {
          width: sizeStyles.width,
          height: sizeStyles.height,
          ...variantStyles
        }],
        onError: () => setImageError(true)
      });
    }

    // Priority 3: Initials from alt text
    const initials = getInitials(alt);
    if (initials) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: textStyle,
        children: initials
      });
    }

    // Priority 4: Default user icon
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
      name: "person",
      size: sizeStyles.iconSize,
      color: textColor
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: avatarStyle,
    children: renderContent()
  });
};
exports.Avatar = Avatar;
const styles = _reactNative.StyleSheet.create({
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  image: {
    resizeMode: "cover"
  },
  text: {
    fontWeight: "600",
    textAlign: "center"
  }
});
//# sourceMappingURL=index.js.map