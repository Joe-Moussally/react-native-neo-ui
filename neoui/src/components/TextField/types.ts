import { ThemeColor, ThemeSpacing } from "../../theme/types";
import { TextInputProps } from "react-native";

export type TextFieldVariant = "filled" | "outline" | "underline";
export type TextFieldSize = "sm" | "md" | "lg";

export interface TextFieldProps extends Omit<TextInputProps, "style"> {
  // Content props
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;

  // Styling props
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  color?: ThemeColor;
  fullWidth?: boolean;

  // State props
  disabled?: boolean;
  error?: boolean;
  loading?: boolean;
  required?: boolean;

  // Helper text
  helperText?: string;
  errorText?: string;

  // Icons
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  // Layout props
  margin?: ThemeSpacing;

  // Input specific props
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  returnKeyType?: TextInputProps["returnKeyType"];

  // Event handlers
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;

  // Styling
  style?: TextInputProps["style"];
  containerStyle?: any;
}
