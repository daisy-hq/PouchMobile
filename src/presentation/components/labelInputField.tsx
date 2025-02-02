import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {P} from '../constants/text';
import DateTimePicker from 'react-native-ui-datepicker';
import {Eye, EyeOff} from 'lucide-react-native';

type LabelInputFieldProps = {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
  secureTextEntry?: boolean;
  value: string;
  type?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  onChangeText: (text: string) => void;
  trailingIcon?: React.ReactNode;
  isPasswordField?: boolean;
  className?: string
};

type LabelTextAreaProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const LabelInputField = ({
  label,
  placeholder,
  icon,
  required = false,
  secureTextEntry = false,
  value,
  type = 'default',
  onChangeText,
  trailingIcon,
  isPasswordField=false,
  className
}: LabelInputFieldProps) => {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View className="w-full py-2">
      <P className="mb-2">
        {label} {required && <P className="text-blue-600">*</P>}
      </P>
      <View className={`${className || "border border-gray-300 rounded-xl p-2 bg-white"} flex flex-row items-center  gap-2 w-full `}>
        {icon && icon}
        <TextInput
          className="flex-1 text-gray-700"
          placeholder={placeholder}
          placeholderTextColor={'#9CA3AF'}
          keyboardType={type}
          secureTextEntry={isPasswordField?!passwordVisible:false}
          value={value}
          onChangeText={onChangeText}
        />
        {/*{trailingIcon && trailingIcon} */}
        {isPasswordField && (
          <Pressable onPress={togglePasswordVisible}>
            {passwordVisible ? (
              <Eye color={'#9CA3AF'} size={20} />
            ) : (
              <EyeOff color={'#9CA3AF'} size={20} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export const LabelTextArea = ({
  label,
  placeholder,
  value,
  onChangeText,
}: LabelTextAreaProps) => {
  return (
    <View className="w-full py-2">
      <P className="mb-2">{label}</P>
      <View className=" gap-2 w-full border border-gray-300 rounded-2xl p-2 bg-white h-40">
        <TextInput
          className=" text-gray-700 "
          placeholder={placeholder}
          placeholderTextColor={'#9CA3AF'}
          value={value}
          onChangeText={onChangeText}
          multiline={true}
        />
      </View>
    </View>
  );
};
export const LabelDatePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState('');
  return (
    <View className="w-full py-2 relative">
      <P className="mb-2">Select Date:</P>
      <TouchableOpacity
        className="bg-white p-3 border border-gray-300 rounded-xl"
        onPress={() => setShowPicker(!showPicker)}>
        <P>Select Date</P>
      </TouchableOpacity>
      <View className="w-full absolute top-[70px] z-50">
        {showPicker && (
          <View className="bg-white rounded-lg mt-1 border border-gray-200 p-4 w-[85%] mx-auto">
            <DateTimePicker
              mode="single"
              // date={date}
              // onChange={(params) => setDate(params.date)}
              calendarTextStyle={styles.datePickerTextStyle}
              headerTextStyle={{fontSize: 14, fontFamily: 'Lexend'}}
              weekDaysTextStyle={styles.datePickerTextStyle}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerTextStyle: {fontSize: 12, fontFamily: 'Lexend'},
});
