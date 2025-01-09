import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {BaseLayout} from '../constants/layouts';
import {ActivityCard, GoalDetailCard} from '../components/cards';
import {P} from '../constants/text';
import {PrimaryButton} from '../components/button';
import {UpdateActionSheet} from './overlaySheets';

const GoalDetailsScreen = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOverlay = () => {
    setOpen(!open);
  };
  return (
    <BaseLayout>
      <View className="flex-column it-between">
        <View>
          <GoalDetailCard />
          <View className="mt-6 pt-3">
            <P className="mb-3">Recent Updates </P>
            <ActivityCard />
          </View>
        </View>
        <View>
          <PrimaryButton onPress={() => setOpen(true)}>Update</PrimaryButton>
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
