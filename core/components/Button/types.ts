import { TouchableOpacityProps } from "react-native";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "text"
  | "danger"
  | "success"
  | "warning"
  | "info";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "success"
  | "warning"
  | "info";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColorKey;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  style?: TouchableOpacityProps["style"];
}
