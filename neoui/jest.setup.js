/* eslint-env jest */
/* eslint-disable no-undef */
// Jest setup file for @joe111/neo-ui
import 'react-native-gesture-handler/jestSetup';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock expo vector icons
jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');

  return {
    Ionicons: View,
    MaterialIcons: View,
    FontAwesome: View,
    Entypo: View,
    AntDesign: View,
  };
});
