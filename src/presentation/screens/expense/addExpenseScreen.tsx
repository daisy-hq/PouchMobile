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

const AddExpenseScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const expenseCategories = [
    {
      value: 'Catetory One',
      label: 'Category One',
    },
    {
      value: 'Catetory Two',
      label: 'Category Two',
    },
    {
      value: 'Catetory Three',
      label: 'Category Three',
    },
  ];

  return (
    <BaseLayout>
      <View>
        <View className="rounded-2xl p-4 bg-white border border-gray-200 flex gap-2">
          <LabelInputField
            label="Expense name (required)"
            placeholder="E.g; Electricity bill"
            value={name}
            onChangeText={setName}
          />
          <LabelInputField
            label="Amount (required)"
            placeholder="E.g; 50"
            value={amount}
            type="numeric"
            onChangeText={setAmount}
          />

          <DropDownOptions
            data={expenseCategories}
            sectionTitle="Select Category"
          />
          <View className="flex gap-1">
            <P>Priority</P>
            <View className="w-full flex flex-row gap-2">
              <View className="flex-1 bg-blue-100 border border-blue-400 rounded-full p-2 flex items-center justify-center">
                <P>High</P>
              </View>
              <View className="flex-1 bg-gray-100 border border-gray-200 rounded-full p-2 flex items-center justify-center">
                <P>Medium</P>
              </View>
              <View className="flex-1 bg-gray-100 border border-gray-200 rounded-full p-2 flex items-center justify-center">
                <P>Low</P>
              </View>
            </View>
          </View>

          <LabelTextArea
            label="Note"
            placeholder="E.g; Bought fruits and vegetables"
            value={note}
            onChangeText={setNote}
          />
        </View>

        <PrimaryButton className="mt-5" onPress={() => null}>
          Save expense
        </PrimaryButton>
      </View>
    </BaseLayout>
  );
};

export default AddExpenseScreen;
