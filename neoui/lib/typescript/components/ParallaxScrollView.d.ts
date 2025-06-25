import { type PropsWithChildren, type ReactElement } from 'react';
type Props = PropsWithChildren<{
    headerImage: ReactElement;
    headerBackgroundColor: {
        dark: string;
        light: string;
    };
}>;
export default function ParallaxScrollView({ children, headerImage, headerBackgroundColor, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ParallaxScrollView.d.ts.map