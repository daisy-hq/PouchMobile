import React from 'react';
import {TouchableOpacity} from 'react-native';
import {H3} from '../constants/text';

export const PrimaryButton = ({
  children,
  onPress,
  ...props
}: {
  children: any;
  props?: any;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      className="bg-[#0D0F1C] w-[260px] mx-auto text-center py-4 rounded-md flex items-center justify-center">
      <H3 className="text-white font-lexend">{children}</H3>
    </TouchableOpacity>
  );
};
