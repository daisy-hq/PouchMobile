import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {H3, P} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {ExpenseCategoryOverview, OverviewCards} from '../components/cards';
import {FlatList, Pressable, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {PrimaryButton} from '../components/button';

const HomeScreen = () => {
  const navigation = useNavigation();

  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

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
  const pieChartData = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

  const renderOverviewCards = [
    {type: 'chart'},
    {type: 'details'},
    {type: 'chart'},
    {type: 'details'},
  ];
  return (
    <BaseLayout>
      <View className="h-full relative flex w-full">
        <View className="relative h-72">
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
        <View>
          <PrimaryButton
            onPress={() => navigation.navigate('BudgetDetails' as never)}>
            Budget details screen
          </PrimaryButton>
        </View>
      </View>
    </BaseLayout>
  );
};

export default HomeScreen;
