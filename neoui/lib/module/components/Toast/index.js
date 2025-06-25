"use strict";

import { Ionicons } from '@expo/vector-icons';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import Animated, { LinearTransition, SlideInDown, SlideInUp, SlideOutDown, SlideOutUp } from 'react-native-reanimated';
import { useTheme } from "../../theme/index.js";
import { Typography } from "../Typography/index.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const ToastContext = /*#__PURE__*/createContext(null);
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
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
  } = useTheme();
  const variantConfig = getVariantConfig(variant, theme);
  const handleDismiss = useCallback(() => {
    onRemove();
    onClose?.();
  }, [onRemove, onClose]);
  useEffect(() => {
    // Auto dismiss
    if (duration !== 'infinite' && typeof duration === 'number') {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]); // eslint-disable-line react-hooks/exhaustive-deps

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
    return position === 'top' ? SlideInUp.springify().damping(15).stiffness(100) : SlideInDown.springify().damping(15).stiffness(100);
  };
  const getExitAnimation = () => {
    return position === 'top' ? SlideOutUp.springify().damping(15).stiffness(100) : SlideOutDown.springify().damping(15).stiffness(100);
  };
  return /*#__PURE__*/_jsxs(Animated.View, {
    entering: getEntryAnimation(),
    exiting: getExitAnimation(),
    layout: LinearTransition.springify().damping(15).stiffness(100),
    style: [toastStyle, style],
    testID: testID,
    children: [icon || /*#__PURE__*/_jsx(Ionicons, {
      name: variantConfig.iconName,
      size: 20,
      color: variantConfig.iconColor,
      style: {
        marginRight: 12,
        marginTop: title ? 2 : 0
      }
    }), /*#__PURE__*/_jsxs(View, {
      style: {
        flex: 1
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        style: {
          color: variantConfig.titleColor,
          fontWeight: '600',
          fontSize: 16,
          marginBottom: 4
        },
        children: title
      }), /*#__PURE__*/_jsx(Typography, {
        style: {
          color: variantConfig.textColor,
          lineHeight: 20,
          fontSize: 14
        },
        children: message
      })]
    }), action && /*#__PURE__*/_jsx(Pressable, {
      onPress: action.onPress,
      style: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginLeft: 12,
        marginTop: title ? 2 : 0
      },
      children: /*#__PURE__*/_jsx(Typography, {
        style: {
          color: variantConfig.iconColor,
          fontWeight: '600',
          fontSize: 14
        },
        children: action.label
      })
    }), showCloseButton && /*#__PURE__*/_jsx(Pressable, {
      onPress: handleDismiss,
      style: {
        padding: 4,
        marginLeft: action ? 8 : 12,
        marginTop: title ? 2 : 0
      },
      children: /*#__PURE__*/_jsx(Ionicons, {
        name: "close",
        size: 16,
        color: variantConfig.textColor
      })
    })]
  });
};
export const ToastProvider = ({
  children,
  maxToasts = 5
}) => {
  const [toasts, setToasts] = useState([]);
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
  return /*#__PURE__*/_jsxs(ToastContext.Provider, {
    value: contextValue,
    children: [children, /*#__PURE__*/_jsx(SafeAreaView, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position !== 'bottom').map(toast => /*#__PURE__*/_jsx(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    }), /*#__PURE__*/_jsx(SafeAreaView, {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position === 'bottom').map(toast => /*#__PURE__*/_jsx(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    })]
  });
};

// Root Toast Provider for the whole app
let rootToastRef = null;
export const RootToastProvider = ({
  children
}) => {
  const [toasts, setToasts] = useState([]);
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [children, /*#__PURE__*/_jsx(SafeAreaView, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position !== 'bottom').map(toast => /*#__PURE__*/_jsx(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    }), /*#__PURE__*/_jsx(SafeAreaView, {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        pointerEvents: 'box-none'
      },
      children: toasts.filter(toast => toast.position === 'bottom').map(toast => /*#__PURE__*/_jsx(Toast, {
        ...toast,
        onRemove: () => hideToast(toast.id)
      }, toast.id))
    })]
  });
};

// Global toast methods that can be used anywhere in the app
export const toast = {
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
export * from "./types.js";
export { Toast };
//# sourceMappingURL=index.js.map