import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {StyleSheet, Text, View} from 'react-native';
import {LabelInputField, LabelTextArea} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import {P} from '../../constants/text';
import SelectDropdown from 'react-native-select-dropdown';
import {ChevronDown, ChevronUp} from 'lucide-react-native';

const AddBudgetScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

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
            <SelectDropdown
              data={selectFields}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                    <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                      {(selectedItem && selectedItem.title) || 'Amount'}
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
              label="Name"
              placeholder=""
              value={name}
              onChangeText={setName}
            />

            <P>Income Source</P>
            <SelectDropdown
              data={selectFields}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                    <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                      {(selectedItem && selectedItem.title) || 'Select income'}
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

            <P>Frequency</P>
            <SelectDropdown
              data={selectFields}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                    <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                      {(selectedItem && selectedItem.title) || 'Frequency'}
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
