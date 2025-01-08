import {View, useWindowDimensions, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {GoalCard} from './cards';
import {P} from '../constants/text';

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

const Options = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabHeader}
          indicatorStyle={styles.indicator}
          tabStyle={styles.tab}
          activeColor="#007AFF"
          inactiveColor="#000"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 2,
    borderRadius: 25,
    borderCurve: 'circular',
    marginBottom: 5,
  },
  indicator: {
    backgroundColor: '#ffffff',
    height: '80%',
    width: '50%',
    top: '10%',
    borderRadius: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tab: {
    height: 50,
  },
});

export default Options;
