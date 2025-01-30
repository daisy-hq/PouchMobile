import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Bell, CircleHelp, DollarSign, Edit, LogOut} from 'lucide-react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {BaseLayout} from '@src/presentation/constants/layouts';
import {H3, P} from '@src/presentation/constants/text';

const ProfileScreen = () => {
  const [isPushNotificationsOn, setIsPushNotificationsOn] = useState(false);

  const settings = [
    {
      icon: DollarSign,
      title: 'Currency settings',
    },
    {
      icon: Bell,
      title: 'Push notifications',
      rightComponent: (
        <ToggleSwitch
          isOn={isPushNotificationsOn}
          onColor="blue"
          offColor="#F2F4F7"
          size="small"
          onToggle={isOn => {
            setIsPushNotificationsOn(isOn);
            console.log('Push notifications toggled:', isOn);
          }}
        />
      ),
    },
    {
      icon: CircleHelp,
      title: 'Support',
    },
  ];

  return (
    <BaseLayout>
      <View className="">
        <View className="flex items-center justify-center">
          <View className="h-[80px] w-[80px] rounded-full bg-blue-200 relative mx-auto flex items-center justify-center">
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.userIcon}
            />
            <View className="absolute bg-white bottom-0 right-0 p-1 rounded">
              <Edit size={16} />
            </View>
          </View>
          <H3>Sandra</H3>
          <P className="text-gray-400">sandra@gmail.com</P>
        </View>

        <View className="mt-8 flex gap-6">
          {settings.map((item, index) => (
            <SettingsRow
              key={index}
              icon={item.icon}
              title={item.title}
              rightComponent={item.rightComponent}
            />
          ))}

          <Pressable className="flex items-center flex-row gap-2">
            <LogOut size={18} color={'#D92D20'} />
            <H3 className="text-red-500">Logout</H3>
          </Pressable>
        </View>
      </View>
    </BaseLayout>
  );
};

export default ProfileScreen;

// Settings Row Component
const SettingsRow = ({
  icon: Icon,
  title,
  rightComponent = null,
  onPress
}: {
  icon: any;
  title: string;
  rightComponent?: any;
  onPress?: any;
}) => (
  <Pressable className="flex flex-row items-center justify-between" onPress={onPress}>
    <View className="flex flex-row items-center gap-2">
      <Icon size={18} />
      <H3>{title}</H3>
    </View>
    {rightComponent}
  </Pressable>
);

const styles = StyleSheet.create({
  userIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});
