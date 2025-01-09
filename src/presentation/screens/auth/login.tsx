import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {AuthLayout} from '../../constants/layouts';
import {H2, H3, P} from '../../constants/text';
import {Apple, Eye, Lock, Mail, UserPlus2} from 'lucide-react-native';
import {CheckBox} from 'react-native-elements';
import {LabelInputField} from '../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import AuthHeader from './authHeader';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <AuthLayout>
      <View className="flex gap-4 items-center">
        <AuthHeader
          title="Login to your account"
          subtitle="Enter your details to login"
        />

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

        {/* or */}
        <View className="flex flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <P className="mx-4 text-gray-500">OR</P>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* input fields */}
        <View className="flex gap-4">
          <LabelInputField
            label="Email Address"
            placeholder="example@gmail.com"
            icon={<Mail color={'#9CA3AF'} size={20} />}
            required
            value={email}
            onChangeText={setEmail}
          />

          <LabelInputField
            label="Password"
            placeholder="**********"
            icon={<Lock color={'#9CA3AF'} size={20} />}
            required
            value={password}
            onChangeText={setPassword}
            trailingIcon={<Eye color={'#9CA3AF'} size={20} />}
          />
        </View>

        <View className="flex flex-row justify-between w-full">
          {/* left side */}
          <View className="flex flex-row items-center gap-2">
            {/* <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="red"
              title={'Keep me logged in'}
            /> */}
            <P>[]</P>
            <P>Keep me logged in</P>
          </View>
          {/* right side */}
          <View>
            <P>Forgot password?</P>
          </View>
        </View>

        <PrimaryButton
          // the Login button isn't working because we're conditionally rendering the RootStack
          onPress={() => navigation.navigate('dashboard' as never)}>
          Login
        </PrimaryButton>

        <PrimaryButton
          onPress={() => navigation.navigate('Register' as never)}
          className="bg-transparent py-0">
          <P className="text-black">Don&apos;t have an account?</P>
          <P className="text-blue-600"> Sign Up</P>
        </PrimaryButton>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
