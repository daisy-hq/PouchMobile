import {Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BaseLayout} from '../constants/layouts';
import {H1, H2, H3, P} from '../constants/text';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <Text onPress={() => navigation.navigate('New' as never)}>
        <H1>Heading one</H1>
        {'\n'}
        <H2>Heading two</H2>
        {'\n'}
        <H3>Heading two</H3>
        {'\n'}
        <P className="text-2xl">Heading two</P>
        {'\n'}
        <P className="text-2xl text-red-300 bg-green-400">Heading two</P>
        {'\n'}
        <Text className="text-2xl">This should be big</Text>
        {'\n'}
        <P className="text-lg">Heading two</P>
        {'\n'}
        <P>Heading two</P>
        {'\n'}
      </Text>
    </BaseLayout>
  );
};

export default HomeScreen;
