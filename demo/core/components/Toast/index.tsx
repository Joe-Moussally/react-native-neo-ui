import { useTheme } from "@joe111/neo-ui/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  LinearTransition,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
} from "react-native-reanimated";
import { Typography } from "../Typography";
import {
  ToastContextValue,
  ToastProps,
  ToastProviderProps,
  ToastVariant,
} from "./types";

const { width: screenWidth } = Dimensions.get("window");

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Helper function to lighten a color
const lightenColor = (color: string, amount: number = 0.8) => {
  // Simple color lightening by adjusting opacity with white background
  return color;
};

const getVariantConfig = (variant: ToastVariant, theme: any) => {
  const configs = {
    default: {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
      iconName: "information-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.primary,
      textColor: theme.colors.text,
      titleColor: theme.colors.text,
    },
    success: {
      backgroundColor: theme.colors.success,
      borderColor: theme.colors.success,
      iconName: "checkmark-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: "#ffffff",
      textColor: "#ffffff",
      titleColor: "#ffffff",
    },
    error: {
      backgroundColor: theme.colors.error,
      borderColor: theme.colors.error,
      iconName: "close-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: "#ffffff",
      textColor: "#ffffff",
      titleColor: "#ffffff",
    },
    warning: {
      backgroundColor: theme.colors.warning,
      borderColor: theme.colors.warning,
      iconName: "warning" as keyof typeof Ionicons.glyphMap,
      iconColor: "#ffffff",
      textColor: "#ffffff",
      titleColor: "#ffffff",
    },
    info: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      iconName: "information-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: "#ffffff",
      textColor: "#ffffff",
      titleColor: "#ffffff",
    },
  };
  return configs[variant];
};

const Toast: React.FC<ToastProps & { onRemove: () => void }> = ({
  title,
  message,
  variant = "default",
  duration = 4000,
  position = "top",
  action,
  showCloseButton = true,
  icon,
  style,
  onClose,
  onRemove,
  testID,
}) => {
  const { theme } = useTheme();
  const variantConfig = getVariantConfig(variant, theme);

  useEffect(() => {
    // Auto dismiss
    if (duration !== "infinite" && typeof duration === "number") {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleDismiss = () => {
    onRemove();
    onClose?.();
  };

  const toastStyle: ViewStyle = {
    backgroundColor: variantConfig.backgroundColor,
    borderWidth: 1,
    borderColor: variantConfig.borderColor,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: title ? "flex-start" : "center",
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  };

  const getEntryAnimation = () => {
    return position === "top"
      ? SlideInUp.springify().damping(15).stiffness(100)
      : SlideInDown.springify().damping(15).stiffness(100);
  };

  const getExitAnimation = () => {
    return position === "top"
      ? SlideOutUp.springify().damping(15).stiffness(100)
      : SlideOutDown.springify().damping(15).stiffness(100);
  };

  return (
    <Animated.View
      entering={getEntryAnimation()}
      exiting={getExitAnimation()}
      layout={LinearTransition.springify().damping(15).stiffness(100)}
      style={[toastStyle, style]}
      testID={testID}
    >
      {icon || (
        <Ionicons
          name={variantConfig.iconName}
          size={20}
          color={variantConfig.iconColor}
          style={{ marginRight: 12, marginTop: title ? 2 : 0 }}
        />
      )}

      <View style={{ flex: 1 }}>
        {title && (
          <Typography
            style={{
              color: variantConfig.titleColor,
              fontWeight: "600",
              fontSize: 16,
              marginBottom: 4,
            }}
          >
            {title}
          </Typography>
        )}
        <Typography
          style={{
            color: variantConfig.textColor,
            lineHeight: 20,
            fontSize: 14,
          }}
        >
          {message}
        </Typography>
      </View>

      {action && (
        <Pressable
          onPress={action.onPress}
          style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            marginLeft: 12,
            marginTop: title ? 2 : 0,
          }}
        >
          <Typography
            style={{
              color: variantConfig.iconColor,
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            {action.label}
          </Typography>
        </Pressable>
      )}

      {showCloseButton && (
        <Pressable
          onPress={handleDismiss}
          style={{
            padding: 4,
            marginLeft: action ? 8 : 12,
            marginTop: title ? 2 : 0,
          }}
        >
          <Ionicons name="close" size={16} color={variantConfig.textColor} />
        </Pressable>
      )}
    </Animated.View>
  );
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  const showToast = (toast: Omit<ToastProps, "id">): string => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };

    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast];
      return updatedToasts.slice(-maxToasts);
    });

    return id;
  };

  const hideToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const hideAllToasts = () => {
    setToasts([]);
  };

  const contextValue: ToastContextValue = {
    showToast,
    hideToast,
    hideAllToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {/* Top Toasts */}
      <SafeAreaView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          pointerEvents: "box-none",
        }}
      >
        {toasts
          .filter((toast) => toast.position !== "bottom")
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </SafeAreaView>

      {/* Bottom Toasts */}
      <SafeAreaView
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          pointerEvents: "box-none",
        }}
      >
        {toasts
          .filter((toast) => toast.position === "bottom")
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </SafeAreaView>
    </ToastContext.Provider>
  );
};

// Root Toast Provider for the whole app
let rootToastRef: {
  showToast: (toast: Omit<ToastProps, "id">) => string;
  hideToast: (id: string) => void;
  hideAllToasts: () => void;
} | null = null;

export const RootToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  const showToast = (toast: Omit<ToastProps, "id">): string => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };

    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast];
      return updatedToasts.slice(-5); // Max 5 toasts
    });

    return id;
  };

  const hideToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const hideAllToasts = () => {
    setToasts([]);
  };

  // Set the ref for global access
  rootToastRef = {
    showToast,
    hideToast,
    hideAllToasts,
  };

  return (
    <>
      {children}

      {/* Top Toasts */}
      <SafeAreaView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          pointerEvents: "box-none",
        }}
      >
        {toasts
          .filter((toast) => toast.position !== "bottom")
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </SafeAreaView>

      {/* Bottom Toasts */}
      <SafeAreaView
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          pointerEvents: "box-none",
        }}
      >
        {toasts
          .filter((toast) => toast.position === "bottom")
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </SafeAreaView>
    </>
  );
};

// Global toast methods that can be used anywhere in the app
export const toast = {
  show: (message: string, options?: Partial<Omit<ToastProps, "message">>) => {
    return rootToastRef?.showToast({ message, ...options }) || "";
  },
  success: (
    message: string,
    options?: Partial<Omit<ToastProps, "message">>
  ) => {
    return (
      rootToastRef?.showToast({ message, variant: "success", ...options }) || ""
    );
  },
  error: (message: string, options?: Partial<Omit<ToastProps, "message">>) => {
    return (
      rootToastRef?.showToast({ message, variant: "error", ...options }) || ""
    );
  },
  warning: (
    message: string,
    options?: Partial<Omit<ToastProps, "message">>
  ) => {
    return (
      rootToastRef?.showToast({ message, variant: "warning", ...options }) || ""
    );
  },
  info: (message: string, options?: Partial<Omit<ToastProps, "message">>) => {
    return (
      rootToastRef?.showToast({ message, variant: "info", ...options }) || ""
    );
  },
  hide: (id: string) => {
    rootToastRef?.hideToast(id);
  },
  hideAll: () => {
    rootToastRef?.hideAllToasts();
  },
};

// Convenience exports
export * from "./types";
export { Toast };
