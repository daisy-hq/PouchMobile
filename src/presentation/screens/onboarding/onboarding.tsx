import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Animated,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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

const Onboarding = ({
  onOnboardingComplete,
}: {
  onOnboardingComplete: () => void;
}) => {
  const {width} = useWindowDimensions(); // a reference to the horizontal position of the flatlist
  const scrollX = useRef(new Animated.Value(0)).current;
  const [showSplash, setShowSplash] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const lastSlideIndex = slides.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <FlatList
        ref={flatListRef}
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
        onMomentumScrollEnd={event => {
          // update currentSlideIndex based on the scrolled position
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentSlideIndex(index);
        }}
      />

      <View className="absolute bottom-20 left-0 right-0 p-3 justify-start">
        {currentSlideIndex < lastSlideIndex ? (
          <Pressable
            onPress={() => onOnboardingComplete()}
            className={
              'w-[260px] mx-auto text-center py-4 rounded-md flex items-center justify-center border border-gray-200'
            }>
            <H1 className="text-[#0D0F1C]">Skip</H1>
          </Pressable>
        ) : (
          <Pressable
            onPress={onOnboardingComplete}
            className={
              'bg-[#0D0F1C] w-[260px] mx-auto text-center py-4 rounded-md flex items-center justify-center'
            }>
            <H1 className="text-white">Finish</H1>
          </Pressable>
        )}
      </View>

      {/* steps indicator */}
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

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // scale from 0.8
  const opacityAnim = useRef(new Animated.Value(0)).current; // opacity from 0

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1, // scale to 1
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // opacity to 1
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View className=" flex-1 flex items-center justify-center relative">
      <Animated.Image
        style={[
          styles.logo,
          {
            transform: [{scale: scaleAnim}],
            opacity: opacityAnim,
          },
        ]}
        source={require('../../../assets/images/commons/pouch-logo.png')}
      />
      <Image
        style={styles.pattern}
        source={require('../../../assets/images/onboarding/splash-pattern.png')}
      />
      <View className="absolute bottom-5">
        <H1 className="text-[#7F56D9] text-2xl">Pouch</H1>
      </View>
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
    backgroundColor: '#7C3AED',
    marginHorizontal: 5,
  },
  logo: {
    width: 134,
    height: 120,
  },
  pattern: {
    width: 431,
    height: 472,
    zIndex: -1,
    position: 'absolute',
  },
});
