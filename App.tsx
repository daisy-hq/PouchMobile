import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import './global.css';
import {SafeAreaView} from 'react-native-safe-area-context';

// NOTE: I moved the assets into the src/ because it wasn't working in resources/
const App = () => {
  return (
    <View className="flex justify-center h-screen items-center">
      <SafeAreaView>
        <Text className="text-4xl font-lexend mt-12">This is the font</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lexend',
  },
});

export default App;
