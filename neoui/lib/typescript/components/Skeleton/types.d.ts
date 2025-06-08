import { ViewStyle } from "react-native";
export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded";
export type SkeletonAnimation = "pulse" | "wave" | false;
export interface SkeletonProps {
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    width?: number | string;
    height?: number | string;
    style?: ViewStyle;
    children?: React.ReactNode;
    sx?: {
        fontSize?: string | number;
        bgcolor?: string;
    };
}
//# sourceMappingURL=types.d.ts.map