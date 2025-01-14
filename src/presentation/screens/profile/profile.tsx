import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {BaseLayout} from '../../constants/layouts';
import {H1, P} from '../../constants/text';
import {Bell, CircleHelp, DollarSign, Edit, LogOut} from 'lucide-react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const ProfileScreen = () => {
  return (
    <BaseLayout>
      <View className="">
        <View className="flex items-center justify-center">
          <View className="h-[80px] w-[80px] rounded-full bg-blue-200 relative mx-auto flex items-center justify-center">
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.userIcon}
            />
            <View className="absolute bg-white bottom-0 right-0">
              <Edit />
            </View>
          </View>
          <H1>Sandra</H1>
          <P className="text-gray-400">sandra@gmail.com</P>
        </View>

        <View className="mt-8 flex gap-6">
          <View className="flex flex-row gap-2">
            <DollarSign />
            <H1>Current settings</H1>
          </View>

          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-2">
              <Bell />
              <H1>Push notifications</H1>
            </View>

            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="#F2F4F7"
              size="small"
              onToggle={isOn => console.log('changed to : ', isOn)}
            />
          </View>

          <View className="flex flex-row gap-2">
            <CircleHelp />
            <H1>Support</H1>
          </View>

          <View className="flex flex-row gap-2">
            <LogOut />
            <H1>Logout</H1>
          </View>
        </View>
      </View>
    </BaseLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});
