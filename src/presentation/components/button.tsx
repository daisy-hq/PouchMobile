import React from 'react';
import {Pressable} from 'react-native';
import {H3} from '../constants/text';

export const PrimaryButton = ({
  children,
  className,
  onPress,
  ...props
}: {
  children: any;
  className?: string;
  props?: any;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      className={`bg-[#0D0F1C] w-[260px] mx-auto text-center py-4 rounded-md flex items-center justify-center ${className}`}>
      <H3 className="text-white font-lexend">{children}</H3>
    </Pressable>
  );
};
