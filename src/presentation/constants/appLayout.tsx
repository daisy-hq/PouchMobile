import React, {useState} from 'react';
import HomeScreen from '../screens/homeScreen';
import GoalsTrackerScreen from '../screens/goalsTrackerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Goal,
  House,
  Plus,
  BellDot,
  ChevronLeft,
  EllipsisVertical,
} from 'lucide-react-native';
import AddActionSheet from '../screens/addActionSheet';
import {SafeAreaView, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddGoalScreen from '../screens/addGoalScreen';
import {H1, H3, P} from './text';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabItems = [
  {name: 'dashboard', page: HomeScreen, icon: <House />, title: 'Dashboard'},
  {
    name: 'addScreen',
    page: () => null,
    icon: (
      <Plus
        color={'white'}
        style={{
          backgroundColor: '#1570EF',
          padding: 20,
          borderRadius: '50%',
          marginBottom: 24,
        }}
      />
    ),
    title: 'Action',
    actionSheet: true,
  },
  {
    name: 'goaltracker',
    page: GoalsTrackerScreen,
    icon: <Goal />,
    title: 'Goals',
  },
];
const HeaderItems = {
  dashboard: {name: 'Sandra', icon: <BellDot />},
  goaltracker: {name: 'Goal Tracker', icon: <Plus />},
  addScreen: {name: 'Some thing'},
  default: {name: 'Default', icon: <Plus />},
};

const ScreenHeader = ({type}: any) => {
  return (
    <View className="bg-white p-4">
      <SafeAreaView>
        {type === 'dashboard' ? (
          <View className="w-full h-12 flex flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              {/* Image */}
              <View className="w-14 h-14 rounded-full bg-blue-200">&nbsp;</View>
              <View>
                <P className="text-xs">Welcome back</P>
                <H3 className="text-xl">{HeaderItems.dashboard.name}</H3>
              </View>
            </View>

            <View>{HeaderItems.dashboard.icon}</View>
          </View>
        ) : type === 'goaltracker' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-between">
            <H1 className="text-xl">{HeaderItems.goaltracker.name}</H1>
            <View>{HeaderItems.goaltracker.icon}</View>
          </View>
        ) : type === 'addScreen' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-around">
            <View>
              <ChevronLeft />
            </View>
            <View className="flex-1 items-center bg-red-200 mr-8">
              <H1 className="text-xl">{HeaderItems.default.name}</H1>
            </View>
          </View>
        ) : (
          <View className="w-full h-12  flex  flex-row items-center justify-between">
            <View>
              <ChevronLeft />
            </View>
            <View>
              <H1 className="text-xl">{HeaderItems.default.name}</H1>
            </View>
            <View>
              <EllipsisVertical />
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const RootTab = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOverlay = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Tab.Navigator>
        {TabItems.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.page}
            listeners={
              item.actionSheet
                ? {
                    tabPress: e => {
                      e.preventDefault();
                      handleToggleOverlay();
                    },
                  }
                : {
                    tabPress: () => {},
                  }
            }
            options={{
              title: item.title,
              tabBarIcon: () => item.icon,
              tabBarShowLabel: false,
              header: () => <ScreenHeader type={item.name} />,
            }}
          />
        ))}
        <Tab.Screen
          name="addGoal"
          component={AddGoalScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
            tabBarShowLabel: false,
            header: () => <ScreenHeader type="addGoal" />,
          }}
        />
      </Tab.Navigator>
      <AddActionSheet
        open={open}
        toggleOverlay={handleToggleOverlay}
        setOpen={setOpen}
      />
    </>
  );
};

const AppLayout = () => {
  return <RootTab />;
};

export default AppLayout;
