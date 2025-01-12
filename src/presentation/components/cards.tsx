import {View, Pressable} from 'react-native';
import React from 'react';
import {CustomText, H2, P} from '../constants/text';
import {useNavigation} from '@react-navigation/native';

export const GoalCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="bg-white p-5 rounded-lg"
      onPress={() => navigation.navigate('Goal Detail' as never)}>
      <View className="flex-row  items-center ">
        <View className="w-14 h-14 rounded-full bg-blue-200 me-2"></View>
        <H2>Travel & Lifestyle</H2>
      </View>
      <View className="mt-2">
        <CustomText className="text-3xl font-semibold">
          GHS 1000 / GHS 3000
        </CustomText>
      </View>
    </Pressable>
  );
};

export const GoalDetailCard = () => {
  return (
    <Pressable className="bg-white p-5 rounded-lg flex-column justify-center items-center">
      <View className="flex-row w-max  items-center justify-center p-3 border border-slate-200 rounded-md">
        <View className="w-14 h-14 rounded-full bg-blue-200 me-2"></View>
        <View>
          <CustomText className="text-xs">
            40% done. You’re almost there!
          </CustomText>
          <CustomText className="text-xs p-1 mt-2 w-20 border rounded-full bg-yellow-50 text-orange-800 border-yellow-500 ">
            In Progress
          </CustomText>
        </View>
      </View>
      <View className="mt-3 py-2">
        <CustomText className="text-3xl font-semibold">
          GHS 1000 / GHS 3000
        </CustomText>
      </View>
    </Pressable>
  );
};

export const ActivityCard = ({id}:{id?:number}) => {
  return (
    <Pressable className="bg-white p-3 my-2 rounded-lg flex-row justify-between">
      <View className="flex-row">
        <View className="w-14 h-14 rounded-full bg-blue-200 me-2"></View>
        <View>
          <P>Travel & Lifestyle</P>
          <CustomText className="text-xs text-slate-400 mt-2 ">
            23 Apr, 2023
          </CustomText>
        </View>
      </View>
      <View>
        <P className="text-red-600 font-semibold">GHS 3000</P>
        <P className="text-red-600 font-semibold">{id}</P>
      </View>
    </Pressable>
  );
};
