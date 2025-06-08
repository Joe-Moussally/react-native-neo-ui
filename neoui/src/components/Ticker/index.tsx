import React, { useEffect } from 'react';
import { Text, TextProps, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { TickerListProps, TickerProps } from './types';

const numbers = [...Array(10).keys()]; // 0-9

const Tick = ({ children, ...rest }: TextProps) => {
  return <Text {...rest}>{children}</Text>;
};

const TickerList = ({
  digit,
  fontSize,
  index,
}: TickerListProps & { index: number }) => {
  // Use shared value for animation
  const translateY = useSharedValue(
    -fontSize * 1.1 * parseInt(digit.toString())
  );

  // Update animation when digit changes
  useEffect(() => {
    translateY.value = withDelay(
      index * 110,
      withSpring(-fontSize * 1.1 * parseInt(digit.toString()), {
        damping: 70,
        stiffness: 200,
      })
    );
  }, [digit, fontSize, index, translateY]);

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
        overflow: 'hidden', // Enable this to hide other numbers
      }}
    >
      <Animated.View style={animatedStyle}>
        {numbers.map((number) => (
          <Tick
            key={number}
            style={{
              fontSize,
              lineHeight: fontSize * 1.1,
              fontVariant: ['tabular-nums'],
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
  fontSize = 150,
  minDigits = 1,
}: TickerProps) => {
  const valueString = value.toString();
  const digitCount = Math.max(valueString.length, minDigits);
  //   const [newFontSize, setNewFontSize] = useState(fontSize);

  // Pad with leading zeros to maintain consistent positions
  const paddedValue = valueString.padStart(digitCount, '0');
  const digits = paddedValue.split('');

  return (
    <View>
      {/* <Tick
        style={{ fontSize }}
        numberOfLines={1}
        adjustsFontSizeToFit
        onTextLayout={(e) => {
          setNewFontSize(e.nativeEvent.lines[0].ascender);
        }}
      >
        {value}
      </Tick> */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {digits.map((digit, index) => {
          return (
            <TickerList
              key={`pos-${index}`} // Stable key based on position from right
              digit={parseInt(digit)}
              fontSize={fontSize}
              index={index}
            />
          );
        })}
      </View>
    </View>
  );
};
