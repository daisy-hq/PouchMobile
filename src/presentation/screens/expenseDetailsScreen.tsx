import {View, Text} from 'react-native';
import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {H3} from '../constants/text';
import {ExpenseCard, Hint, Notes} from '../components/cards';

const ExpenseDetailsScreen = () => {
  return (
    <BaseLayout>
      <View className='flex items-center'>
        <Hint width="20">High</Hint>
        <H3 className="mb-3">Category: Food</H3>
        <ExpenseCard />
        <Notes title='Notes'>Bought eggs</Notes>
      </View>
    </BaseLayout>
  );
};

export default ExpenseDetailsScreen;
