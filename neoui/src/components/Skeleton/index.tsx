import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme';
import { SkeletonProps, SkeletonVariant } from './types';

const { width: screenWidth } = Dimensions.get('window');

const getVariantStyles = (
  variant: SkeletonVariant,
  width?: number | string,
  height?: number | string,
  fontSize?: string | number
): ViewStyle => {
  const baseStyles: ViewStyle = {};

  switch (variant) {
    case 'text':
      return {
        ...baseStyles,
        width: (width || '100%') as any,
        height: fontSize
          ? typeof fontSize === 'number'
            ? fontSize * 1.2
            : 20
          : 16,
        borderRadius: 4,
      };
    case 'circular': {
      const size = width || height || 40;
      return {
        ...baseStyles,
        width: size as any,
        height: size as any,
        borderRadius: typeof size === 'number' ? size / 2 : 20,
      };
    }
    case 'rectangular':
      return {
        ...baseStyles,
        width: (width || 100) as any,
        height: (height || 60) as any,
        borderRadius: 0,
      };
    case 'rounded':
      return {
        ...baseStyles,
        width: (width || 100) as any,
        height: (height || 60) as any,
        borderRadius: 8,
      };
    default:
      return baseStyles;
  }
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  style,
  children,
  sx,
}) => {
  const { theme } = useTheme();
  const pulseAnimation = useRef(new Animated.Value(0.3)).current;
  const waveAnimation = useRef(new Animated.Value(-screenWidth)).current;

  // Determine skeleton color based on theme
  const skeletonColor =
    sx?.bgcolor ||
    (theme.isDark ? theme.colors.surfaceVariant : theme.colors.border);
  const highlightColor = theme.isDark
    ? theme.colors.border
    : theme.colors.surface;

  useEffect(() => {
    if (animation === 'pulse') {
      const startPulse = () => {
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]).start(() => startPulse());
      };
      startPulse();
    } else if (animation === 'wave') {
      const startWave = () => {
        waveAnimation.setValue(-screenWidth);
        Animated.timing(waveAnimation, {
          toValue: screenWidth,
          duration: 1500,
          useNativeDriver: false,
        }).start(() => startWave());
      };
      startWave();
    }
  }, [animation, pulseAnimation, waveAnimation]);

  // If children are provided, measure their dimensions
  const [childDimensions, setChildDimensions] = React.useState<{
    width?: number;
    height?: number;
  }>({});

  const onChildLayout = (event: any) => {
    const { width: childWidth, height: childHeight } = event.nativeEvent.layout;
    setChildDimensions({ width: childWidth, height: childHeight });
  };

  // Use child dimensions if available and no explicit dimensions provided
  const finalWidth = width || childDimensions.width;
  const finalHeight = height || childDimensions.height;

  const variantStyles = getVariantStyles(
    variant,
    finalWidth,
    finalHeight,
    sx?.fontSize
  );

  const animationStyle: ViewStyle = {};
  if (animation === 'pulse') {
    animationStyle.opacity = pulseAnimation;
  }

  const renderContent = () => {
    if (children) {
      return (
        <View style={{ opacity: 0 }} onLayout={onChildLayout}>
          {children}
        </View>
      );
    }
    return null;
  };

  const renderSkeleton = () => {
    if (animation === 'wave') {
      return (
        <View
          style={[
            styles.waveContainer,
            variantStyles,
            { backgroundColor: skeletonColor },
          ]}
        >
          <Animated.View
            style={[
              styles.waveOverlay,
              {
                backgroundColor: highlightColor,
                transform: [{ translateX: waveAnimation }],
                opacity: 0.4,
              },
            ]}
          />
        </View>
      );
    }

    return (
      <Animated.View
        style={[
          variantStyles,
          {
            backgroundColor: skeletonColor,
          },
          animationStyle,
        ]}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      {renderSkeleton()}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  waveContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  waveOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
    transform: [{ skewX: '-20deg' }],
  },
});
