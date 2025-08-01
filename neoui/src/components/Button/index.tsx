import * as Haptics from 'expo-haptics';
import React from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useTheme } from '../../theme';
import { spacing } from '../../theme/spacing';
import {
  ButtonColorKey,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  color,
  fullWidth = false,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  children,
  style,
  hapticsDisabled = false,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const { theme } = useTheme();
  const pressed = useSharedValue(0);

  const handlePressIn = (event: any) => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    pressed.value = withSpring(1, { damping: 15, stiffness: 300 });
    onPressIn?.(event);
  };

  const handlePressOut = (event: any) => {
    if (!hapticsDisabled && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    pressed.value = withSpring(0, { damping: 15, stiffness: 300 });
    onPressOut?.(event);
  };

  // Check if this is an icon-only button (no text children)
  const isIconOnly =
    !children ||
    (typeof children !== 'string' && React.isValidElement(children));

  const getButtonColors = (
    variant: ButtonVariant,
    colorKey?: ButtonColorKey,
    disabled?: boolean
  ) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.disabled,
        textColor: theme.colors.textSecondary,
        borderColor: theme.colors.disabled,
        shadowColor: theme.colors.disabled,
      };
    }

    const baseColor = colorKey ? theme.colors[colorKey] : theme.colors.primary;

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: baseColor,
          shadowColor: baseColor,
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.surface,
          textColor: baseColor,
          borderColor: theme.colors.border,
          shadowColor: theme.colors.border,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: baseColor,
          shadowColor: baseColor,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor,
        };
      case 'soft':
        return {
          backgroundColor: baseColor + '15', // 15% opacity
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          textColor: baseColor,
          borderColor: 'transparent',
          shadowColor: baseColor,
        };
      default:
        return {
          backgroundColor: baseColor,
          textColor: theme.isDark ? theme.colors.text : theme.colors.background,
          borderColor: baseColor,
          shadowColor: baseColor,
        };
    }
  };

  const getSizeStyles = (size: ButtonSize) => {
    const baseStyles = {
      xs: {
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderRadius: spacing.rounded,
        fontSize: 12,
        minHeight: 26,
        shadowOffset: 2,
      },
      sm: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderRadius: spacing.rounded,
        fontSize: 14,
        minHeight: 34,
        shadowOffset: 3,
      },
      md: {
        paddingVertical: spacing.sm + 2,
        paddingHorizontal: spacing.lg,
        borderRadius: spacing.rounded,
        fontSize: 16,
        minHeight: 42,
        shadowOffset: 4,
      },
      lg: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: spacing.rounded,
        fontSize: 18,
        minHeight: 50,
        shadowOffset: 5,
      },
      xl: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xxl,
        borderRadius: spacing.rounded,
        fontSize: 20,
        minHeight: 58,
        shadowOffset: 6,
      },
    };

    const sizeStyle = baseStyles[size] || baseStyles.md;

    // For icon-only buttons, remove horizontal padding
    if (isIconOnly) {
      return {
        ...sizeStyle,
        paddingHorizontal: 0,
      };
    }

    return sizeStyle;
  };

  const colors = getButtonColors(variant, color, disabled || loading);
  const sizeStyles = getSizeStyles(size);

  // Determine border width - make outline variants thicker
  const borderWidth = variant === 'outline' ? 2 : 1;

  // Determine if this variant should have shadows
  const shouldHaveShadow = !['outline', 'ghost', 'soft', 'text'].includes(
    variant
  );

  // Animated styles for 3D effect
  const animatedButtonStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      pressed.value,
      [0, 1],
      [0, shouldHaveShadow ? sizeStyles.shadowOffset / 2 : 0]
    );
    const shadowOffsetY = interpolate(
      pressed.value,
      [0, 1],
      [sizeStyles.shadowOffset, sizeStyles.shadowOffset / 2]
    );
    const shadowOpacity = interpolate(pressed.value, [0, 1], [0.3, 0.15]);

    const baseStyle = {
      transform: [{ translateY }],
      elevation: shouldHaveShadow
        ? interpolate(
            pressed.value,
            [0, 1],
            [sizeStyles.shadowOffset, sizeStyles.shadowOffset / 2]
          )
        : 0,
    };

    // Add iOS-specific shadow properties only for variants that should have shadows
    if (Platform.OS === 'ios' && shouldHaveShadow) {
      return {
        ...baseStyle,
        shadowOffset: {
          width: 0,
          height: shadowOffsetY,
        },
        shadowOpacity,
        shadowRadius: sizeStyles.shadowOffset,
      };
    }

    return baseStyle;
  });

  const buttonStyle = [
    styles.button,
    {
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth,
      paddingVertical: sizeStyles.paddingVertical,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      borderRadius: sizeStyles.borderRadius,
      minHeight: sizeStyles.minHeight,
      opacity: disabled && !loading ? 0.6 : 1,
      width: (fullWidth ? '100%' : undefined) as DimensionValue,
      marginBottom: shouldHaveShadow ? sizeStyles.shadowOffset : 0, // Reserve space for shadow only when needed
      ...(Platform.OS === 'ios' &&
        shouldHaveShadow && { shadowColor: colors.shadowColor }),
    },
    style,
  ];

  const textStyle = [
    styles.text,
    {
      color: colors.textColor,
      fontSize: sizeStyles.fontSize,
    },
  ];

  const isDisabled = disabled || loading;

  // Clone icons with proper color inheritance
  const cloneIconWithColor = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        color: colors.textColor,
      });
    }
    return icon;
  };

  return (
    <AnimatedPressable
      style={[buttonStyle, animatedButtonStyle]}
      disabled={isDisabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...props}
    >
      <View style={styles.content}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.textColor}
            style={styles.loadingIndicator}
          />
        )}
        {!loading && startIcon && (
          <View style={styles.startIcon}>{cloneIconWithColor(startIcon)}</View>
        )}
        {typeof children === 'string' ? (
          <Text style={textStyle}>{children}</Text>
        ) : React.isValidElement(children) ? (
          cloneIconWithColor(children)
        ) : (
          children
        )}
        {!loading && endIcon && (
          <View style={styles.endIcon}>{cloneIconWithColor(endIcon)}</View>
        )}
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  loadingIndicator: {
    marginRight: 8,
  },
  startIcon: {
    marginRight: 8,
  },
  endIcon: {
    marginLeft: 8,
  },
});

export * from './types';
