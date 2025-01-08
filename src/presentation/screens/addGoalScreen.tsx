import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {BaseLayout} from '../constants/layouts';
import {H1, P} from '../constants/text';

const AddGoalScreen = () => {
  return (
    <BaseLayout>
      <H1>Hello Goal</H1>
      <P>helloo, somebody cannot see you</P>
    </BaseLayout>
  );
};

export default AddGoalScreen;
