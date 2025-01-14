import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {H3} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {ExpenseCategoryOverview, OverviewCards} from '../components/cards';
import {FlatList, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

const HomeScreen = () => {
  const navigation = useNavigation();

  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  const colors = ['bg-rose-600', 'bg-yellow-500', 'bg-emerald-600', 'bg-slate-600'];
  return (
    <BaseLayout>
      <View className="justify-between">
        <View className=" ">
          {[1, 2, 3].map((item, i) => (
            <OverviewCards
              dataLength={3}
              i={i}
              key={i}
              prevIndex={prevIndex}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              maxVisibleItems={3}
            />
          ))}
        </View>
        <View className="relative mt-80 top-30">
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
            )}></FlatList>
        </View>
      </View>
    </BaseLayout>
  );
};

export default HomeScreen;
