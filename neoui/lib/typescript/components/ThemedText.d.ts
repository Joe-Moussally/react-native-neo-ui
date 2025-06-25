import { type TextProps } from 'react-native';
export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};
export declare function ThemedText({ style, lightColor, darkColor, type, ...rest }: ThemedTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemedText.d.ts.map