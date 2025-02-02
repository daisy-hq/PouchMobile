import {Hint} from '@src/presentation/components/cards';
import {DetailsLayout} from '@src/presentation/constants/layouts';
import {H2, H3, P} from '@src/presentation/constants/text';
import {Percent} from 'lucide-react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';

const budgetCategories = [
  {
    category: 'Food',
    amount: 600,
    percentage: 61,
    cardBgColor: 'bg-orange-50',
    hintColor: 'yellow',
  },
  {
    category: 'Payments',
    amount: 600,
    percentage: 61,
    cardBgColor: 'bg-blue-50',
    hintColor: 'blue',
  },
  {
    category: 'Transport',
    amount: 600,
    percentage: 61,
    cardBgColor: 'bg-violet-50',
    hintColor: 'violet',
  },
  {
    category: 'Misc',
    amount: 600,
    percentage: 61,
    cardBgColor: 'bg-green-50',
    hintColor: 'green',
  },
];

const BudgetDetailsScreen = () => {
  return (
    <DetailsLayout
      detailsTitle={'A detailed view of your budget plan at a glance.'}
      detailsOverviewCard={
        <View className="flex flex-row gap-2">
          {/* <P>O</P> */}
          <View className="w-14 h-14 p-2 rounded-full bg-blue-200 me-2 justify-center items-center  border-8 border-blue-100 ">
            <Percent color={'#1570EF'} />
          </View>
          <View className="">
            <H3>Source: Salary</H3>
            <H2>
              Monthly <H2 className="text-gray-600">(GHS 400)</H2>
            </H2>
          </View>
        </View>
      }>
      <View className="flex gap-2">
        <H3>Budget Categories</H3>

        <FlatList
          data={budgetCategories}
          numColumns={2}
          columnWrapperStyle={{
            width: '100%',
            justifyContent: 'space-between',
            // marginBottom: 2,
            margin: 4,
          }}
          renderItem={item => (
            <View
              className={`p-4 w-52 rounded-xl ${item.item.cardBgColor} flex items-start gap-1`}>
              <P>Food</P>
              <H2>GHS 600.00</H2>
              <Hint
                color={
                  item.item.hintColor as 'red' | 'yellow' | 'green' | 'blue'
                }
                width={20}>
                61%
              </Hint>
            </View>
          )}
        />
      </View>
    </DetailsLayout>
  );
};

export default BudgetDetailsScreen;
