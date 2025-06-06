import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native";
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

const getVariantConfig = (variant: ToastVariant, theme: any) => {
  const configs = {
    default: {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
      iconName: "information-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.primary,
    },
    success: {
      backgroundColor: theme.colors.success + "15",
      borderColor: theme.colors.success,
      iconName: "checkmark-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.success,
    },
    error: {
      backgroundColor: theme.colors.error + "15",
      borderColor: theme.colors.error,
      iconName: "close-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.error,
    },
    warning: {
      backgroundColor: theme.colors.warning + "15",
      borderColor: theme.colors.warning,
      iconName: "warning" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.warning,
    },
    info: {
      backgroundColor: theme.colors.primary + "15",
      borderColor: theme.colors.primary,
      iconName: "information-circle" as keyof typeof Ionicons.glyphMap,
      iconColor: theme.colors.primary,
    },
  };
  return configs[variant];
};

const Toast: React.FC<ToastProps & { onRemove: () => void }> = ({
  message,
  variant = "default",
  duration = 4000,
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

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }),
    ]).start();

    // Auto dismiss
    if (duration !== "infinite" && typeof duration === "number") {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onRemove();
      onClose?.();
    });
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
    alignItems: "center",
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  };

  return (
    <Animated.View
      style={[
        toastStyle,
        style,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
      testID={testID}
    >
      {icon || (
        <Ionicons
          name={variantConfig.iconName}
          size={20}
          color={variantConfig.iconColor}
          style={{ marginRight: 12 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Typography
          style={{
            color: theme.colors.text,
            lineHeight: 20,
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
          }}
        >
          <Typography
            style={{
              color: variantConfig.iconColor,
              fontWeight: "600",
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
          }}
        >
          <Ionicons name="close" size={16} color={theme.colors.textSecondary} />
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

      <SafeAreaView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "box-none",
        }}
      >
        {toasts
          .filter(
            (toast) =>
              toast.position !== "bottom" && toast.position !== "center"
          )
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </SafeAreaView>

      <SafeAreaView
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
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

      <View
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "box-none",
          transform: [{ translateY: -50 }],
        }}
      >
        {toasts
          .filter((toast) => toast.position === "center")
          .map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={() => hideToast(toast.id)}
            />
          ))}
      </View>
    </ToastContext.Provider>
  );
};

// Convenience exports
export * from "./types";
export { Toast };
