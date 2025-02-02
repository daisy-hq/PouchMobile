import {View} from 'react-native';
import React from 'react';
import {DetailsLayout} from '@src/presentation/constants/layouts';
import {ExpenseCard, Hint, Notes} from '@src/presentation/components/cards';
import {H3} from '@src/presentation/constants/text';

const ExpenseDetailsScreen = () => {
  return (
    <DetailsLayout
      detailsTitle={'Every expense, categorized for better financial insights.'}
      detailsOverviewCard={
        <View className="flex flex-row justify-between items-center">
          <H3 className="">Category: Food</H3>
          <Hint width="20" color={'red'}>
            High
          </Hint>
        </View>
      }>
      <View>
        <ExpenseCard />
        <Notes title="Notes">
          Bought fruits and vegetables for the whole month which i know that I
          will not use them but rather be ordering food from outside.
        </Notes>
      </View>
    </DetailsLayout>
  );
};

export default ExpenseDetailsScreen;
