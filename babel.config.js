// module.exports = {
//   presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
// };

module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  // presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
