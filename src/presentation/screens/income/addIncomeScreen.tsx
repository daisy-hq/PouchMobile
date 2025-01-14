import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {StyleSheet, Text, View} from 'react-native';
import {LabelInputField, LabelTextArea} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import {P} from '../../constants/text';
import SelectDropdown from 'react-native-select-dropdown';
import {ChevronDown, ChevronUp} from 'lucide-react-native';
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
          <SelectDropdown
            data={incomeTypes}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                  <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                    {(selectedItem && selectedItem.title) || 'Select type'}
                  </Text>
                  {isOpened ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  className={`w-full flex flex-row px-4 justify-center items-center py-2 ${
                    isSelected && 'bg-gray-300'
                  }`}>
                  <P className="flex-1 text-gray-700">{item.label}</P>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />

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
          <SelectDropdown
            data={incomeTypes}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                  <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                    {(selectedItem && selectedItem.title) || 'Select frequency'}
                  </Text>
                  {isOpened ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  className={`w-full flex flex-row px-4 justify-center items-center py-2 ${
                    isSelected && 'bg-gray-300'
                  }`}>
                  <P className="flex-1 text-gray-700">{item.label}</P>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
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

const styles = StyleSheet.create({
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
