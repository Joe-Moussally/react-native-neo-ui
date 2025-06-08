import { ViewStyle } from "react-native";
export type RatingSize = "small" | "medium" | "large";
export interface RatingProps {
    name?: string;
    value?: number | null;
    defaultValue?: number;
    max?: number;
    size?: RatingSize;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: (event: any, newValue: number | null) => void;
    getLabelText?: (value: number) => string;
    icon?: React.ReactNode;
    emptyIcon?: React.ReactNode;
    highlightSelectedOnly?: boolean;
    style?: ViewStyle;
}
//# sourceMappingURL=types.d.ts.map