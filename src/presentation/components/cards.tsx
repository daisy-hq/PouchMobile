import {View, Pressable} from 'react-native';
import React from 'react';
import {CustomText, H1, H2, H3, P} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {Lightbulb} from 'lucide-react-native';

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
export const ExpenseCard = () => {
  return (
    <Pressable className="bg-white p-5 rounded-lg w-full" onPress={() => null}>
      <View className="flex flex-row justify-between p-4">
        <View className=" items-center ">
          <CustomText className="text-sm mb-2 text-gray-500">Spent</CustomText>
          <CustomText className="text-3xl font-semibold">GHS 1000</CustomText>
        </View>
        <View className="border border-gray-400"></View>
        <View className=" items-center ">
          <CustomText className="text-sm mb-2 text-gray-500">
            Remaining
          </CustomText>
          <CustomText className="text-3xl font-semibold text-red-500">
            GHS -1000
          </CustomText>
        </View>
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

export const ActivityCard = ({
  id,
  onPress,
}: {
  id?: number;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white p-3 my-2 rounded-lg flex-row justify-between">
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
export const Hint = ({
  children,
  icon,
  width,
}: {
  children: any;
  icon?: React.ReactNode;
  width: any;
}) => {
  return (
    <View
      className={`flex flex-row items-center justify-center gap-1 p-2 my-3 w-${width} border rounded-full bg-yellow-50 border-yellow-500`}>
      {icon && icon}
      <CustomText className="text-xs text-orange-800">{children}</CustomText>
    </View>
  );
};
export const Notes = ({
  children,
  title,
}: {
  children: any;
  title: React.ReactNode;
}) => {
  return (
    <View className="mt-3 w-full">
      <P className="mb-2">{title && title}</P>
      <View className="h-32 w-full p-3 border rounded-lg border-gray-400">
        <P>{children}</P>
      </View>
    </View>
  );
};
