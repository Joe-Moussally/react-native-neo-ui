"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ticker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const numbers = [...Array(10).keys()]; // 0-9

const Tick = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    ...rest,
    children: children
  });
};
const TickerList = ({
  digit,
  fontSize,
  index
}) => {
  // Use shared value for animation
  const translateY = (0, _reactNativeReanimated.useSharedValue)(-fontSize * 1.1 * parseInt(digit.toString()));

  // Update animation when digit changes
  (0, _react.useEffect)(() => {
    translateY.value = (0, _reactNativeReanimated.withDelay)(index * 110, (0, _reactNativeReanimated.withSpring)(-fontSize * 1.1 * parseInt(digit.toString()), {
      damping: 70,
      stiffness: 200
    }));
  }, [digit, fontSize, index, translateY]);

  // Animated style
  const animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: translateY.value
      }]
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: {
      height: fontSize,
      overflow: 'hidden' // Enable this to hide other numbers
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: animatedStyle,
      children: numbers.map(number => /*#__PURE__*/(0, _jsxRuntime.jsx)(Tick, {
        style: {
          fontSize,
          lineHeight: fontSize * 1.1,
          fontVariant: ['tabular-nums']
        },
        children: number
      }, number))
    })
  });
};
const Ticker = ({
  value,
  fontSize = 150,
  minDigits = 1
}) => {
  const valueString = value.toString();
  const digitCount = Math.max(valueString.length, minDigits);
  //   const [newFontSize, setNewFontSize] = useState(fontSize);

  // Pad with leading zeros to maintain consistent positions
  const paddedValue = valueString.padStart(digitCount, '0');
  const digits = paddedValue.split('');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      children: digits.map((digit, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(TickerList, {
          // Stable key based on position from right
          digit: parseInt(digit),
          fontSize: fontSize,
          index: index
        }, `pos-${index}`);
      })
    })
  });
};
exports.Ticker = Ticker;
//# sourceMappingURL=index.js.map