import React from 'react';
import {Text} from 'react-native';

export const H1 = ({children, className, props}: any) => {
  return (
    <Text
      style={{
        fontFamily: 'Lexend',
      }}
      className={`text-xl ${className}`}
      {...props}>
      {children}
    </Text>
  );
};

export const H2 = ({children, className, props}: any) => {
  return (
    <Text
      style={{
        fontFamily: 'Lexend',
      }}
      className={`text-lg ${className}`}
      {...props}>
      {children}
    </Text>
  );
};

export const H3 = ({children, className, props}: any) => {
  return (
    <Text
      style={{
        fontFamily: 'Lexend',
      }}
      className={`text-base ${className}`}
      {...props}>
      {children}
    </Text>
  );
};

export const P = ({children, className, props}: any) => {
  return (
    <Text
      style={{
        fontFamily: 'Lexend',
      }}
      className={`text-sm ${className}`}
      {...props}>
      {children}
    </Text>
  );
};
export const CustomText = ({children, className, props}: any) => {
  return (
    <Text
      style={{
        fontFamily: 'Lexend',
      }}
      className={` ${className}`}
      {...props}>
      {children}
    </Text>
  );
};
