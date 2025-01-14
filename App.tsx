import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import AppLayout from './src/presentation/constants/appLayout';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// NOTE: I moved the assets into the src/ because it wasn't working in resources/
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppLayout />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
