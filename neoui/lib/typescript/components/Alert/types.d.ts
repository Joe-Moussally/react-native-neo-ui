import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
export type AlertSeverity = "success" | "info" | "warning" | "error";
export type AlertVariant = "solid" | "soft";
export interface AlertProps {
    severity: AlertSeverity;
    variant?: AlertVariant;
    title?: string;
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    onClose?: () => void;
    showIcon?: boolean;
}
//# sourceMappingURL=types.d.ts.map