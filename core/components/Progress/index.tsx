import { useTheme } from "@/core/theme";
import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Easing,
  View,
  ViewStyle,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Typography } from "../Typography";
import {
  CircularProgressProps,
  LinearProgressProps,
  NativeProgressProps,
  ProgressProps,
  ProgressSize,
} from "./types";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const getSizeValue = (
  size: ProgressSize,
  type: "dimension" | "stroke" | "font"
) => {
  const sizes = {
    sm: { dimension: 24, stroke: 2, font: 10 },
    md: { dimension: 40, stroke: 3, font: 12 },
    lg: { dimension: 56, stroke: 4, font: 14 },
  };
  return sizes[size][type];
};

const NativeProgress: React.FC<NativeProgressProps> = ({
  size = "md",
  color = "primary",
  animating = true,
  hidesWhenStopped = true,
  style,
  testID,
}) => {
  const { theme } = useTheme();
  const progressColor = theme.colors[color];
  const progressSize = getSizeValue(size, "dimension");

  return (
    <ActivityIndicator
      size={progressSize}
      color={progressColor}
      animating={animating}
      hidesWhenStopped={hidesWhenStopped}
      style={style}
      testID={testID}
    />
  );
};

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = "md",
  color = "primary",
  mode = "indeterminate",
  value = 0,
  strokeWidth,
  showPercentage = false,
  style,
  testID,
}) => {
  const { theme } = useTheme();
  const dimension = getSizeValue(size, "dimension");
  const defaultStrokeWidth = strokeWidth || getSizeValue(size, "stroke");
  const progressColor = theme.colors[color];
  const radius = (dimension - defaultStrokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (mode === "indeterminate") {
      const rotate = Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      rotate.start();
      return () => rotate.stop();
    } else {
      Animated.timing(progressAnim, {
        toValue: value / 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [mode, value, rotateAnim, progressAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  const containerStyle: ViewStyle = {
    width: dimension,
    height: dimension,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <View style={[containerStyle, style]} testID={testID}>
      <Animated.View
        style={[
          containerStyle,
          mode === "indeterminate" && { transform: [{ rotate: rotation }] },
        ]}
      >
        <Svg width={dimension} height={dimension}>
          {/* Background circle */}
          <Circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            stroke={theme.colors.border}
            strokeWidth={defaultStrokeWidth}
          />
          {/* Progress circle */}
          <AnimatedCircle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            stroke={progressColor}
            strokeWidth={defaultStrokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={
              mode === "determinate" ? strokeDashoffset : circumference * 0.75
            }
            transform={`rotate(-90 ${dimension / 2} ${dimension / 2})`}
          />
        </Svg>
      </Animated.View>
      {showPercentage && mode === "determinate" && (
        <View style={{ position: "absolute" }}>
          <Typography
            variant="bodySmall"
            style={{
              fontSize: getSizeValue(size, "font"),
              color: theme.colors.text,
              fontWeight: "600",
            }}
          >
            {Math.round(value)}%
          </Typography>
        </View>
      )}
    </View>
  );
};

const LinearProgress: React.FC<LinearProgressProps> = ({
  size = "md",
  color = "primary",
  mode = "indeterminate",
  value = 0,
  height,
  borderRadius = 4,
  showPercentage = false,
  backgroundColor,
  style,
  testID,
}) => {
  const { theme } = useTheme();
  const progressColor = theme.colors[color];
  const bgColor = backgroundColor || theme.colors.border;
  const defaultHeight = height || getSizeValue(size, "stroke") * 2;

  const progressAnim = useRef(new Animated.Value(0)).current;
  const indeterminateAnim = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    if (mode === "indeterminate") {
      const indeterminate = Animated.loop(
        Animated.sequence([
          Animated.timing(indeterminateAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bezier(0.4, 0.0, 0.6, 1.0),
            useNativeDriver: false,
          }),
          Animated.timing(indeterminateAnim, {
            toValue: -1,
            duration: 1500,
            easing: Easing.bezier(0.4, 0.0, 0.6, 1.0),
            useNativeDriver: false,
          }),
        ])
      );
      indeterminate.start();
      return () => indeterminate.stop();
    } else {
      Animated.timing(progressAnim, {
        toValue: value / 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [mode, value, progressAnim, indeterminateAnim]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const indeterminateLeft = indeterminateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-50%", "100%"],
  });

  const containerStyle: ViewStyle = {
    height: defaultHeight,
    backgroundColor: bgColor,
    borderRadius,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <View testID={testID}>
      <View style={[containerStyle, style]}>
        {mode === "determinate" ? (
          <Animated.View
            style={{
              height: "100%",
              width: progressWidth,
              backgroundColor: progressColor,
              borderRadius,
            }}
          />
        ) : (
          <Animated.View
            style={{
              position: "absolute",
              height: "100%",
              width: "50%",
              backgroundColor: progressColor,
              borderRadius,
              left: indeterminateLeft,
            }}
          />
        )}
      </View>
      {showPercentage && mode === "determinate" && (
        <View style={{ marginTop: 4, alignItems: "flex-end" }}>
          <Typography
            variant="bodySmall"
            style={{
              fontSize: getSizeValue(size, "font"),
              color: theme.colors.textSecondary,
            }}
          >
            {Math.round(value)}%
          </Typography>
        </View>
      )}
    </View>
  );
};

export const Progress: React.FC<ProgressProps> = (props) => {
  const { variant = "native" } = props;

  switch (variant) {
    case "native":
      return <NativeProgress {...(props as NativeProgressProps)} />;
    case "circular":
      return <CircularProgress {...(props as CircularProgressProps)} />;
    case "linear":
      return <LinearProgress {...(props as LinearProgressProps)} />;
    default:
      return <NativeProgress {...(props as NativeProgressProps)} />;
  }
};
