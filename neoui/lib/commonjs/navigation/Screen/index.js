"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Screen: true
};
exports.Screen = void 0;
var _expoRouter = require("expo-router");
var _expoStatusBar = require("expo-status-bar");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
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
const Screen = ({
  children,
  title,
  useSafeArea = true,
  headerLeft,
  headerRight,
  options,
  style
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();

  // Combine default stack options with custom ones
  const screenOptions = {
    title,
    // headerLeft: () => {
    //   if (router.canGoBack()) {
    //     return Platform.OS === "ios" ? (
    //       <MaterialIcons
    //         name="arrow-back-ios-new"
    //         size={22}
    //         color={theme.colors.text}
    //       />
    //     ) : (
    //       <Ionicons name="arrow-back" size={22} color={theme.colors.text} />
    //     );
    //   } else {
    //     return headerLeft;
    //   }
    // },
    headerLeft,
    headerRight,
    headerStyle: {
      backgroundColor: theme.colors.surface
    },
    headerTintColor: theme.colors.text,
    headerTitleStyle: {
      color: theme.colors.text
    },
    headerBackButtonMenuEnabled: false,
    headerBackButtonDisplayMode: 'minimal',
    animation: _reactNative.Platform.OS !== 'ios' ? 'fade' : 'default',
    ...options
  };
  const Container = useSafeArea ? _reactNative.SafeAreaView : _reactNative.View;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_expoStatusBar.StatusBar, {
      style: theme.isDark ? 'light' : 'dark'
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_expoRouter.Stack.Screen, {
      options: screenOptions
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, {
      style: [styles.container, {
        backgroundColor: theme.colors.background
        // Add bottom padding to account for tab bar when using SafeAreaView
        // paddingBottom: useSafeArea ? insets.bottom : 0,
      }, style],
      children: children
    })]
  });
};
exports.Screen = Screen;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=index.js.map