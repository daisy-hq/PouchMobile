import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar, Lightbulb} from 'lucide-react-native';
import {P} from '../constants/text';
import {BaseLayout} from '../constants/layouts';
import {ActivityCard, ExpenseCard, Hint} from '../components/cards';
import { useNavigation } from '@react-navigation/native';

const ExpenseCategoryDetailsScreen = () => {
  const navigation = useNavigation()
  return (
    <BaseLayout>
      <View className="flex flex-row justify-center items-center mb-4">
        <Calendar size={18} />
        <P className="">This month</P>
      </View>
      <ExpenseCard />
      <Hint width="full" icon={<Lightbulb size={16} color="#DC6803" />}>You have exceeded your budget on payments this month</Hint>
      <View className="mt-5">
        <P>History</P>
        {[1, 2, 3].map((item, index) => (
          <ActivityCard onPress={()=>navigation.navigate("ViewExpense" as never)} key={index} />
        ))}
      </View>
    </BaseLayout>
  );
};

export default ExpenseCategoryDetailsScreen;

const styles = StyleSheet.create({});
