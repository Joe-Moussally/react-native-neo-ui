import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { ScreenProps } from './types';

export const Screen: React.FC<ScreenProps> = ({
  children,
  title,
  useSafeArea = true,
  headerLeft,
  headerRight,
  options,
  style,
}) => {
  const { theme } = useTheme();

  // Combine default stack options with custom ones
  const screenOptions: NativeStackNavigationOptions = {
    title,
    // headerLeft: () => {
    //   if (router.canGoBack()) {
    //     return Platform.OS === "ios" ? (
    //       <MaterialIcons
    //         name="arrow-back-ios-new"
    //         size={22}
    //         color={theme.colors.text}
    //       />
    //     ) : (
    //       <Ionicons name="arrow-back" size={22} color={theme.colors.text} />
    //     );
    //   } else {
    //     return headerLeft;
    //   }
    // },
    headerLeft,
    headerRight,
    headerStyle: {
      backgroundColor: theme.colors.surface,
    },
    headerTintColor: theme.colors.text,
    headerTitleStyle: {
      color: theme.colors.text,
    },
    headerBackButtonMenuEnabled: false,
    headerBackButtonDisplayMode: 'minimal',
    animation: Platform.OS !== 'ios' ? 'fade' : 'default',
    ...options,
  };

  const Container = useSafeArea ? SafeAreaView : View;

  return (
    <>
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <Stack.Screen options={screenOptions} />
      <Container
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            // Add bottom padding to account for tab bar when using SafeAreaView
            // paddingBottom: useSafeArea ? insets.bottom : 0,
          },
          style,
        ]}
      >
        {children}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export * from './types';
