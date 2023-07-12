/* eslint-disable import/no-extraneous-dependencies */

// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('../src/assets/images/png/banner-1.png');
jest.mock('../src/assets/images/png/banner-2.png');
jest.mock('../src/assets/images/png/bogor.png');
jest.mock('../src/assets/images/png/home-background.png');
jest.mock('../src/assets/images/png/jakarta.png');
jest.mock('../src/assets/images/png/tangerang.png');
jest.mock(
  '../node_modules/@react-navigation/elements/lib/commonjs/assets/back-icon.png',
);
