import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../theme';
import { RatingProps, RatingSize } from './types';

const getSizeFromVariant = (size: RatingSize): number => {
  switch (size) {
    case 'small':
      return 18;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    default:
      return 24;
  }
};

const getIconColor = (
  filled: boolean,
  disabled: boolean,
  colors: any
): string => {
  if (disabled) return colors.disabled;
  return filled ? colors.warning : colors.border;
};

interface StarProps {
  filled: boolean;
  halfFilled?: boolean;
  size: number;
  disabled: boolean;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  onPress?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  readOnly?: boolean;
}

const Star = ({
  filled,
  halfFilled = false,
  size,
  disabled,
  icon,
  emptyIcon,
  onPress,
  onHoverIn,
  onHoverOut,
  readOnly,
}: StarProps) => {
  const { theme } = useTheme();
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    if (readOnly || disabled) return;
    onHoverIn?.();
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (readOnly || disabled) return;
    onHoverOut?.();
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const renderIcon = () => {
    if (filled || halfFilled) {
      if (icon) {
        return React.cloneElement(
          icon as React.ReactElement,
          {
            size,
            color: getIconColor(true, disabled, theme.colors),
          } as any
        );
      }
      return (
        <Ionicons
          name="star"
          size={size}
          color={getIconColor(true, disabled, theme.colors)}
        />
      );
    } else {
      if (emptyIcon) {
        return React.cloneElement(
          emptyIcon as React.ReactElement,
          {
            size,
            color: getIconColor(false, disabled, theme.colors),
          } as any
        );
      }
      return (
        <Ionicons
          name="star-outline"
          size={size}
          color={getIconColor(false, disabled, theme.colors)}
        />
      );
    }
  };

  if (readOnly) {
    return (
      <View style={styles.starContainer}>
        {halfFilled ? (
          <View style={styles.halfStarContainer}>
            <View style={[styles.halfStarMask, { width: size / 2 }]}>
              <Ionicons
                name="star"
                size={size}
                color={getIconColor(true, disabled, theme.colors)}
              />
            </View>
            <View style={[styles.halfStarBackground, { left: size / 2 }]}>
              <Ionicons
                name="star-outline"
                size={size}
                color={getIconColor(false, disabled, theme.colors)}
              />
            </View>
          </View>
        ) : (
          renderIcon()
        )}
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || readOnly}
      activeOpacity={0.7}
    >
      <Animated.View
        style={[
          styles.starContainer,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        {halfFilled ? (
          <View style={styles.halfStarContainer}>
            <View style={[styles.halfStarMask, { width: size / 2 }]}>
              <Ionicons
                name="star"
                size={size}
                color={getIconColor(true, disabled, theme.colors)}
              />
            </View>
            <View style={[styles.halfStarBackground, { left: size / 2 }]}>
              <Ionicons
                name="star-outline"
                size={size}
                color={getIconColor(false, disabled, theme.colors)}
              />
            </View>
          </View>
        ) : (
          renderIcon()
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export const Rating: React.FC<RatingProps> = ({
  name,
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  size = 'medium',
  readOnly = false,
  disabled = false,
  onChange,
  getLabelText,
  icon,
  emptyIcon,
  highlightSelectedOnly = false,
  style,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const iconSize = getSizeFromVariant(size);

  useEffect(() => {
    if (!isControlled && defaultValue !== undefined) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const getStarValue = (index: number): number => {
    return index + 1;
  };

  const handleStarPress = (starIndex: number) => {
    if (readOnly || disabled) return;

    const newValue = getStarValue(starIndex);

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(null, newValue);
  };

  const isStarFilled = (starIndex: number): boolean => {
    const starValue = getStarValue(starIndex);
    const valueToCheck = currentValue || 0;

    if (highlightSelectedOnly) {
      return Math.ceil(valueToCheck) === starValue;
    }

    return starValue <= valueToCheck;
  };

  const renderStars = () => {
    const stars: React.ReactElement[] = [];
    const totalStars = max;

    for (let i = 0; i < totalStars; i++) {
      const filled = isStarFilled(i);

      stars.push(
        <Star
          key={i}
          filled={filled}
          halfFilled={false}
          size={iconSize}
          disabled={disabled}
          icon={icon}
          emptyIcon={emptyIcon}
          onPress={() => handleStarPress(i)}
          onHoverIn={() => {}}
          onHoverOut={() => {}}
          readOnly={readOnly}
        />
      );
    }

    return stars;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.starsContainer}>{renderStars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    marginHorizontal: 1,
  },
  halfStarContainer: {
    position: 'relative',
  },
  halfStarMask: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 2,
  },
  halfStarBackground: {
    position: 'absolute',
    zIndex: 1,
  },
});

// Export types
export type { RatingProps, RatingSize } from './types';
