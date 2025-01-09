import React from 'react';
import {View, TextInput} from 'react-native';
import {P} from '../../constants/text';

type Props = {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  trailingIcon?: React.ReactNode;
};

const LabelInputField = ({
  label,
  placeholder,
  icon,
  required = false,
  secureTextEntry = false,
  value,
  onChangeText,
  trailingIcon,
}: Props) => {
  return (
    <View className="w-full">
      <P className="mb-2">
        {label} {required && <P className="text-blue-600">*</P>}
      </P>
      <View className="flex flex-row items-center gap-2 w-full border border-gray-300 rounded-lg p-2 bg-white">
        {icon && icon}
        <TextInput
          className="flex-1 text-gray-700"
          placeholder={placeholder}
          placeholderTextColor={'#9CA3AF'}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        {trailingIcon && trailingIcon}
      </View>
    </View>
  );
};

export default LabelInputField;
