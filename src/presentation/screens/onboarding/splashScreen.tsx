import {H1} from '@src/presentation/constants/text';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View className=" flex-1 flex items-center justify-center relative">
      <Image
        style={styles.logo}
        source={require('../../../assets/images/pouch-logo.png')}
      />
      <Image
        style={styles.logo}
        source={require('../../../assets/images/onboarding/splash-pattern.png')}
      />

      <View className="absolute bottom-5">
        <H1 className="text-[#7F56D9]">Pouch</H1>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    width: 134,
    height: 120,
  },
  pattern: {
    width: 431,
    height: 472,
    zIndex: -1,
  },
});
