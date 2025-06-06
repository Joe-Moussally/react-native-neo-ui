import { ViewStyle } from "react-native";

export type ProgressVariant = "native" | "circular" | "linear";

export type ProgressMode = "indeterminate" | "determinate";

export type ProgressSize = "sm" | "md" | "lg";

export type ProgressColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "error"
  | "warning"
  | "info";

export interface BaseProgressProps {
  variant?: ProgressVariant;
  mode?: ProgressMode;
  value?: number; // 0-100 for determinate mode
  size?: ProgressSize;
  color?: ProgressColorKey;
  style?: ViewStyle;
  testID?: string;
}

export interface NativeProgressProps extends BaseProgressProps {
  variant: "native";
  animating?: boolean;
  hidesWhenStopped?: boolean;
}

export interface CircularProgressProps extends BaseProgressProps {
  variant: "circular";
  strokeWidth?: number;
  showPercentage?: boolean;
}

export interface LinearProgressProps extends BaseProgressProps {
  variant: "linear";
  height?: number;
  borderRadius?: number;
  showPercentage?: boolean;
  backgroundColor?: string;
}

export type ProgressProps =
  | NativeProgressProps
  | CircularProgressProps
  | LinearProgressProps;
