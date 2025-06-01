import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ScreenProps {
  children: ReactNode;
  title?: string;
  useSafeArea?: boolean;
  headerLeft?: () => ReactNode;
  headerRight?: () => ReactNode;
  stackOptions?: Partial<NativeStackNavigationOptions>;
  style?: ViewStyle;
}
