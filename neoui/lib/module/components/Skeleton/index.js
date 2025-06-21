"use strict";

import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const {
  width: screenWidth
} = Dimensions.get('window');
const getVariantStyles = (variant, width, height, fontSize) => {
  const baseStyles = {};
  switch (variant) {
    case 'text':
      return {
        ...baseStyles,
        width: width || '100%',
        height: fontSize ? typeof fontSize === 'number' ? fontSize * 1.2 : 20 : 16,
        borderRadius: 4
      };
    case 'circular':
      {
        const size = width || height || 40;
        return {
          ...baseStyles,
          width: size,
          height: size,
          borderRadius: typeof size === 'number' ? size / 2 : 20
        };
      }
    case 'rectangular':
      return {
        ...baseStyles,
        width: width || 100,
        height: height || 60,
        borderRadius: 0
      };
    case 'rounded':
      return {
        ...baseStyles,
        width: width || 100,
        height: height || 60,
        borderRadius: 8
      };
    default:
      return baseStyles;
  }
};
export const Skeleton = ({
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  style,
  children,
  sx
}) => {
  const {
    theme
  } = useTheme();
  const pulseAnimation = useRef(new Animated.Value(0.3)).current;
  const waveAnimation = useRef(new Animated.Value(-screenWidth)).current;

  // Determine skeleton color based on theme
  const skeletonColor = sx?.bgcolor || (theme.isDark ? theme.colors.surfaceVariant : theme.colors.border);
  const highlightColor = theme.isDark ? theme.colors.border : theme.colors.surface;
  useEffect(() => {
    if (animation === 'pulse') {
      const startPulse = () => {
        Animated.sequence([Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }), Animated.timing(pulseAnimation, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: false
        })]).start(() => startPulse());
      };
      startPulse();
    } else if (animation === 'wave') {
      const startWave = () => {
        waveAnimation.setValue(-screenWidth);
        Animated.timing(waveAnimation, {
          toValue: screenWidth,
          duration: 1500,
          useNativeDriver: false
        }).start(() => startWave());
      };
      startWave();
    }
  }, [animation, pulseAnimation, waveAnimation]);

  // If children are provided, measure their dimensions
  const [childDimensions, setChildDimensions] = React.useState({});
  const onChildLayout = event => {
    const {
      width: childWidth,
      height: childHeight
    } = event.nativeEvent.layout;
    setChildDimensions({
      width: childWidth,
      height: childHeight
    });
  };

  // Use child dimensions if available and no explicit dimensions provided
  const finalWidth = width || childDimensions.width;
  const finalHeight = height || childDimensions.height;
  const variantStyles = getVariantStyles(variant, finalWidth, finalHeight, sx?.fontSize);
  const animationStyle = {};
  if (animation === 'pulse') {
    animationStyle.opacity = pulseAnimation;
  }
  const renderContent = () => {
    if (children) {
      return /*#__PURE__*/_jsx(View, {
        style: {
          opacity: 0
        },
        onLayout: onChildLayout,
        children: children
      });
    }
    return null;
  };
  const renderSkeleton = () => {
    if (animation === 'wave') {
      return /*#__PURE__*/_jsx(View, {
        style: [styles.waveContainer, variantStyles, {
          backgroundColor: skeletonColor
        }],
        children: /*#__PURE__*/_jsx(Animated.View, {
          style: [styles.waveOverlay, {
            backgroundColor: highlightColor,
            transform: [{
              translateX: waveAnimation
            }],
            opacity: 0.4
          }]
        })
      });
    }
    return /*#__PURE__*/_jsx(Animated.View, {
      style: [variantStyles, {
        backgroundColor: skeletonColor
      }, animationStyle]
    });
  };
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, style],
    children: [renderSkeleton(), renderContent()]
  });
};
const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  waveContainer: {
    overflow: 'hidden',
    position: 'relative'
  },
  waveOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
    transform: [{
      skewX: '-20deg'
    }]
  }
});
//# sourceMappingURL=index.js.map