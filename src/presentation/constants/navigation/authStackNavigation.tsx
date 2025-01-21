import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@src/presentation/screens/auth/login';
import RegisterScreen from '@src/presentation/screens/auth/register';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = ({
  onLoginSuccess,
}: {
  onLoginSuccess: () => void;
}) => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    /> */}
    <Stack.Screen name="Login" options={{headerShown: false}}>
      {props => <LoginScreen {...props} onLoginSuccess={onLoginSuccess} />}
    </Stack.Screen>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStackNavigation;
