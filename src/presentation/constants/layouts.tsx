import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const BaseLayout = ({children}: any) => {
  return <View className="flex-1 p-4">{children}</View>;
};

export const AuthLayout = ({children}: any) => {
  return (
    <SafeAreaView className="flex-1 px-6 flex justify-center">
      {children}
    </SafeAreaView>
  );
};
