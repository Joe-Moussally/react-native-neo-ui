import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { RatingProps, RatingSize } from "./types";

const getSizeFromVariant = (size: RatingSize): number => {
  switch (size) {
    case "small":
      return 18;
    case "medium":
      return 24;
    case "large":
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
  const [isPressed, setIsPressed] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    if (readOnly || disabled) return;
    setIsPressed(true);
    onHoverIn?.();
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (readOnly || disabled) return;
    setIsPressed(false);
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
  precision = 1,
  size = "medium",
  readOnly = false,
  disabled = false,
  onChange,
  onChangeActive,
  getLabelText,
  icon,
  emptyIcon,
  highlightSelectedOnly = false,
  style,
}) => {
  const { theme } = useTheme();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(-1);

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

    let newValue = getStarValue(starIndex);

    // Handle precision for partial ratings
    if (precision < 1) {
      // For half-star ratings, toggle between full and half
      const currentStarValue = currentValue || 0;
      const fullStarValue = starIndex + 1;
      const halfStarValue = starIndex + 0.5;

      if (currentStarValue === fullStarValue) {
        newValue = halfStarValue;
      } else if (currentStarValue === halfStarValue) {
        newValue = 0; // Reset if clicking same half star
      } else {
        newValue = fullStarValue;
      }
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(null, newValue);
  };

  const handleStarHover = (starIndex: number) => {
    if (readOnly || disabled) return;

    const newHover = getStarValue(starIndex);
    setHoverValue(newHover);
    onChangeActive?.(null, newHover);
  };

  const handleStarHoverOut = () => {
    if (readOnly || disabled) return;

    setHoverValue(-1);
    onChangeActive?.(null, -1);
  };

  const isStarFilled = (starIndex: number): boolean => {
    const starValue = getStarValue(starIndex);
    const valueToCheck = hoverValue !== -1 ? hoverValue : currentValue || 0;

    if (highlightSelectedOnly) {
      return Math.ceil(valueToCheck) === starValue;
    }

    return starValue <= valueToCheck;
  };

  const isStarHalfFilled = (starIndex: number): boolean => {
    if (precision < 1) {
      const starValue = starIndex + 1;
      const valueToCheck = hoverValue !== -1 ? hoverValue : currentValue || 0;
      return valueToCheck >= starValue - 0.5 && valueToCheck < starValue;
    }
    return false;
  };

  const renderStars = () => {
    const stars = [];
    const totalStars = max;

    for (let i = 0; i < totalStars; i++) {
      const filled = isStarFilled(i);
      const halfFilled = isStarHalfFilled(i);

      stars.push(
        <Star
          key={i}
          filled={filled}
          halfFilled={halfFilled}
          size={iconSize}
          disabled={disabled}
          icon={icon}
          emptyIcon={emptyIcon}
          onPress={() => handleStarPress(i)}
          onHoverIn={() => handleStarHover(i)}
          onHoverOut={handleStarHoverOut}
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
    flexDirection: "row",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starContainer: {
    marginHorizontal: 1,
  },
  halfStarContainer: {
    position: "relative",
  },
  halfStarMask: {
    overflow: "hidden",
    position: "absolute",
    zIndex: 2,
  },
  halfStarBackground: {
    position: "absolute",
    zIndex: 1,
  },
});
