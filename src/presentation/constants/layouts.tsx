import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {H1} from './text';

export const BaseLayout = ({children}: any) => {
  return <View className="flex-1 px-4">{children}</View>;
};

export const AuthLayout = ({children}: any) => {
  return (
    <SafeAreaView className="flex-1 px-6 flex justify-center">
      {children}
    </SafeAreaView>
  );
};

export const DetailsLayout = ({
  children,
  detailsTitle,
  detailsOverviewCard,
}: {
  children: any;
  detailsTitle: any;
  detailsOverviewCard: any;
}) => {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#2C7571] h-1/3 flex items-center">
        <H1 className="text-white text-wrap w-[70%] absolute top-16 text-center">
          {detailsTitle}
        </H1>
      </View>
      <View>
        <View className="w-[90%] p-4 mx-auto bg-white border border-gray-200 rounded-xl -translate-y-6">
          {detailsOverviewCard}
        </View>
      </View>

      <View className="px-4">{children}</View>
    </View>
  );
};
