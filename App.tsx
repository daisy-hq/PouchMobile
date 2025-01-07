import React from 'react';
import {View, Text} from 'react-native';
import './global.css';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLayout from './src/presentation/constants/appLayout';

// NOTE: I moved the assets into the src/ because it wasn't working in resources/
const App = () => {
  return (
    <NavigationContainer>
      <AppLayout/>
    </NavigationContainer>
  
  );
};

export default App;
