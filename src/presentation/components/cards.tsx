import {View, Pressable} from 'react-native';
import React from 'react';
import {CustomText, H1, H2, H3, P} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {
  Bell,
  CarFront,
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
import {LinearGradient} from 'react-native-linear-gradient';

export const GoalCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="bg-white p-5 rounded-lg"
      onPress={() => navigation.navigate('Goal Detail' as never)}>
      <View className="flex-row  items-center ">
        <View className="w-14 h-14 p-2 rounded-full bg-blue-200 me-2 justify-center items-center border border-8 border-blue-100 ">
          <CarFront color={'#1570EF'} />
        </View>
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
    <Pressable className="bg-white p-4 rounded-lg w-full" onPress={() => null}>
      <View className="flex flex-row justify-between p-4 gap-4">
        <View className="items-center grow">
          <CustomText className="text-sm mb-2 text-gray-500">Amount</CustomText>
          <CustomText className="text-3xl font-semibold">GHS 1000</CustomText>
        </View>
        <View className="border border-gray-400" />
        <View className="items-center grow">
          <CustomText className="text-sm mb-2 text-gray-500">
            Date added
          </CustomText>
          <CustomText className="text-3xl font-semibold">
            Jan 15, 2025
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export const GoalDetailCard = () => {
  const progress = 40;
  const progressDegree = (progress / 100) * 360;
  return (
    <Pressable className="bg-white z-0 p-5 rounded-lg flex-column justify-center items-center">
      <View className="flex-row w-max  items-center justify-center p-3 border border-slate-200 rounded-md">
        <View className="relative w-14 h-14 me-2 rounded-full bg-white border border-4 border-gray-300 justify-center items-center">
          <View
            className="absolute w-14 h-14 rounded-full border-4 justify-center items-center"
            style={{
              borderColor: 'transparent',
              borderTopColor: '#f43f5e',
              borderRightColor:
                progressDegree > 180 ? '#f43f5e' : 'transparent',
            }}
          />
          <CustomText className="text-[4px]">Keep going!</CustomText>
          <CustomText className="text-xs">40%</CustomText>
        </View>

        <View>
          <CustomText className="text-xs">
            40% done. You’re almost there!
          </CustomText>
          <Hint
            color="yellow"
            width={20}
            // className="text-xs p-1 mt-2 w-20 border rounded-full bg-yellow-50 text-orange-800 border-yellow-500"
          >
            In Progress
          </Hint>
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

export const ActivityCard = ({onPress}: {onPress: () => void}) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white p-3 my-2 rounded-lg flex-row justify-between">
      <View className="flex-row">
        <View className="w-14 h-14 p-2 rounded-full bg-blue-500 me-2 justify-center items-center ">
          <CarFront color={'white'} />
        </View>
        <View>
          <P>Travel & Lifestyle</P>
          <CustomText className="text-xs text-slate-400 mt-2 ">
            23 Apr, 2023
          </CustomText>
        </View>
      </View>
      <View>
        <P className="text-red-600 font-semibold">GHS 3000</P>
      </View>
    </Pressable>
  );
};
export const Hint = ({
  children,
  icon,
  width,
  color,
}: {
  children: any;
  icon?: React.ReactNode;
  width: any;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'violet';
}) => {
  const colorVariants = {
    red: 'bg-red-50 border-red-500 text-red-800',
    yellow: 'bg-yellow-50 border-yellow-500 text-yellow-800',
    green: 'bg-green-50 border-green-500 text-green-800',
    blue: 'bg-blue-50 border-blue-500 text-blue-800',
    violet: 'bg-violet-50 border-violet-500 text-violet-800',
  };

  return (
    <View
      className={`flex flex-row items-center justify-center gap-1 p-2 w-${width} border rounded-full ${colorVariants[color]} `}>
      {icon && icon}
      <CustomText className={`text-xs ${colorVariants[color]} `}>
        {children}
      </CustomText>
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
      <View className="h-32 w-full p-3 rounded-lg border border-gray-200 bg-gray-200">
        <P className="text-gray-600">{children}</P>
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
          className={`absolute h-64 w-full border border-gray-300 rounded-3xl overflow-hidden justify-between`}>
          <LinearGradient
            colors={color}
            start={{x: -0.7, y: 0}}
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
            {type === 'chart' ? (
              <View className="flex items-center justify-center p-4">
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
                <View className="flex flex-row items-center justify-center gap-3 p-4">
                  <CircleArrowLeft size={14} color="white" />
                  <H3 className="text-white">February, 2025</H3>
                  <CircleArrowRight size={14} color="white" />
                </View>
                <View className="flex grow -mt-12 justify-center items-center">
                  <CustomText className="text-white text-3xl text-center ">
                    GHS 1,600 <H1>left out of GHS 2,000 budgeted for bills</H1>
                  </CustomText>
                </View>
              </>
            )}
            <View className="absolute bottom-4 right-4">
              <View className="flex items-center justify-center w-12 h-9 backdrop-blur-sm bg-white/30 rounded">
                <ShoppingBag size={16} color="white" />
              </View>
            </View>
          </LinearGradient>
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

export const NotificationsCard = ({markedAsRead}: {markedAsRead: boolean}) => {
  return (
    <View
      className={`w-full flex-row my-1 p-4 ${
        markedAsRead ? '' : 'bg-gray-200'
      }`}>
      <View className="w-14 h-14 rounded-full bg-orange-100 items-center justify-center">
        <Bell size={18} />
      </View>
      <View className="ms-2 w-5/6">
        <H3>Budget Alert</H3>
        <P className="text-gray-500 text-pretty">
          You’ve spent 80% of your Groceries Budget. Is this really how you to
          continue spending?
        </P>
        <View className=" flex-row justify-end">
          <CustomText className="text-xs text-gray-500 mt-1">
            Jan 15, 2025 at 10:00am
          </CustomText>
        </View>
      </View>
    </View>
  );
};
