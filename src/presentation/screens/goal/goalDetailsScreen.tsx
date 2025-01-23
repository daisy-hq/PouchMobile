import {View, ScrollView} from 'react-native';
import React from 'react';
import {BaseLayout} from '../../constants/layouts';
import {ActivityCard, GoalDetailCard} from '../../components/cards';
import {P} from '../../constants/text';

const GoalDetailsScreen = () => {
  return (
    <>
      <BaseLayout>
        <View className="z-0">
          <View>
            <GoalDetailCard />
            <View className="mt-6 pt-3">
              <P className="mb-3">Recent Updates</P>
              <View className="h-[400px]">
                <ScrollView>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, i) => (
                    <ActivityCard onPress={() => null} key={i} />
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </BaseLayout>
    </>
  );
};

export default GoalDetailsScreen;
