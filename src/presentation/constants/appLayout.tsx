import React, {useState} from 'react';
import HomeScreen from '../screens/homeScreen';
import GoalsTrackerScreen from '../screens/goal/goalsTrackerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Goal,
  House,
  Plus,
  BellDot,
  ChevronLeft,
  EllipsisVertical,
  Bell,
} from 'lucide-react-native';
import {AddActionSheet} from '../screens/actionSheets';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddGoalScreen from '../screens/goal/addGoalScreen';
import {CustomText, H1, H3, P} from './text';
import GoalDetailsScreen from '../screens/goal/goalDetailsScreen';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import AddExpenseScreen from '../screens/expense/addExpenseScreen';
import AddIncomeScreen from '../screens/income/addIncomeScreen';
import ProfileScreen from '../screens/profile/profile';
import ExpenseDetailsScreen from '../screens/expense/expenseDetailsScreen';
import AddBudgetScreen from '../screens/budget/addBudgetScreen';
import ExpenseCategoryDetailsScreen from '../screens/expense/expenseCategoryDetailsScreen';
import Notifications from '../screens/notifications';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// TODO: export this to a separate module
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
    type: 'AddScreen',
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
    type: 'AddScreen',
  },
  {
    name: 'AddIncome',
    page: AddIncomeScreen,
    title: 'Add New Income',
    type: 'AddScreen',
  },
  {
    name: 'AddBudget',
    page: AddBudgetScreen,
    title: 'Add New Plan',
    type: 'addScreen',
  },
  {
    name: 'Profile',
    page: ProfileScreen,
    title: '',
    type: 'none',
  },
  {
    name: 'ViewExpense',
    page: ExpenseDetailsScreen,
    title: 'Transportation',
    type: '',
  },
  {
    name: 'ViewNotifications',
    page: Notifications,
    title: 'Notifications',
    type: 'AddScreen',
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
    icon: <Bell size={20} />,
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
              <Pressable
                onPress={() => navigation.navigate('Profile' as never)}>
                <Image
                  source={require('../../assets/images/avatar.png')}
                  style={styles.userIcon}
                />
              </Pressable>
              <View>
                <P className="text-xs">Welcome back</P>
                <H3 className="text-xl">{HeaderItems.dashboard.name}</H3>
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate('ViewNotifications' as never)}
              className="relative">
              <View className="bg-white p-2 rounded-lg ">
                {HeaderItems.dashboard.icon}
              </View>
              <View className="w-4 h-4 rounded-full bg-red-500 items-center justify-center absolute top-0 right-0">
                <CustomText className="text-xs text-white">2</CustomText>
              </View>
            </Pressable>
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
        ) : type === 'none' ? (
          <></>
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

const styles = StyleSheet.create({
  userIcon: {
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
  },
});
