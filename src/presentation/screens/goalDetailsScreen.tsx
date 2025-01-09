import {View, Text} from 'react-native';
import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {ActivityCard, GoalDetailCard} from '../components/cards';
import {P} from '../constants/text';

const GoalDetailsScreen = () => {
  return (
    <BaseLayout>
      <GoalDetailCard />
      <View className="mt-6 pt-3">
        <P className="mb-3">Recent Updates </P>
        <ActivityCard />
      </View>
    </BaseLayout>
  );
};

export default GoalDetailsScreen;
