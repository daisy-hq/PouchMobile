import React, {useEffect, useRef, useState} from 'react';
import {Bell, ChevronLeft, Gift, Plus} from 'lucide-react-native';
import {
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {CustomText, H1, H2, H3, P} from '../constants/text';
import DropdownMenu from './dropdownMenu';

const HeaderItems = {
  dashboard: {
    name: 'Sandra',
    icon: <Bell size={20} />,
  },
  goaltracker: {name: 'Goal Tracker', icon: <Plus size={20} />},
  addScreen: {name: 'Some thing'},
  default: {name: 'Default', icon: <Plus />},
};

interface ScreenHeaderProps {
  type?: 'Dashboard' | 'Goaltracker' | 'AddScreen' | string | null; // TODO: remove string type
  title?: string | null;
  onEditPress?: () => void;
  updateProfile?: boolean;
  isChanging?: boolean;
}

const ScreenHeader = ({
  type,
  title,
  onEditPress,
  updateProfile = false,
  isChanging = false,
}: ScreenHeaderProps) => {
  const navigation = useNavigation();
  const newHintAnimation = useRef(new Animated.Value(0)).current;

  const [isPressed, setIsPressed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const hintPrompt = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(newHintAnimation, {
          toValue: -10,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(newHintAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    if (!isPressed) {
      hintPrompt();
    }
  }, [isPressed]);

  const handlePress = () => {
    setIsPressed(true);
    newHintAnimation.stopAnimation(() => {
      newHintAnimation.setValue(0);
    });
    setShowHint(!showHint);
  };

  const showNewHint = () => {
    if (showHint) {
      return (
        <View className="p-4 bg-rose-100 rounded-lg absolute top-10 right-14">
          <P className="text-rose-600">Here is all the gist you need!</P>
        </View>
      );
    }
    return null;
  };

  return (
    <View className={`p-4 ${type === 'DetailsScreen' ? 'bg-[#2C7571]' : ''}`}>
      <SafeAreaView>
        {type === 'Dashboard' ? (
          <View className="w-full h-12 flex flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              {/* Image */}
              <Pressable
                onPress={() => navigation.navigate('Profile' as never)}>
                <Image
                  source={require('../../assets/images/avatar.png')}
                  style={styles.userIcon}
                />
              </Pressable>
              <View>
                <P className="text-xs">Welcome back</P>
                <H3 className="text-xl">{HeaderItems.dashboard.name}</H3>
              </View>
            </View>

            <View className="flex-row gap-2">
              <Pressable onPress={handlePress} className="relative ">
                <Animated.View
                  className="bg-white p-3 rounded-lg "
                  style={{transform: [{translateY: newHintAnimation}]}}>
                  <Gift size={20} />
                  <View className="w-2 h-2 rounded-full bg-red-500 items-center justify-center absolute top-2 right-3" />
                </Animated.View>
              </Pressable>
              {showNewHint()}
              <Pressable
                onPress={() =>
                  navigation.navigate('ViewNotifications' as never)
                }
                className="relative ">
                <View className="bg-white p-3 rounded-lg ">
                  {HeaderItems.dashboard.icon}
                </View>
                <View className="w-4 h-4 rounded-md bg-red-500 items-center justify-center absolute top-1 right-2">
                  <CustomText className="text-xs text-white ">2</CustomText>
                </View>
              </Pressable>
            </View>
          </View>
        ) : type === 'Goaltracker' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-between">
            <H1 className="text-xl">{HeaderItems.goaltracker.name}</H1>
            <TouchableOpacity
              className="bg-white p-2 rounded-lg"
              onPress={() => navigation.navigate('AddGoal' as never)}>
              {HeaderItems.goaltracker.icon}
            </TouchableOpacity>
          </View>
        ) : type === 'AddScreen' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-around">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft />
            </TouchableOpacity>
            <View className="flex-1 items-center mr-8">
              <H1 className="text-xl">
                {title ? title : HeaderItems.addScreen.name}
              </H1>
            </View>
          </View>
        ) : type === 'DetailsScreen' ? (
          <View className="w-full h-12 z-50 flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="p-2 border border-white rounded-xl">
              <ChevronLeft color={'white'} />
            </TouchableOpacity>
            <View>
              <H1 className="text-xl text-white">
                {title ? title : HeaderItems.default.name}
              </H1>
            </View>
            <DropdownMenu
              content={[
                <Pressable onPress={onEditPress}>
                  <H2>Edit</H2>
                </Pressable>,
              ]}
            />
          </View>
        ) : type === 'none' ? (
          <></>
        ) : (
          <View className="w-full h-12 z-50 flex flex-row items-center justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft />
            </TouchableOpacity>
            <View>
              <H1 className="text-xl">
                {title ? title : HeaderItems.default.name}
              </H1>
            </View>
            {updateProfile ? (
              isChanging && <H3 className="text-blue-700">Save </H3>
            ) : (
              <DropdownMenu
                content={[
                  <Pressable onPress={onEditPress}>
                    <H2>Edit</H2>
                  </Pressable>,
                ]}
              />
            )}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  userIcon: {
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
  },
});
