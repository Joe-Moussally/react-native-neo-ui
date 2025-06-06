import { PressableProps, ViewStyle } from "react-native";

export type ToggleButtonSize = "sm" | "md" | "lg";

export type ToggleButtonColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "error"
  | "warning"
  | "info";

export type ToggleButtonOrientation = "horizontal" | "vertical";

export interface ToggleButtonProps extends Omit<PressableProps, "style"> {
  value: string;
  selected?: boolean;
  size?: ToggleButtonSize;
  color?: ToggleButtonColorKey;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
  onChange?: (value: string) => void;
  testID?: string;
}

export interface ToggleButtonGroupProps {
  value?: string | string[];
  exclusive?: boolean; // If true, only one button can be selected at a time
  orientation?: ToggleButtonOrientation;
  size?: ToggleButtonSize;
  color?: ToggleButtonColorKey;
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  onChange?: (value: string | string[] | null) => void;
  enforceValueSet?: boolean; // If true, at least one button must remain selected
  fullWidth?: boolean; // If true, buttons will take full width
  testID?: string;
}
