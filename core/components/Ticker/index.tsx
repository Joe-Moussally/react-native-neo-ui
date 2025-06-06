import React from "react";
import { Text, TextProps, View } from "react-native";
import { TickerListProps, TickerProps } from "./types";

const numbers = [...Array(10).keys()]; // 0-9

const Tick = ({ children, ...rest }: TextProps) => {
  return <Text {...rest}>{children}</Text>;
};

const TickerList = ({ digit, fontSize }: TickerListProps) => {
  return (
    <View
      style={{
        height: fontSize,
        backgroundColor: "red",
        // overflow: "hidden",
      }}
    >
      <View
        style={{
          transform: [{ translateY: -fontSize * 1.1 * digit }],
        }}
      >
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
      </View>
    </View>
  );
};

export const Ticker = ({ value, fontSize = 50 }: TickerProps) => {
  const splitValue = value.toString().split("");

  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {splitValue.map((digit, index) => (
          <TickerList key={index} digit={parseInt(digit)} fontSize={fontSize} />
        ))}
      </View>
    </View>
  );
};
