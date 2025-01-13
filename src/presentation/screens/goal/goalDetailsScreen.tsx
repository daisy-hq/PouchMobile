import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {ActivityCard, GoalDetailCard} from '../../components/cards';
import {P} from '../../constants/text';
import {UpdateActionSheet} from '../actionSheets';

const GoalDetailsScreen = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOverlay = () => {
    setOpen(!open);
  };
  return (
    <BaseLayout>
      <View>
        <View>
          <GoalDetailCard />
          <View className="mt-6 pt-3">
            <P className="mb-3">Recent Updates</P>
            <View className="h-[400px]">
              <ScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, i) => (
                  <ActivityCard key={i} id={i} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      <UpdateActionSheet
        open={open}
        toggleOverlay={handleToggleOverlay}
        setOpen={setOpen}
      />
    </BaseLayout>
  );
};

export default GoalDetailsScreen;
