import React, {useState} from 'react';
import {View} from 'react-native';
import {AuthLayout} from '../../constants/layouts';
import {H2, H3, P} from '../../constants/text';
import {Apple, Eye, Lock, Mail, Phone, User} from 'lucide-react-native';
import LabelInputField from './labelInputField';
import {PrimaryButton} from '../../components/button';
import AuthHeader from './authHeader';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <AuthLayout>
      <View className="flex gap-4 items-center">
        <AuthHeader
          title="Create an Account"
          subtitle="Enter your details to create a new account."
        />

        {/* input fields */}
        <View className="flex gap-4">
          <LabelInputField
            label="Full Name"
            placeholder="Andy Skippy"
            icon={<User color={'#9CA3AF'} size={20} />}
            required
            value={firstName}
            onChangeText={setFirstName}
          />

          <LabelInputField
            label="Email Address"
            placeholder="example@email.com"
            icon={<Mail color={'#9CA3AF'} size={20} />}
            value={email}
            onChangeText={setEmail}
          />

          <LabelInputField
            label="Phone Number"
            placeholder="0500000000"
            icon={<Phone color={'#9CA3AF'} size={20} />}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
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

        <PrimaryButton>Sign Up</PrimaryButton>

        <P>
          Already have an account?{' '}
          <P
            className="text-blue-600"
            onPress={() => navigation.navigate('Login' as never)}>
            Login
          </P>
        </P>
      </View>
    </AuthLayout>
  );
};

export default RegisterScreen;
