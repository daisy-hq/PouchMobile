import React, {useRef} from 'react';
import {BaseLayout} from '../constants/layouts';
import {H3} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {
  ExpenseCategoryOverview,
  OverviewCards,
  IncomeCards,
  BudgetCards,
} from '../components/cards';
import {FlatList, ScrollView, View, Animated} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

const HomeScreen = () => {
  const navigation = useNavigation();

  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const colors = [
    'bg-blue-600',
    'bg-yellow-500',
    'bg-emerald-600',
    'bg-red-600',
  ];
  const overviewColors = [
    ['#101828', '#475467'],
    ['#42307D', '#7F56D9'],
    ['#42307D', '#7F56D9'],
    ['#42307D', '#7F56D9'],
  ];
  const pieChartData = [
    {value: 50, color: '#f39c12', label: 'Food'},
    {value: 80, color: '#2ecc71', label: 'Transport'},
    {value: 90, color: '#3498db', label: 'Maintenance'},
    {value: 70, color: 'black', label: 'Self care'},
  ];

  const renderOverviewCards = [
    {type: 'chart'},
    {type: 'details'},
    {type: 'chart'},
    {type: 'details'},
  ];

  const incomeColorVariants = [
    {background: 'bg-orange-100', textColor: 'text-orange-600'},
    {background: 'bg-blue-100', textColor: 'text-blue-600'},
    {background: 'bg-violet-100', textColor: 'text-violet-600'},
    {background: 'bg-green-100', textColor: 'text-green-600'},
  ];

  return (
    <BaseLayout>
      <View className="h-full relative flex w-full">
        {/* overview cards */}
        <View className="relative h-72 z-0">
          {renderOverviewCards.map((item, i) => (
            <OverviewCards
              dataLength={renderOverviewCards.length}
              i={i}
              key={i}
              prevIndex={prevIndex}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              maxVisibleItems={2}
              color={overviewColors[i]}
              data={pieChartData}
              type={item.type}
            />
          ))}
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          className="mt-4">
          {/* Income cards */}
          <View>
            <FlatList
              horizontal
              data={[1, 2, 3, 7, 8, 9, 4, 5]}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              renderItem={item => {
                const colorIndex = item.index % incomeColorVariants.length;
                const {background, textColor} = incomeColorVariants[colorIndex];
                return (
                  <IncomeCards
                    key={item.index}
                    onPress={() => navigation.navigate('ViewIncome' as never)}
                    textColor={textColor}
                    bgColor={background}
                  />
                );
              }}
              showsHorizontalScrollIndicator={false}
            />
            <View className="items-center mt-3">
              <View className="px-5 py-2 bg-gray-300 rounded-full flex-row items-center justify-center gap-2">
                <Animated.View
                  className="w-2 h-2 rounded-full bg-black"
                  style={{
                    backgroundColor: scrollX.interpolate({
                      inputRange: [0, 16],
                      outputRange: ['black', 'gray'],
                      extrapolate: 'clamp',
                    }),
                  }}
                />
                <Animated.View
                  className="w-2 h-2 rounded-full bg-gray-400"
                  style={{
                    backgroundColor: scrollX.interpolate({
                      inputRange: [0, 16],
                      outputRange: ['gray', 'black'],
                      extrapolate: 'clamp',
                    }),
                  }}
                />
              </View>
            </View>
          </View>
          {/* expense cards */}
          <View className="mt-2">
            <H3>Expense categories</H3>
            <FlatList
              data={[1, 2, 3, 4]}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 2,
              }}
              renderItem={item => (
                <ExpenseCategoryOverview
                  key={item.index}
                  onPress={() =>
                    navigation.navigate('ViewExpenseCategory' as never)
                  }
                  color={colors[item.index]}
                />
              )}
            />
          </View>
          {/* budget cards */}
          <View className="mt-2">
            <H3 className="my-2">Budget Plans</H3>
            <FlatList
              data={[1, 2]}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 2,
              }}
              renderItem={item => (
                <BudgetCards
                  key={item.index}
                  onPress={() => navigation.navigate('BudgetDetails' as never)}
                  data={pieChartData}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};

export default HomeScreen;
