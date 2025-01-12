import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AuthLayout} from '../../constants/layouts';
import {P} from '../../constants/text';
import {Lock, Mail} from 'lucide-react-native';
import {LabelInputField} from './../../components/labelInputField';
import {PrimaryButton} from '../../components/button';
import AuthHeader from './authHeader';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const socialIcons = [
    {source: require('../../../assets/images/auth/apple.png'), type: 'apple'},
    {source: require('../../../assets/images/auth/google.png'), type: 'google'},
    {source: require('../../../assets/images/auth/x.png'), type: 'x'},
  ];

  return (
    <AuthLayout>
      <View className="flex gap-4 items-center">
        <AuthHeader
          title="Login to your account"
          subtitle="Enter your details to login"
        />

        {/* auth icons */}
        <View className="flex flex-row gap-2">
          {socialIcons.map((item, index) => (
            <View
              key={index}
              className="flex-1 rounded-lg flex items-center border border-gray-200 py-2">
              <Image
                style={
                  item.type === 'apple' ? styles.appleLogo : styles.socialLogo
                }
                source={item.source}
              />
            </View>
          ))}
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
            secureTextEntry
            isPasswordField={true}
          />
        </View>

        <View className="flex flex-row justify-between w-full">
          {/* left side */}
          <View className="flex flex-row items-center gap-2">
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              boxType="square"
              style={{
                width: 16,
                height: 16,
                borderColor: '#9CA3AF',
                borderWidth: 1,
              }}
            />
            <P>Keep me logged in</P>
          </View>
          {/* right side */}
          <View>
            <P>Forgot password?</P>
          </View>
        </View>

        <PrimaryButton
          // the Login button isn't working because we're conditionally rendering the RootStack
          onPress={() => navigation.navigate('Dashboard' as never)}>
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

const styles = StyleSheet.create({
  socialLogo: {
    height: 24,
    width: 20,
  },
  appleLogo: {
    height: 24,
    width: 20,
  },
});
