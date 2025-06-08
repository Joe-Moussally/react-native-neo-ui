import { ViewStyle } from "react-native";
export type ToastVariant = "default" | "success" | "error" | "warning" | "info";
export type ToastPosition = "top" | "bottom";
export type ToastDuration = number | "infinite";
export interface ToastAction {
    label: string;
    onPress: () => void;
}
export interface ToastProps {
    id?: string;
    title?: string;
    message: string;
    variant?: ToastVariant;
    duration?: ToastDuration;
    position?: ToastPosition;
    action?: ToastAction;
    showCloseButton?: boolean;
    icon?: React.ReactNode;
    style?: ViewStyle;
    onClose?: () => void;
    testID?: string;
}
export interface ToastProviderProps {
    children: React.ReactNode;
    maxToasts?: number;
}
export interface ToastContextValue {
    showToast: (toast: Omit<ToastProps, "id">) => string;
    hideToast: (id: string) => void;
    hideAllToasts: () => void;
}
//# sourceMappingURL=types.d.ts.map