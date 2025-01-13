import {View} from 'react-native';
import React from 'react';
import {BaseLayout} from '@src/presentation/constants/layouts';
import {ExpenseCard, Hint, Notes} from '@src/presentation/components/cards';
import {H3} from '@src/presentation/constants/text';

const ExpenseDetailsScreen = () => {
  return (
    <BaseLayout>
      <View className="flex items-center">
        <Hint width="20">High</Hint>
        <H3 className="mb-3">Category: Food</H3>
        <ExpenseCard />
        <Notes title="Notes">Bought eggs</Notes>
      </View>
    </BaseLayout>
  );
};

export default ExpenseDetailsScreen;
