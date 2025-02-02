import {View, SafeAreaView, Image, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CustomText, P} from '../constants/text';
import {BaseLayout} from '../constants/layouts';
import {PrimaryButton} from '../components/button';
import ToggleSwitch from 'toggle-switch-react-native';
import {NotificationsCard} from '../components/cards';

const Notifications = () => {
  const [isNotified, setIsNotified] = useState(true);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [markedAsRead, setMarkedAsRead] = useState(false);

  return (
    <BaseLayout>
      {isNotified ? (
        <View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <ToggleSwitch
                isOn={showUnreadOnly}
                onColor="blue"
                offColor="#F2F4F7"
                size="small"
                onToggle={isOn => {
                  setShowUnreadOnly(isOn);
                  console.log('Push notifications toggled:', isOn);
                }}
              />

              <CustomText className="text-xs ms-1">Unread only</CustomText>
            </View>
            <Pressable onPress={() => setMarkedAsRead(!markedAsRead)}>
              <CustomText className="text-xs text-gray-600">
                Mark all as read
              </CustomText>
            </Pressable>
          </View>
          <ScrollView className="mt-3 ">
            {[1, 2, 3].map((i, index) => (
              <NotificationsCard key={index} markedAsRead={markedAsRead} />
            ))}
          </ScrollView>
        </View>
      ) : (
        <SafeAreaView className="flex-1 justify-center items-center ">
          <Image
            className=""
            source={require('../../assets/images/commons/ghost-img.png')}
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
