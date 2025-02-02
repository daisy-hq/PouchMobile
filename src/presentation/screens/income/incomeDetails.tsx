import {View} from 'react-native';
import React from 'react';
import {DetailsLayout} from '@src/presentation/constants/layouts';
import {Hint, Notes} from '@src/presentation/components/cards';
import {CustomText, H3} from '@src/presentation/constants/text';

const IncomeDetailsScreen = () => {
  return (
    <DetailsLayout
      detailsTitle={
        'Break down your earnings and manage your inflow effortlessly.'
      }
      detailsOverviewCard={
        <>
          <View className="items-center pb-2">
            <Hint width={20} color="green">
              Frelance
            </Hint>
          </View>
          <View className="flex flex-row justify-between items-center my-2">
            <CustomText className="text-xs">Source: BitAfrika</CustomText>
            <CustomText className="text-xs">
              Date Added: May 12, 2025
            </CustomText>
          </View>
          <View className="flex flex-row justify-between items-center">
            <H3 className="">GHS 10,000</H3>
            <Hint width="20" color={'yellow'}>
              Recurring
            </Hint>
          </View>
        </>
      }>
      <View>
        <Notes title="Notes">
          Bought fruits and vegetables for the whole month which i know that I
          will not use them but rather be ordering food from outside.
        </Notes>
      </View>
    </DetailsLayout>
  );
};

export default IncomeDetailsScreen;
