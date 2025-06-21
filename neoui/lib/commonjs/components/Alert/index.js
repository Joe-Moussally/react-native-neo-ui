"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Alert: true
};
exports.Alert = void 0;
var _Feather = _interopRequireDefault(require("@expo/vector-icons/Feather"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _spacing = require("../../theme/spacing");
var _Box = require("../Box");
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
const Alert = ({
  severity,
  variant = 'solid',
  title,
  children,
  style,
  showIcon = true
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const getAlertColors = (severity, variant) => {
    const baseColors = {
      success: theme.colors.success,
      info: theme.colors.info,
      warning: theme.colors.warning,
      error: theme.colors.error
    };
    const severityColor = baseColors[severity];
    if (variant === 'solid') {
      return {
        backgroundColor: severityColor,
        textColor: theme.isDark ? theme.colors.text : theme.colors.background,
        iconColor: theme.isDark ? theme.colors.text : theme.colors.background,
        borderColor: severityColor
      };
    } else {
      // soft variant
      return {
        backgroundColor: severityColor + '15',
        textColor: severityColor,
        iconColor: severityColor,
        borderColor: severityColor + '40'
      };
    }
  };
  const getIcon = severity => {
    const iconSize = 20;
    const colors = getAlertColors(severity, variant);
    switch (severity) {
      case 'success':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
          name: "check-circle",
          size: iconSize,
          color: colors.iconColor
        });
      case 'info':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
          name: "info",
          size: iconSize,
          color: colors.iconColor
        });
      case 'warning':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
          name: "alert-triangle",
          size: iconSize,
          color: colors.iconColor
        });
      case 'error':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
          name: "x-circle",
          size: iconSize,
          color: colors.iconColor
        });
      default:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
          name: "info",
          size: iconSize,
          color: colors.iconColor
        });
    }
  };
  const colors = getAlertColors(severity, variant);
  const titleStyle = [styles.title, {
    color: colors.textColor
  }];
  const messageStyle = [styles.message, {
    color: colors.textColor
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.Box, {
    style: [{
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth: 1,
      marginVertical: _spacing.spacing.xs
    }, style],
    padding: "md",
    borderRadius: _spacing.spacing.rounded,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.Box, {
      flexDirection: "row",
      style: {
        alignItems: 'flex-start'
      },
      children: [showIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.Box, {
        style: {
          marginRight: _spacing.spacing.sm,
          marginTop: 2
        },
        children: getIcon(severity)
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.Box, {
        flex: 1,
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: titleStyle,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: messageStyle,
          children: children
        })]
      })]
    })
  });
};
exports.Alert = Alert;
const styles = _reactNative.StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: _spacing.spacing.xs
  },
  message: {
    fontSize: 14,
    lineHeight: 20
  }
});
//# sourceMappingURL=index.js.map