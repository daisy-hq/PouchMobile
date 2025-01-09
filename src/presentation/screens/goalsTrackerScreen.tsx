import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {BaseLayout} from '../constants/layouts';
import {H1} from '../constants/text';
import Options from '../components/options';

export class GoalsTrackerScreen extends Component {
  render() {
    return (
      <BaseLayout>
        <Options />
      </BaseLayout>
    );
  }
}

export default GoalsTrackerScreen;
