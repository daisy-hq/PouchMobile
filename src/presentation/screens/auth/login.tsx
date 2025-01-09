import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {AuthLayout} from '../../constants/layouts';
import {H2, H3, P} from '../../constants/text';
import {Apple, Eye, Lock, Mail} from 'lucide-react-native';
import {CheckBox} from 'react-native-elements';

const LoginScreen = () => {
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <AuthLayout>
      <View className="flex gap-2 items-center">
        {/* logo */}
        <View className="w-20 mx-auto h-20 rounded-full bg-gray-200">
          <P>&nbsp;</P>
        </View>
        <H2 className="text-[24px]">Login to your account</H2>
        <H3 className="text-gray-500 text-[16px]">
          Enter your details to login
        </H3>

        {/* auth icons */}
        <View className="flex flex-row gap-2">
          <View className="flex-1 rounded-lg flex items-center border border-gray-200 py-2">
            <Apple />
          </View>
          <View className="flex-1 rounded-lg flex items-center border border-gray-200 py-2">
            <Apple />
          </View>
          <View className="flex-1 rounded-lg flex items-center border border-gray-200 py-2">
            <Apple />
          </View>
        </View>

        <View className="flex flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <P className="mx-4 text-gray-500">OR</P>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* input fields */}
        <View className="flex gap-4">
          <View className="w-full">
            <P className="mb-2">
              Email Address <P className="text-blue-600">*</P>
            </P>
            <View className="flex flex-row items-center gap-2 w-full border border-gray-300 rounded-lg p-2 bg-white">
              <Mail color={'#9CA3AF'} size={20} />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="example@gmail.com"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
          <View className="w-full">
            <P className="mb-2">
              Password <P className="text-blue-600">*</P>
            </P>
            <View className="flex flex-row items-center gap-2 w-full border border-gray-300 rounded-lg p-2 bg-white">
              <Lock color={'#9CA3AF'} size={20} />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="*********"
                placeholderTextColor="#9CA3AF"
              />
              <Eye color={'#9CA3AF'} size={20} />
            </View>
          </View>
        </View>

        <View className="bg-blue-200 flex flex-row justify-between w-full">
          {/* left side */}
          <View className="flex flex-row items-center gap-2">
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              // Use ThemeProvider to make change for all checkbox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="red"
              title={'Keep me logged in'}
            />
            {/* <Text>Keep me logged in</Text> */}
          </View>
          {/* right side */}
          <View>
            <P>Forgot password?</P>
          </View>
        </View>

        <P>LoginScreen</P>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
