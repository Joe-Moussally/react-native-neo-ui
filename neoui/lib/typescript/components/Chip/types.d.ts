import { ThemeColor, ThemeSpacing } from "../../theme/types";
import { PressableProps } from "react-native";
export type ChipVariant = "solid" | "soft" | "outline" | "ghost";
export type ChipSize = "xs" | "sm" | "md" | "lg";
export interface ChipProps extends Omit<PressableProps, "style"> {
    children?: React.ReactNode;
    label?: string;
    variant?: ChipVariant;
    size?: ChipSize;
    color?: ThemeColor;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    selected?: boolean;
    margin?: ThemeSpacing;
    onDelete?: () => void;
    deletable?: boolean;
    style?: PressableProps["style"];
    textStyle?: any;
}
//# sourceMappingURL=types.d.ts.map