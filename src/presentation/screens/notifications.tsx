import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {CustomText, P} from '../constants/text';
import {BaseLayout} from '../constants/layouts';
import {PrimaryButton} from '../components/button';
import ToggleSwitch from 'toggle-switch-react-native';
import {NotificationsCard} from '../components/cards';

const Notifications = () => {
  const [isNotified, setIsNotified] = useState(true);
  return (
    <BaseLayout>
      {isNotified ? (
        <View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <ToggleSwitch
                isOn={false}
                onColor="blue"
                offColor="#F2F4F7"
                size="small"
                onToggle={isOn => console.log('changed to : ', isOn)}
              />
              <CustomText className="text-xs ms-1">Unread only</CustomText>
            </View>
            <View>
              <CustomText className="text-xs text-gray-600">
                Mark all as read
              </CustomText>
            </View>
          </View>
          <ScrollView className="mt-3 ">
            {[1, 2, 3].map((i, index) => (
              <NotificationsCard key={index}/>
            ))}
          </ScrollView>
        </View>
      ) : (
        <SafeAreaView className="flex-1 justify-center items-center ">
          <Image
            className=""
            source={require('../../assets/images/ghost-img.png')}
          />
          <P className="text-gray-600">No notifications yet!</P>
          <P className="text-gray-600">Check back later for updates</P>
          <PrimaryButton className="mt-4">Refresh</PrimaryButton>
        </SafeAreaView>
      )}
    </BaseLayout>
  );
};

export default Notifications;
