import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {View} from 'react-native';
import {
  DropDownOptions,
  LabelInputField,
} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import {P} from '../../constants/text';

const AddBudgetScreen = () => {
  const [name, setName] = useState('');
  const selectFields = [
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
      <View className="flex gap-4">
        <View>
          <P className="text-gray-600 mb-2">Primary Details</P>
          <View className="rounded-2xl p-4 bg-white border border-gray-200 flex gap-2">
            <P>Format</P>
            <DropDownOptions data={selectFields} sectionTitle="Amount" />
            <LabelInputField
              label="Name"
              placeholder=""
              value={name}
              onChangeText={setName}
            />
            <P>Income Source</P>
            <DropDownOptions data={selectFields} sectionTitle="Select income" />
            <P>Frequency</P>
            <DropDownOptions data={selectFields} sectionTitle="Frequency" />
          </View>
        </View>

        <View>
          <P className="text-gray-600 mb-2">Categories</P>
          <View className="rounded-2xl p-4 bg-white border border-gray-200 flex gap-2">
            <LabelInputField
              label="Item"
              placeholder=""
              value={name}
              onChangeText={setName}
            />
            <LabelInputField
              label="Quota"
              placeholder="GHS"
              value={name}
              onChangeText={setName}
            />
            <View className="w-full flex items-end">
              <P className="text-[#026AA2]">+ Add Another</P>
            </View>
          </View>
        </View>
        <PrimaryButton onPress={() => null}>Save plan</PrimaryButton>
      </View>
    </BaseLayout>
  );
};

export default AddBudgetScreen;
