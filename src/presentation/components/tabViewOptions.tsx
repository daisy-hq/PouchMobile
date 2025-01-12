import {useWindowDimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TabBar, TabView} from 'react-native-tab-view';

type TabViewOptionsProps = {
  renderScene: any;
  routes: Array<{key: string; title: string}>;
};

const TabViewOptions = ({renderScene, routes}: TabViewOptionsProps) => {
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
    borderWidth: 4,
    borderRadius: 25,
    borderCurve: 'circular',
  },
  indicator: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: 180,
    borderRadius: 25,
  },
  label: {
    fontFamily: 'Lexend',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tab: {
    height: 40,
    top: '-10%',
  },
});

export default TabViewOptions;
