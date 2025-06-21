"use strict";

import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';
import { jsx as _jsx } from "react/jsx-runtime";
const numbers = [...Array(10).keys()]; // 0-9

const Tick = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/_jsx(Text, {
    ...rest,
    children: children
  });
};
const TickerList = ({
  digit,
  fontSize,
  index
}) => {
  // Use shared value for animation
  const translateY = useSharedValue(-fontSize * 1.1 * parseInt(digit.toString()));

  // Update animation when digit changes
  useEffect(() => {
    translateY.value = withDelay(index * 110, withSpring(-fontSize * 1.1 * parseInt(digit.toString()), {
      damping: 70,
      stiffness: 200
    }));
  }, [digit, fontSize, index, translateY]);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: translateY.value
      }]
    };
  });
  return /*#__PURE__*/_jsx(View, {
    style: {
      height: fontSize,
      overflow: 'hidden' // Enable this to hide other numbers
    },
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: animatedStyle,
      children: numbers.map(number => /*#__PURE__*/_jsx(Tick, {
        style: {
          fontSize,
          lineHeight: fontSize * 1.1,
          fontVariant: ['tabular-nums']
        },
        children: number
      }, number))
    })
  });
};
export const Ticker = ({
  value,
  fontSize = 150,
  minDigits = 1
}) => {
  const valueString = value.toString();
  const digitCount = Math.max(valueString.length, minDigits);
  //   const [newFontSize, setNewFontSize] = useState(fontSize);

  // Pad with leading zeros to maintain consistent positions
  const paddedValue = valueString.padStart(digitCount, '0');
  const digits = paddedValue.split('');
  return /*#__PURE__*/_jsx(View, {
    children: /*#__PURE__*/_jsx(View, {
      style: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      children: digits.map((digit, index) => {
        return /*#__PURE__*/_jsx(TickerList, {
          // Stable key based on position from right
          digit: parseInt(digit),
          fontSize: fontSize,
          index: index
        }, `pos-${index}`);
      })
    })
  });
};
//# sourceMappingURL=index.js.map