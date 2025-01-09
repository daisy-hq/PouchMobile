import React from 'react';
import {UserPlus2} from 'lucide-react-native';
import {View} from 'react-native';
import {H2, H3} from '../../constants/text';

type Props = {
  title: string;
  subtitle: string;
};

const AuthHeader = ({title, subtitle}: Props) => {
  return (
    <View className="items-center">
      <View
        className={
          'w-20 h-20 rounded-full p-4 bg-gray-200 flex items-center justify-center'
        }>
        <View className="bg-white p-2 rounded-full">
          <UserPlus2 />
        </View>
      </View>

      <H2 className={'text-[24px]'}>{title}</H2>

      <H3 className={'text-gray-500 text-[16px]'}>{subtitle}</H3>
    </View>
  );
};

export default AuthHeader;
