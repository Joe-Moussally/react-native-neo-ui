"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ParallaxScrollView;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemedView = require("./ThemedView");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HEADER_HEIGHT = 250;
function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor
}) {
  const colorScheme = (0, _reactNative.useColorScheme)() ?? 'light';
  const scrollRef = (0, _reactNativeReanimated.useAnimatedRef)();
  const scrollOffset = (0, _reactNativeReanimated.useScrollViewOffset)(scrollRef);
  const headerAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75])
      }, {
        scale: (0, _reactNativeReanimated.interpolate)(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1])
      }]
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemedView.ThemedView, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeReanimated.default.ScrollView, {
      ref: scrollRef,
      scrollEventThrottle: 16,
      contentContainerStyle: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
        style: [styles.header, {
          backgroundColor: headerBackgroundColor[colorScheme]
        }, headerAnimatedStyle],
        children: headerImage
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemedView.ThemedView, {
        style: styles.content,
        children: children
      })]
    })
  });
}
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=ParallaxScrollView.js.map