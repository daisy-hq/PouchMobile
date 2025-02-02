import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {H1, H2, P} from './text';
import {PrimaryButton} from '../components/button';
import {useNavigation} from '@react-navigation/native';

export const BaseLayout = ({children}: any) => {
  return <View className="flex-1 px-4">{children}</View>;
};

export const AuthLayout = ({children}: any) => {
  return (
    <SafeAreaView className="flex-1 px-6 flex justify-center">
      {children}
    </SafeAreaView>
  );
};

export const DetailsLayout = ({
  children,
  detailsTitle,
  detailsOverviewCard,
}: {
  children: any;
  detailsTitle: any;
  detailsOverviewCard: any;
}) => {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#2C7571] h-1/3 flex items-center">
        <H1 className="text-white text-wrap w-[70%] absolute top-16 text-center">
          {detailsTitle}
        </H1>
      </View>
      <View>
        <View className="w-[90%] p-4 mx-auto bg-white border border-gray-200 rounded-xl -translate-y-6">
          {detailsOverviewCard}
        </View>
      </View>

      <View className="px-4">{children}</View>
    </View>
  );
};

interface OnboardingLayoutProps {
  title: string;
  illustration: any;
  description: string;
  totalSteps?: number;
  currentStep?: number;
  onNext: () => void;
  onSkip: () => void;
}

export const OnboardingLayout = ({
  title,
  illustration,
  description,
  totalSteps = 4,
  currentStep,
  onNext,
  onSkip,
}: OnboardingLayoutProps) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 px-6 flex justify-center items-center gap-10">
      <H1 className="text-2xl">{title}</H1>
      <Image style={styles.illustration} source={illustration} />
      <H2 className="text-center w-[80%]">{description}</H2>

      <View className="gap-2">
        <View className="gap-2">
          <View className="flex-row justify-center items-center gap-2">
            {Array.from({length: totalSteps}).map((_, index) => (
              <View
                key={index}
                className={`w-[10px] h-[10px] rounded-full ${
                  index === currentStep
                    ? 'bg-violet-600 w-[46px]'
                    : 'bg-gray-300'
                }
                  `}
              />
            ))}
          </View>

          <View className="gap-2 items-center">
            <Pressable onPress={onNext}>
              <P
                className={
                  'bg-[#0D0F1C] w-[260px] mx-auto text-center py-4 rounded-md flex items-center justify-center text-white'
                }>
                {currentStep === totalSteps - 1 ? 'Get Started' : 'Next'}
              </P>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login' as never)}>
              <P className="text-gray-900">Skip</P>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    width: 376,
    height: 303,
  },
});
