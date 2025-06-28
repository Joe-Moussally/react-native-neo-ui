"use strict";

import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { ThemedView } from './ThemedView';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HEADER_HEIGHT = 250;
export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor
}) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75])
      }, {
        scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1])
      }]
    };
  });
  return /*#__PURE__*/_jsx(ThemedView, {
    style: styles.container,
    children: /*#__PURE__*/_jsxs(Animated.ScrollView, {
      ref: scrollRef,
      scrollEventThrottle: 16,
      contentContainerStyle: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/_jsx(Animated.View, {
        style: [styles.header, {
          backgroundColor: headerBackgroundColor[colorScheme]
        }, headerAnimatedStyle],
        children: headerImage
      }), /*#__PURE__*/_jsx(ThemedView, {
        style: styles.content,
        children: children
      })]
    })
  });
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=ParallaxScrollView.js.map