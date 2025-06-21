"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useToast: true,
  ToastProvider: true,
  RootToastProvider: true,
  toast: true,
  Toast: true
};
exports.useToast = exports.toast = exports.ToastProvider = exports.Toast = exports.RootToastProvider = void 0;
var _vectorIcons = require("@expo/vector-icons");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _theme = require("../../theme");
var _Typography = require("../Typography");
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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ToastContext = /*#__PURE__*/(0, _react.createContext)(null);
const useToast = () => {
  const context = (0, _react.useContext)(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
exports.useToast = useToast;
const getVariantConfig = (variant, theme) => {
  const configs = {
    default: {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
      iconName: 'information-circle',
      iconColor: theme.colors.primary,
      textColor: theme.colors.text,
      titleColor: theme.colors.text
    },
    success: {
      backgroundColor: theme.colors.success,
      borderColor: theme.colors.success,
      iconName: 'checkmark-circle',
      iconColor: '#ffffff',
      textColor: '#ffffff',
      titleColor: '#ffffff'
    },
    error: {
      backgroundColor: theme.colors.error,
      borderColor: theme.colors.error,
      iconName: 'close-circle',
      iconColor: '#ffffff',
      textColor: '#ffffff',
      titleColor: '#ffffff'
    },
    warning: {
      backgroundColor: theme.colors.warning,
      borderColor: theme.colors.warning,
      iconName: 'warning',
      iconColor: '#ffffff',
      textColor: '#ffffff',
      titleColor: '#ffffff'
    },
    info: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      iconName: 'information-circle',
      iconColor: '#ffffff',
      textColor: '#ffffff',
      titleColor: '#ffffff'
    }
  };
  return configs[variant];
};
const Toast = ({
  title,
  message,
  variant = 'default',
  duration = 4000,
  position = 'top',
  action,
  showCloseButton = true,
  icon,
  style,
  onClose,
  onRemove,
  testID
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const variantConfig = getVariantConfig(variant, theme);
  const handleDismiss = (0, _react.useCallback)(() => {
    onRemove();
    onClose?.();
  }, [onRemove, onClose]);
  (0, _react.useEffect)(() => {
    // Auto dismiss
    if (duration !== 'infinite' && typeof duration === 'number') {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleDismiss]);
  const toastStyle = {
    backgroundColor: variantConfig.backgroundColor,
    borderWidth: 1,
    borderColor: variantConfig.borderColor,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: title ? 'flex-start' : 'center',
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  };
  const getEntryAnimation = () => {
    return position === 'top' ? _reactNativeReanimated.SlideInUp.springify().damping(15).stiffness(100) : _reactNativeReanimated.SlideInDown.springify().damping(15).stiffness(100);
  };
  const getExitAnimation = () => {
    return position === 'top' ? _reactNativeReanimated.SlideOutUp.springify().damping(15).stiffness(100) : _reactNativeReanimated.SlideOutDown.springify().damping(15).stiffness(100);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeReanimated.default.View, {
    entering: getEntryAnimation(),
    exiting: getExitAnimation(),
    layout: _reactNativeReanimated.LinearTransition.springify().damping(15).stiffness(100),
    style: [toastStyle, style],
    testID: testID,
    children: [icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
      name: variantConfig.iconName,
      size: 20,
      color: variantConfig.iconColor,
      style: {
        marginRight: 12,
        marginTop: title ? 2 : 0
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        flex: 1
      },
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
        style: {
          color: variantConfig.titleColor,
          fontWeight: '600',
          fontSize: 16,
          marginBottom: 4
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
        style: {
          color: variantConfig.textColor,
          lineHeight: 20,
          fontSize: 14
        },
        children: message
      })]
    }), action && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      onPress: action.onPress,
      style: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginLeft: 12,
        marginTop: title ? 2 : 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.Typography, {
        style: {
          color: variantConfig.iconColor,
          fontWeight: '600',
          fontSize: 14
        },
        children: action.label
      })
    }), showCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      onPress: handleDismiss,
      style: {
        padding: 4,
        marginLeft: action ? 8 : 12,
        marginTop: title ? 2 : 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_vectorIcons.Ionicons, {
        name: "close",
        size: 16,
        color: variantConfig.textColor
      })
    })]
  });
};
exports.Toast = Toast;
const ToastProvider = ({
  children,
  maxToasts = 5
}) => {
  const [toasts, setToasts] = (0, _react.useState)([]);
  const showToast = toast => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast = {
      ...toast,
      id
    };
    setToasts(prevToasts => {
      const updatedToasts = [...prevToasts, newToast];
      return updatedToasts.slice(-maxToasts);
    });
    return id;
  };
  const hideToast = id => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };
  const hideAllToasts = () => {
    setToasts([]);
  };
  const contextValue = {
    showToast,
    hideToast,
    hideAllToasts
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ToastContext.Provider, {
    value: contextValue,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position !== 'bottom').map(toast => /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position === 'bottom').map(toast => /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    })]
  });
};

// Root Toast Provider for the whole app
exports.ToastProvider = ToastProvider;
let rootToastRef = null;
const RootToastProvider = ({
  children
}) => {
  const [toasts, setToasts] = (0, _react.useState)([]);
  const showToast = toast => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast = {
      ...toast,
      id
    };
    setToasts(prevToasts => {
      const updatedToasts = [...prevToasts, newToast];
      return updatedToasts.slice(-5); // Max 5 toasts
    });
    return id;
  };
  const hideToast = id => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };
  const hideAllToasts = () => {
    setToasts([]);
  };

  // Set the ref for global access
  rootToastRef = {
    showToast,
    hideToast,
    hideAllToasts
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position !== 'bottom').map(toast => /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position === 'bottom').map(toast => /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    })]
  });
};

// Global toast methods that can be used anywhere in the app
exports.RootToastProvider = RootToastProvider;
const toast = exports.toast = {
  show: (message, options) => {
    return rootToastRef?.showToast({
      message,
      ...options
    }) || '';
  },
  success: (message, options) => {
    return rootToastRef?.showToast({
      message,
      variant: 'success',
      ...options
    }) || '';
  },
  error: (message, options) => {
    return rootToastRef?.showToast({
      message,
      variant: 'error',
      ...options
    }) || '';
  },
  warning: (message, options) => {
    return rootToastRef?.showToast({
      message,
      variant: 'warning',
      ...options
    }) || '';
  },
  info: (message, options) => {
    return rootToastRef?.showToast({
      message,
      variant: 'info',
      ...options
    }) || '';
  },
  hide: id => {
    rootToastRef?.hideToast(id);
  },
  hideAll: () => {
    rootToastRef?.hideAllToasts();
  }
};

// Convenience exports
//# sourceMappingURL=index.js.map