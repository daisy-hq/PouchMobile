import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {View} from 'react-native';
import {
  DropDownOptions,
  LabelInputField,
  LabelTextArea,
} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import {P} from '../../constants/text';
import ToggleSwitch from 'toggle-switch-react-native';

const AddIncomeScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const incomeTypes = [
    {
      value: 'Salary',
      label: 'Salary',
    },
    {
      value: 'Contract',
      label: 'Contract',
    },
    {
      value: 'Freelance',
      label: 'Freelance',
    },
  ];

  return (
    <BaseLayout>
      <View>
        <View className="rounded-2xl p-4 bg-white border border-gray-200 flex gap-2">
          <P>Type</P>
          <DropDownOptions data={incomeTypes} sectionTitle="Select type" />
          <LabelInputField
            label="Source of income"
            placeholder="E.g; Gift"
            value={name}
            onChangeText={setName}
          />
          <LabelInputField
            label="Amount"
            placeholder="E.g; 50"
            value={amount}
            type="numeric"
            onChangeText={setAmount}
          />

          <P>Frequency</P>
          <DropDownOptions data={incomeTypes} sectionTitle="Select frequency" />
          <View className="flex flex-row items-center justify-between">
            <P className="text-gray-500">Update automatically</P>
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="#F2F4F7"
              size="small"
              onToggle={isOn => console.log('changed to : ', isOn)}
            />
          </View>

          <LabelTextArea
            label="Description"
            placeholder="E.g; March payment for School Project"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <PrimaryButton className="mt-5" onPress={() => null}>
          Save Income
        </PrimaryButton>
      </View>
    </BaseLayout>
  );
};

export default AddIncomeScreen;
