import React, {Component} from 'react';
import {BaseLayout} from '../constants/layouts';
import {H1, P} from '../constants/text';
import {View} from 'react-native';
import {LabelDatePicker, LabelInputField, LabelTextArea} from '../components/labelInputField';
import {Lock} from 'lucide-react-native';
import {PrimaryButton} from '../components/button';

const AddGoalScreen = () => {
  return (
    <BaseLayout>
      <View>
        <LabelInputField
          label="Goal name"
          placeholder="**********"
          icon={<Lock color={'#9CA3AF'} size={20} />}
          value={'GHS'}
          onChangeText={() => null}
        />
        <LabelInputField
          label="Target amount"
          placeholder="**********"
          icon={<Lock color={'#9CA3AF'} size={20} />}
          required
          value={'GHS'}
          onChangeText={() => null}
        />
        <LabelDatePicker/>
        <LabelTextArea
          label="Target amount"
          placeholder="**********"
          icon={<Lock color={'#9CA3AF'} size={20} />}
          value={'GHS'}
          onChangeText={() => null}
        />
        <PrimaryButton className="mt-5" onPress={() => null}>
          Save
        </PrimaryButton>
      </View>
    </BaseLayout>
  );
};

export default AddGoalScreen;
