import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from 'lucide-react-native';
import {P} from '../constants/text';
import {BaseLayout} from '../constants/layouts';
import {ActivityCard, ExpenseCard, Hint} from '../components/cards';

const ExpenseDetailsScreen = () => {
  return (
    <BaseLayout>
      <View className="flex flex-row justify-center items-center mb-4">
        <Calendar size={18} />
        <P className=''>This month</P>
      </View>
      <ExpenseCard />
      <Hint />
      <View className="mt-5">
        <P>History</P>
        {[1, 2, 3].map((item, index) => (
          <ActivityCard key={index}/>
        ))}
      </View>
    </BaseLayout>
  );
};

export default ExpenseDetailsScreen;

const styles = StyleSheet.create({});
