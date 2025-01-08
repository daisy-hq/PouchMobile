import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {BaseLayout} from '../constants/layouts';
import {H1} from '../constants/text';

export class GoalsTrackerScreen extends Component {
  render() {
    return (
      <BaseLayout>
        <H1>Goals Tracker</H1>
      </BaseLayout>
    );
  }
}

export default GoalsTrackerScreen;
