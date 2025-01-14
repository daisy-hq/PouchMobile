import {View, Pressable} from 'react-native';
import React from 'react';
import {CustomText, H1, H2, H3, P} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {
  CircleArrowLeft,
  CircleArrowRight,
  ShoppingBag,
} from 'lucide-react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {PieChart} from 'react-native-gifted-charts';

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
      <View className="h-32 w-full p-3 border rounded-lg border-gray-300">
        <P>{children}</P>
      </View>
    </View>
  );
};
export const OverviewCards = ({
  dataLength,
  i,
  prevIndex,
  currentIndex,
  animatedValue,
  maxVisibleItems,
  color,
  data,
  type,
}: {
  dataLength: number;
  i: number;
  prevIndex: any;
  currentIndex: any;
  animatedValue: any;
  maxVisibleItems: any;
  color: any;
  data?: any;
  type?: any;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [i + 1, i, i - 1],
      [-30, 1, 30],
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [i - 1, i, i + 1],
      [-200, 1, 200],
    );
    const scale = interpolate(
      animatedValue.value,
      [i - 1, i, i + 1],
      [0.9, 1, 1.1],
    );
    const opacity = interpolate(
      animatedValue.value,
      [i - 1, i, i + 1],
      [1, 1, 0],
    );
    return {
      transform: [
        {
          translateY: i === prevIndex.value ? translateY2 : translateY,
        },
        {scale},
      ],
      opacity:
        i < currentIndex.value + maxVisibleItems - 1
          ? opacity
          : i === currentIndex.value + maxVisibleItems - 1
          ? withTiming(1)
          : withTiming(0),
    };
  });

  return (
    <FlingGestureHandler
      key={'up'}
      direction={Directions.UP}
      onHandlerStateChange={e => {
        if (e.nativeEvent.state === State.END) {
          if (currentIndex.value !== 0) {
            animatedValue.value = withTiming((currentIndex.value -= 1));
            prevIndex.value = currentIndex.value - 1;
          }
        }
      }}>
      <FlingGestureHandler
        key={'down'}
        direction={Directions.DOWN}
        onHandlerStateChange={e => {
          if (e.nativeEvent.state === State.END) {
            if (currentIndex.value !== dataLength - 1) {
              animatedValue.value = withTiming((currentIndex.value += 1));
              prevIndex.value = currentIndex.value;
            }
          }
        }}>
        <Animated.View
          style={[{zIndex: dataLength - i}, animatedStyle]}
          className={`absolute h-64 w-full border border-gray-300 rounded-3xl ${color} p-4 justify-between`}>
          {type === 'chart' ? (
            <View className='flex items-center justify-center'>
              <PieChart
                data={data}
                donut
                showText
                textColor="black"
                radius={80}
                textSize={20}
                textBackgroundRadius={26}
              />
            </View>
          ) : (
            <>
              <View className="flex flex-row items-center justify-center gap-3">
                <CircleArrowLeft size={14} color="white" />
                <H3 className="text-white">February, 2025</H3>
                <CircleArrowRight size={14} color="white" />
              </View>
              <View className="flex justify-center items-center">
                <CustomText className="w-4/5 text-white text-3xl text-center ">
                  GHS 1,600 <H1>left out of GHS 2,000 budgeted for bills</H1>
                </CustomText>
              </View>
            </>
          )}
          <View className="flex flex-row-reverse">
            <View className="flex items-center justify-center w-12 h-9 backdrop-blur-sm bg-white/30 rounded">
              <ShoppingBag size={16} color="white" />
            </View>
          </View>
        </Animated.View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};
export const ExpenseCategoryOverview = ({
  onPress,
  color,
}: {
  onPress: () => void;
  color: any;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="h-32 mt-2 w-52 rounded-lg bg-gray-200 p-4 justify-between">
      <View className="flex flex-row justify-between gap-3">
        <View>
          <H3>GHS 500.00</H3>
          <CustomText className="text-xs">Food</CustomText>
        </View>
        <View>
          <H3>34%</H3>
        </View>
      </View>
      <View
        className={`flex items-center justify-center w-9 h-9 ${color} rounded-full`}>
        <ShoppingBag size={16} color="white" />
      </View>
    </Pressable>
  );
};
