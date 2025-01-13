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
import {AddActionSheet} from '../screens/actionSheets';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddGoalScreen from '../screens/addGoalScreen';
import {H1, H3, P} from './text';
import GoalDetailsScreen from '../screens/goalDetailsScreen';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import AddExpenseScreen from '../screens/addExpenseScreen';
import ExpenseCategoryDetailsScreen from '../screens/expenseCategoryDetailsScreen';
import ExpenseDetailsScreen from '../screens/expenseDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const goalTrackerNavigation = [
  {
    name: 'Goal Detail',
    page: GoalDetailsScreen,
    title: 'Travel & LifeStyle',
    type: '',
  },
  {
    name: 'AddGoal',
    page: AddGoalScreen,
    title: 'Add New Goal',
    type: 'addScreen',
  },
  {
    name: 'ViewExpenseCategory',
    page: ExpenseCategoryDetailsScreen,
    title: 'Payments',
    type: '',
  },
  {
    name: 'AddExpense',
    page: AddExpenseScreen,
    title: 'Add New Expense',
    type: 'addScreen',
  },
  {
    name: 'ViewExpense',
    page: ExpenseDetailsScreen,
    title: 'Transportation',
    type: 'addScreen',
  },
];

const TabItems = [
  {name: 'Dashboard', page: HomeScreen, icon: <House />, title: 'Dashboard'},
  {
    name: 'AddScreen',
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
    name: 'Goaltracker',
    page: GoalsTrackerScreen,
    icon: <Goal />,
    title: 'Goals',
  },
];

const HeaderItems = {
  dashboard: {
    name: 'Sandra',
    icon: <BellDot size={20} />,
  },
  goaltracker: {name: 'Goal Tracker', icon: <Plus size={20} />},
  addScreen: {name: 'Some thing'},
  default: {name: 'Default', icon: <Plus />},
};

export const ScreenHeader = ({
  type,
  title,
}: {
  type?: 'Dashboard' | 'Goaltracker' | 'AddScreen' | string | null; // remove string type
  title?: string | null;
}) => {
  const navigation = useNavigation();
  return (
    <View className="p-4">
      <SafeAreaView>
        {type === 'Dashboard' ? (
          <View className="w-full h-12 flex flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              {/* Image */}
              <Image
                source={require('../../assets/images/avatar.png')}
                style={{
                  height: 40,
                  width: 40,
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
              <View>
                <P className="text-xs">Welcome back</P>
                <H3 className="text-xl">{HeaderItems.dashboard.name}</H3>
              </View>
            </View>

            <View className="bg-white p-2 rounded-lg">
              {HeaderItems.dashboard.icon}
            </View>
          </View>
        ) : type === 'Goaltracker' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-between">
            <H1 className="text-xl">{HeaderItems.goaltracker.name}</H1>
            <TouchableOpacity
              className="bg-white p-2 rounded-lg"
              onPress={() => navigation.navigate('AddGoal' as never)}>
              {HeaderItems.goaltracker.icon}
            </TouchableOpacity>
          </View>
        ) : type === 'AddScreen' ? (
          <View className="w-full h-12  flex  flex-row items-center justify-around">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft />
            </TouchableOpacity>
            <View className="flex-1 items-center mr-8">
              <H1 className="text-xl">
                {title ? title : HeaderItems.addScreen.name}
              </H1>
            </View>
          </View>
        ) : (
          <View className="w-full h-12  flex  flex-row items-center justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft />
            </TouchableOpacity>
            <View>
              <H1 className="text-xl">
                {title ? title : HeaderItems.default.name}
              </H1>
            </View>
            <View>
              <EllipsisVertical size={20} />
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
        {/* TODO: look into the React Navigation library in-depth */}
        {goalTrackerNavigation.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.page}
            options={{
              title: '',
              tabBarItemStyle: {display: 'none'},
              tabBarShowLabel: false,
              header: () => (
                <ScreenHeader
                  type={item.type}
                  title={item.title !== '' ? item.title : null}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
      <AddActionSheet
        open={open}
        toggleOverlay={handleToggleOverlay}
        setOpen={setOpen}
      />
    </>
  );
};

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

// TODO: Review navigation and refactor authentication routing
const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <RootTab /> : <AuthStack />;
};

export default AppLayout;
