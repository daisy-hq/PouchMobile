import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {H3} from '../constants/text';
import {useNavigation} from '@react-navigation/native';
import {ExpenseCategoryOverview, OverviewCards} from '../components/cards';
import {FlatList, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const colors = ['bg-blue-600', 'bg-yellow-500', 'bg-green-600', 'bg-red-600'];
  return (
    <BaseLayout>
      <OverviewCards />
      <View className="mt-4">
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
    </BaseLayout>
  );
};

export default HomeScreen;
