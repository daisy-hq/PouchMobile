import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Animated,
  ImageSourcePropType,
} from 'react-native';
import React, {useRef} from 'react';
import {H1, H2} from '@src/presentation/constants/text';

interface Slide {
  id: number;
  title: string;
  illustration: ImageSourcePropType | undefined;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Welcome to Pouch!',
    illustration: require('../../../assets/images/onboarding/welcome.png'),
    description:
      'Track your finances, save smarter, and achieve your goals effortlessly.',
  },
  {
    id: 2,
    title: 'Plan Your Budget',
    illustration: require('../../../assets/images/onboarding/plan-budget.png'),
    description: 'Set monthly budgets and track spending across categories',
  },
  {
    id: 3,
    title: 'Achieve Your Goals',
    illustration: require('../../../assets/images/onboarding/achieve-goals.png'),
    description: 'Save for what matters with smart goal-setting tools',
  },
  {
    id: 4,
    title: 'Get Timely Updates',
    illustration: require('../../../assets/images/onboarding/timely-updates.png'),
    description:
      'Receive reminders, tips, and progress updates to stay on track',
  },
];

const Onboarding = () => {
  // a reference to the horizontal position of the flatlist
  const {width} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="flex-1 items-center justify-center">
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled // allow slide to snap in view
        bounces={false}
        keyExtractor={item => item.title}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />

      {/* Step indicator */}
      <View className="absolute bottom-8 left-0 right-0 flex-row justify-center items-center">
        {slides.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, {width: dotWidth, opacity}]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Onboarding;

export const OnboardingItem = ({item}: {item: Slide}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{width}}
      className={'flex-1 flex justify-center items-center gap-10'}>
      <H1 className="text-2xl">{item.title}</H1>
      <Image style={[styles.illustration]} source={item.illustration} />
      <H2 className="text-center w-[80%]">{item.description}</H2>
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    width: 376,
    height: 303,
    objectFit: 'cover',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7C3AED', // Violet color
    marginHorizontal: 5,
  },
});
