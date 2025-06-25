"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = void 0;
var _vectorIcons = require("@expo/vector-icons");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const getSizeFromVariant = size => {
  switch (size) {
    case 'small':
      return 18;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    default:
      return 24;
  }
};
const getIconColor = (filled, disabled, colors) => {
  if (disabled) return colors.disabled;
  return filled ? colors.warning : colors.border;
};
const Star = ({
  filled,
  halfFilled = false,
  size,
  disabled,
  icon,
  emptyIcon,
  onPress,
  onHoverIn,
  onHoverOut,
  readOnly
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const scaleValue = new _reactNative.Animated.Value(1);
  const handlePressIn = () => {
    if (readOnly || disabled) return;
    onHoverIn?.();
    _reactNative.Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true
    }).start();
  };
  const handlePressOut = () => {
    if (readOnly || disabled) return;
    onHoverOut?.();
    _reactNative.Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };
  const renderIcon = () => {
    if (filled || halfFilled) {
      if (icon) {
        return /*#__PURE__*/_react.default.cloneElement(icon, {
          size,
          color: getIconColor(true, disabled, theme.colors)
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
        name: "star",
        size: size,
        color: getIconColor(true, disabled, theme.colors)
      });
    } else {
      if (emptyIcon) {
        return /*#__PURE__*/_react.default.cloneElement(emptyIcon, {
          size,
          color: getIconColor(false, disabled, theme.colors)
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
        name: "star-outline",
        size: size,
        color: getIconColor(false, disabled, theme.colors)
      });
    }
  };
  if (readOnly) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.starContainer,
      children: halfFilled ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.halfStarContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.halfStarMask, {
            width: size / 2
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
            name: "star",
            size: size,
            color: getIconColor(true, disabled, theme.colors)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.halfStarBackground, {
            left: size / 2
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
            name: "star-outline",
            size: size,
            color: getIconColor(false, disabled, theme.colors)
          })
        })]
      }) : renderIcon()
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    disabled: disabled || readOnly,
    activeOpacity: 0.7,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: [styles.starContainer, {
        transform: [{
          scale: scaleValue
        }]
      }],
      children: halfFilled ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.halfStarContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.halfStarMask, {
            width: size / 2
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
            name: "star",
            size: size,
            color: getIconColor(true, disabled, theme.colors)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.halfStarBackground, {
            left: size / 2
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
            name: "star-outline",
            size: size,
            color: getIconColor(false, disabled, theme.colors)
          })
        })]
      }) : renderIcon()
    })
  });
};
const Rating = ({
  name,
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  size = 'medium',
  readOnly = false,
  disabled = false,
  onChange,
  getLabelText,
  icon,
  emptyIcon,
  highlightSelectedOnly = false,
  style
}) => {
  const [internalValue, setInternalValue] = (0, _react.useState)(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const iconSize = getSizeFromVariant(size);
  (0, _react.useEffect)(() => {
    if (!isControlled && defaultValue !== undefined) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);
  const getStarValue = index => {
    return index + 1;
  };
  const handleStarPress = starIndex => {
    if (readOnly || disabled) return;
    const newValue = getStarValue(starIndex);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(null, newValue);
  };
  const isStarFilled = starIndex => {
    const starValue = getStarValue(starIndex);
    const valueToCheck = currentValue || 0;
    if (highlightSelectedOnly) {
      return Math.ceil(valueToCheck) === starValue;
    }
    return starValue <= valueToCheck;
  };
  const renderStars = () => {
    const stars = [];
    const totalStars = max;
    for (let i = 0; i < totalStars; i++) {
      const filled = isStarFilled(i);
      stars.push(/*#__PURE__*/(0, _jsxRuntime.jsx)(Star, {
        filled: filled,
        halfFilled: false,
        size: iconSize,
        disabled: disabled,
        icon: icon,
        emptyIcon: emptyIcon,
        onPress: () => handleStarPress(i),
        onHoverIn: () => {},
        onHoverOut: () => {},
        readOnly: readOnly
      }, i));
    }
    return stars;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, style],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.starsContainer,
      children: renderStars()
    })
  });
};
exports.Rating = Rating;
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starContainer: {
    marginHorizontal: 1
  },
  halfStarContainer: {
    position: 'relative'
  },
  halfStarMask: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 2
  },
  halfStarBackground: {
    position: 'absolute',
    zIndex: 1
  }
});

// Export types
//# sourceMappingURL=index.js.map