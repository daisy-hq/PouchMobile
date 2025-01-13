import React, {useState} from 'react';
import {BaseLayout} from '../../constants/layouts';
import {StyleSheet, Text, View} from 'react-native';
import {LabelInputField, LabelTextArea} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import {P} from '../../constants/text';
import SelectDropdown from 'react-native-select-dropdown';
import {ChevronDown, ChevronUp} from 'lucide-react-native';

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

          <SelectDropdown
            data={expenseCategories}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
                  <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
                    {(selectedItem && selectedItem.title) || 'Select category'}
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
