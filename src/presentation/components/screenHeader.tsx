import React from 'react';
import {Bell, ChevronLeft, Plus} from 'lucide-react-native';
import {
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
}

const ScreenHeader = ({type, title, onEditPress}: ScreenHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className="p-4">
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

            <Pressable
              onPress={() => navigation.navigate('ViewNotifications' as never)}
              className="relative ">
              <View className="bg-white p-3 rounded-lg ">
                {HeaderItems.dashboard.icon}
              </View>
              <View className="w-4 h-4 rounded-md bg-red-500 items-center justify-center absolute top-1 right-2">
                <CustomText className="text-xs text-white ">2</CustomText>
              </View>
            </Pressable>
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
            <DropdownMenu
              content={[
                <Pressable onPress={onEditPress}>
                  <H2>Edit</H2>
                </Pressable>,
              ]}
            />
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
