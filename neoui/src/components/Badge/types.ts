import { ThemeColor } from "@/core/theme/types";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type BadgeVariant = "standard" | "dot";
export type BadgeAnchorOriginVertical = "top" | "bottom";
export type BadgeAnchorOriginHorizontal = "left" | "right";

export interface BadgeAnchorOrigin {
  vertical: BadgeAnchorOriginVertical;
  horizontal: BadgeAnchorOriginHorizontal;
}

export interface BadgeProps {
  children: ReactNode;
  badgeContent?: string | number;
  color?: ThemeColor;
  variant?: BadgeVariant;
  max?: number;
  showZero?: boolean;
  invisible?: boolean;
  anchorOrigin?: BadgeAnchorOrigin;
  style?: StyleProp<ViewStyle>;
}
