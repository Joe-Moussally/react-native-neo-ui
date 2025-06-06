import React, { useEffect } from "react";
import { Text, TextProps, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { TickerListProps, TickerProps } from "./types";

const numbers = [...Array(10).keys()]; // 0-9

const Tick = ({ children, ...rest }: TextProps) => {
  return <Text {...rest}>{children}</Text>;
};

const TickerList = ({
  digit,
  fontSize,
  position,
}: TickerListProps & { position: number }) => {
  // Use shared value for animation
  const translateY = useSharedValue(
    -fontSize * 1.1 * parseInt(digit.toString())
  );

  // Update animation when digit changes
  useEffect(() => {
    translateY.value = withSpring(
      -fontSize * 1.1 * parseInt(digit.toString()),
      {
        damping: 12,
        stiffness: 200,
      }
    );
  }, [digit, fontSize, translateY]);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View
      style={{
        height: fontSize,
        overflow: "hidden", // Enable this to hide other numbers
      }}
    >
      <Animated.View style={animatedStyle}>
        {numbers.map((number) => (
          <Tick
            key={number}
            style={{
              fontSize,
              lineHeight: fontSize * 1.1,
              fontVariant: ["tabular-nums"],
            }}
          >
            {number}
          </Tick>
        ))}
      </Animated.View>
    </View>
  );
};

export const Ticker = ({
  value,
  fontSize = 50,
  minDigits = 1,
}: TickerProps) => {
  const valueString = value.toString();
  const digitCount = Math.max(valueString.length, minDigits);

  // Pad with leading zeros to maintain consistent positions
  const paddedValue = valueString.padStart(digitCount, "0");
  const digits = paddedValue.split("");

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {digits.map((digit, index) => {
          // Calculate position from right (units, tens, hundreds, etc.)
          const positionFromRight = digits.length - 1 - index;
          return (
            <TickerList
              key={`pos-${positionFromRight}`} // Stable key based on position from right
              digit={parseInt(digit)}
              fontSize={fontSize}
              position={positionFromRight}
            />
          );
        })}
      </View>
    </View>
  );
};
