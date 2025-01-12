import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {H1} from '../constants/text';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <BaseLayout>
      <H1>Dashboardingggg........</H1>
      <Pressable onPress={() => navigation.navigate('ViewExpense' as never)}>
        <H1>Go to expense screen</H1>
      </Pressable>
    </BaseLayout>
  );
};

export default HomeScreen;
