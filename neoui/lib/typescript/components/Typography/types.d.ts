import { TextProps } from "react-native";
export type TypographyVariant = "display" | "h1" | "h2" | "h3" | "body" | "bodyLarge" | "bodySmall" | "caption" | "button" | "link";
export type TypographyWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "ultralight" | "thin" | "light" | "medium" | "semibold" | "heavy" | "black";
export interface TypographyProps extends TextProps {
    variant?: TypographyVariant;
    weight?: TypographyWeight;
    color?: string;
    lightColor?: string;
    darkColor?: string;
}
//# sourceMappingURL=types.d.ts.map