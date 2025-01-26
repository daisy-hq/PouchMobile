/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenHeader from '@src/presentation/components/screenHeader';
import {
  AddActionSheet,
  UpdateActionSheet,
} from '@src/presentation/screens/actionSheets';
import {Goal, House, Plus} from 'lucide-react-native';
import GoalDetailsScreen from '@src/presentation/screens/goal/goalDetailsScreen';
import AddGoalScreen from '@src/presentation/screens/goal/addGoalScreen';
import ExpenseCategoryDetailsScreen from '@src/presentation/screens/expense/expenseCategoryDetailsScreen';
import AddExpenseScreen from '@src/presentation/screens/expense/addExpenseScreen';
import AddIncomeScreen from '@src/presentation/screens/income/addIncomeScreen';
import AddBudgetScreen from '@src/presentation/screens/budget/addBudgetScreen';
import ProfileScreen from '@src/presentation/screens/profile/profile';
import ExpenseDetailsScreen from '@src/presentation/screens/expense/expenseDetailsScreen';
import Notifications from '@src/presentation/screens/notifications';
import HomeScreen from '@src/presentation/screens/homeScreen';
import GoalsTrackerScreen from '@src/presentation/screens/goal/goalsTrackerScreen';
import IncomeDetailsScreen from '@src/presentation/screens/income/incomeDetails';
import BudgetDetailsScreen from '@src/presentation/screens/budget/budgetDetails';

const Tab = createBottomTabNavigator();

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
    name: 'BudgetDetails',
    page: BudgetDetailsScreen,
    title: 'Budget Details',
    type: 'DetailsScreen',
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
    type: 'DetailsScreen',
  },
  {
    name: 'ViewIncome',
    page: IncomeDetailsScreen,
    title: 'Salary',
    type: 'DetailsScreen',
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

const RootTabNavigation = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleToggleOverlay = () => {
    setOpen(prev => !prev);
  };
  const handleToggleEditOverlay = () => {
    setOpenEdit(prev => !prev);
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
              // headerStyle: {
              //   backgroundColor: 'red',
              //   borderColor: 'green',
              //   display: 'none',
              // },
              header: () => (
                <ScreenHeader
                  type={item.type}
                  title={item.title !== '' ? item.title : null}
                  onEditPress={() => handleToggleEditOverlay()}
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
      <UpdateActionSheet
        open={openEdit}
        toggleOverlay={handleToggleEditOverlay}
        setOpen={setOpenEdit}
      />
    </>
  );
};

export default RootTabNavigation;
