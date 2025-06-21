"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _colors = require("./colors");
var _spacing = require("./spacing");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(undefined);
const ThemeProvider = ({
  children
}) => {
  const colorScheme = (0, _reactNative.useColorScheme)();
  const [themeType, setThemeType] = (0, _react.useState)('system');

  // Determine if we should use dark mode based on themeType and system preference
  const isDark = themeType === 'system' ? colorScheme === 'dark' : themeType === 'dark';

  // Determine colors based on theme
  const colors = isDark ? _colors.darkColors : _colors.lightColors;

  // Create the theme object (for backward compatibility)
  const theme = {
    colors,
    isDark
  };

  // Store theme type in AsyncStorage (optional - implement if needed)
  (0, _react.useEffect)(() => {
    // You can add persistence logic here if needed
  }, [themeType]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: {
      theme,
      colors,
      spacing: _spacing.spacing,
      isDark,
      themeType,
      setThemeType
    },
    children: children
  });
};

// Custom hook to use the theme
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
  const context = (0, _react.useContext)(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeProvider.js.map