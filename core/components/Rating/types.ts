import { ViewStyle } from "react-native";

export type RatingSize = "small" | "medium" | "large";

export interface RatingProps {
  name?: string;
  value?: number | null;
  defaultValue?: number;
  max?: number;
  precision?: number;
  size?: RatingSize;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (event: any, newValue: number | null) => void;
  onChangeActive?: (event: any, newHover: number) => void;
  getLabelText?: (value: number) => string;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  highlightSelectedOnly?: boolean;
  style?: ViewStyle;
}
