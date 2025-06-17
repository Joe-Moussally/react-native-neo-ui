import { ThemeColor, ThemeSpacing } from "@/core/theme/types";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarVariant = "circular" | "rounded" | "square";

export interface AvatarProps {
  src?: string;
  alt?: string;
  color?: ThemeColor;
  size?: AvatarSize;
  variant?: AvatarVariant;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface AvatarGroupProps {
  children: ReactNode;
  max?: number;
  spacing?: ThemeSpacing;
  style?: StyleProp<ViewStyle>;
}
