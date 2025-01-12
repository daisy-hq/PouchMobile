import {View, ScrollView} from 'react-native';
import React from 'react';
import {BaseLayout} from '../constants/layouts';
import {SceneMap} from 'react-native-tab-view';
import {P} from '../constants/text';
import {GoalCard} from '../components/cards';
import TabViewOptions from '../components/tabViewOptions';

const Layout = () => (
  <View>
    <View className="flex py-2 items-center ">
      <P className="my-3 ">Achieve your plans through smart saving</P>
    </View>
    <GoalCard />
  </View>
);

const InProgress = () => (
  <ScrollView>
    <Layout />
  </ScrollView>
);

const Completed = () => (
  <ScrollView>
    <Layout />
  </ScrollView>
);

const renderScene = SceneMap({
  first: InProgress,
  second: Completed,
});
const routes = [
  {key: 'first', title: 'In-Progress'},
  {key: 'second', title: 'Completed'},
];

function GoalsTrackerScreen() {
  return (
      <BaseLayout>
        <TabViewOptions renderScene={renderScene} routes={routes} />
      </BaseLayout>
  );
}

export default GoalsTrackerScreen;
