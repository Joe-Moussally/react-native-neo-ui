"use strict";

import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const getSizeFromVariant = size => {
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
const getIconColor = (filled, disabled, colors) => {
  if (disabled) return colors.disabled;
  return filled ? colors.warning : colors.border;
};
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
  readOnly
}) => {
  const {
    theme
  } = useTheme();
  const scaleValue = new Animated.Value(1);
  const handlePressIn = () => {
    if (readOnly || disabled) return;
    onHoverIn?.();
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true
    }).start();
  };
  const handlePressOut = () => {
    if (readOnly || disabled) return;
    onHoverOut?.();
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };
  const renderIcon = () => {
    if (filled || halfFilled) {
      if (icon) {
        return /*#__PURE__*/React.cloneElement(icon, {
          size,
          color: getIconColor(true, disabled, theme.colors)
        });
      }
      return /*#__PURE__*/_jsx(Ionicons, {
        name: "star",
        size: size,
        color: getIconColor(true, disabled, theme.colors)
      });
    } else {
      if (emptyIcon) {
        return /*#__PURE__*/React.cloneElement(emptyIcon, {
          size,
          color: getIconColor(false, disabled, theme.colors)
        });
      }
      return /*#__PURE__*/_jsx(Ionicons, {
        name: "star-outline",
        size: size,
        color: getIconColor(false, disabled, theme.colors)
      });
    }
  };
  if (readOnly) {
    return /*#__PURE__*/_jsx(View, {
      style: styles.starContainer,
      children: halfFilled ? /*#__PURE__*/_jsxs(View, {
        style: styles.halfStarContainer,
        children: [/*#__PURE__*/_jsx(View, {
          style: [styles.halfStarMask, {
            width: size / 2
          }],
          children: /*#__PURE__*/_jsx(Ionicons, {
            name: "star",
            size: size,
            color: getIconColor(true, disabled, theme.colors)
          })
        }), /*#__PURE__*/_jsx(View, {
          style: [styles.halfStarBackground, {
            left: size / 2
          }],
          children: /*#__PURE__*/_jsx(Ionicons, {
            name: "star-outline",
            size: size,
            color: getIconColor(false, disabled, theme.colors)
          })
        })]
      }) : renderIcon()
    });
  }
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    disabled: disabled || readOnly,
    activeOpacity: 0.7,
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: [styles.starContainer, {
        transform: [{
          scale: scaleValue
        }]
      }],
      children: halfFilled ? /*#__PURE__*/_jsxs(View, {
        style: styles.halfStarContainer,
        children: [/*#__PURE__*/_jsx(View, {
          style: [styles.halfStarMask, {
            width: size / 2
          }],
          children: /*#__PURE__*/_jsx(Ionicons, {
            name: "star",
            size: size,
            color: getIconColor(true, disabled, theme.colors)
          })
        }), /*#__PURE__*/_jsx(View, {
          style: [styles.halfStarBackground, {
            left: size / 2
          }],
          children: /*#__PURE__*/_jsx(Ionicons, {
            name: "star-outline",
            size: size,
            color: getIconColor(false, disabled, theme.colors)
          })
        })]
      }) : renderIcon()
    })
  });
};
export const Rating = ({
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
  style
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
  const getStarValue = index => {
    return index + 1;
  };
  const handleStarPress = starIndex => {
    if (readOnly || disabled) return;
    const newValue = getStarValue(starIndex);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(null, newValue);
  };
  const isStarFilled = starIndex => {
    const starValue = getStarValue(starIndex);
    const valueToCheck = currentValue || 0;
    if (highlightSelectedOnly) {
      return Math.ceil(valueToCheck) === starValue;
    }
    return starValue <= valueToCheck;
  };
  const renderStars = () => {
    const stars = [];
    const totalStars = max;
    for (let i = 0; i < totalStars; i++) {
      const filled = isStarFilled(i);
      stars.push(/*#__PURE__*/_jsx(Star, {
        filled: filled,
        halfFilled: false,
        size: iconSize,
        disabled: disabled,
        icon: icon,
        emptyIcon: emptyIcon,
        onPress: () => handleStarPress(i),
        onHoverIn: () => {},
        onHoverOut: () => {},
        readOnly: readOnly
      }, i));
    }
    return stars;
  };
  return /*#__PURE__*/_jsx(View, {
    style: [styles.container, style],
    children: /*#__PURE__*/_jsx(View, {
      style: styles.starsContainer,
      children: renderStars()
    })
  });
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starContainer: {
    marginHorizontal: 1
  },
  halfStarContainer: {
    position: 'relative'
  },
  halfStarMask: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 2
  },
  halfStarBackground: {
    position: 'absolute',
    zIndex: 1
  }
});

// Export types
//# sourceMappingURL=index.js.map