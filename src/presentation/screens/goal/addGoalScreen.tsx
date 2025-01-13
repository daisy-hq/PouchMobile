import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {View} from 'react-native';
import {
  LabelDatePicker,
  LabelInputField,
  LabelTextArea,
} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';

const AddGoalScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  return (
    <BaseLayout>
      <View>
        <LabelInputField
          label="Goal name"
          placeholder="sadique"
          value={name}
          onChangeText={setName}
        />
        <LabelInputField
          label="Target amount"
          placeholder="50"
          value={amount}
          type="numeric"
          onChangeText={setAmount}
        />
        <LabelDatePicker />
        <LabelTextArea
          label="Note"
          placeholder="description"
          value={note}
          onChangeText={setNote}
        />
        <PrimaryButton className="mt-5" onPress={() => null}>
          Save
        </PrimaryButton>
      </View>
    </BaseLayout>
  );
};

export default AddGoalScreen;
