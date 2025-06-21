"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  width: screenWidth
} = _reactNative.Dimensions.get('window');
const getVariantStyles = (variant, width, height, fontSize) => {
  const baseStyles = {};
  switch (variant) {
    case 'text':
      return {
        ...baseStyles,
        width: width || '100%',
        height: fontSize ? typeof fontSize === 'number' ? fontSize * 1.2 : 20 : 16,
        borderRadius: 4
      };
    case 'circular':
      {
        const size = width || height || 40;
        return {
          ...baseStyles,
          width: size,
          height: size,
          borderRadius: typeof size === 'number' ? size / 2 : 20
        };
      }
    case 'rectangular':
      return {
        ...baseStyles,
        width: width || 100,
        height: height || 60,
        borderRadius: 0
      };
    case 'rounded':
      return {
        ...baseStyles,
        width: width || 100,
        height: height || 60,
        borderRadius: 8
      };
    default:
      return baseStyles;
  }
};
const Skeleton = ({
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  style,
  children,
  sx
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const pulseAnimation = (0, _react.useRef)(new _reactNative.Animated.Value(0.3)).current;
  const waveAnimation = (0, _react.useRef)(new _reactNative.Animated.Value(-screenWidth)).current;

  // Determine skeleton color based on theme
  const skeletonColor = sx?.bgcolor || (theme.isDark ? theme.colors.surfaceVariant : theme.colors.border);
  const highlightColor = theme.isDark ? theme.colors.border : theme.colors.surface;
  (0, _react.useEffect)(() => {
    if (animation === 'pulse') {
      const startPulse = () => {
        _reactNative.Animated.sequence([_reactNative.Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }), _reactNative.Animated.timing(pulseAnimation, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: false
        })]).start(() => startPulse());
      };
      startPulse();
    } else if (animation === 'wave') {
      const startWave = () => {
        waveAnimation.setValue(-screenWidth);
        _reactNative.Animated.timing(waveAnimation, {
          toValue: screenWidth,
          duration: 1500,
          useNativeDriver: false
        }).start(() => startWave());
      };
      startWave();
    }
  }, [animation, pulseAnimation, waveAnimation]);

  // If children are provided, measure their dimensions
  const [childDimensions, setChildDimensions] = _react.default.useState({});
  const onChildLayout = event => {
    const {
      width: childWidth,
      height: childHeight
    } = event.nativeEvent.layout;
    setChildDimensions({
      width: childWidth,
      height: childHeight
    });
  };

  // Use child dimensions if available and no explicit dimensions provided
  const finalWidth = width || childDimensions.width;
  const finalHeight = height || childDimensions.height;
  const variantStyles = getVariantStyles(variant, finalWidth, finalHeight, sx?.fontSize);
  const animationStyle = {};
  if (animation === 'pulse') {
    animationStyle.opacity = pulseAnimation;
  }
  const renderContent = () => {
    if (children) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          opacity: 0
        },
        onLayout: onChildLayout,
        children: children
      });
    }
    return null;
  };
  const renderSkeleton = () => {
    if (animation === 'wave') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.waveContainer, variantStyles, {
          backgroundColor: skeletonColor
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
          style: [styles.waveOverlay, {
            backgroundColor: highlightColor,
            transform: [{
              translateX: waveAnimation
            }],
            opacity: 0.4
          }]
        })
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: [variantStyles, {
        backgroundColor: skeletonColor
      }, animationStyle]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, style],
    children: [renderSkeleton(), renderContent()]
  });
};
exports.Skeleton = Skeleton;
const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'relative'
  },
  waveContainer: {
    overflow: 'hidden',
    position: 'relative'
  },
  waveOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
    transform: [{
      skewX: '-20deg'
    }]
  }
});
//# sourceMappingURL=index.js.map