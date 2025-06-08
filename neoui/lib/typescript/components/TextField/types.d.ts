import { ThemeColor, ThemeSpacing } from "../../theme/types";
import { TextInputProps } from "react-native";
export type TextFieldVariant = "filled" | "outline" | "underline";
export type TextFieldSize = "sm" | "md" | "lg";
export interface TextFieldProps extends Omit<TextInputProps, "style"> {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    variant?: TextFieldVariant;
    size?: TextFieldSize;
    color?: ThemeColor;
    fullWidth?: boolean;
    disabled?: boolean;
    error?: boolean;
    loading?: boolean;
    required?: boolean;
    helperText?: string;
    errorText?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    margin?: ThemeSpacing;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    keyboardType?: TextInputProps["keyboardType"];
    returnKeyType?: TextInputProps["returnKeyType"];
    onFocus?: () => void;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
    style?: TextInputProps["style"];
    containerStyle?: any;
}
//# sourceMappingURL=types.d.ts.map