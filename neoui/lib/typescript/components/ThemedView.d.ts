import React from 'react';
import { type ViewProps } from 'react-native';
export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};
export declare function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps): React.JSX.Element;
//# sourceMappingURL=ThemedView.d.ts.map