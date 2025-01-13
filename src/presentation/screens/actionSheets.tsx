import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  CircleDollarSign,
  Goal,
  NotebookText,
  ReceiptText,
} from 'lucide-react-native';
import {LabelInputField} from '../components/labelInputField';
import {PrimaryButton} from '../components/button';

type Props = {
  open: boolean;
  toggleOverlay: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const quickActions = [
  {label: 'Add Expense', icon: ReceiptText, route: 'AddExpense'},
  {label: 'Add Goal', icon: Goal, route: 'AddGoal'},
  {label: 'Add Income', icon: CircleDollarSign, route: 'AddIncome'},
  {label: 'Add Budget', icon: NotebookText, route: 'AddBudget'},
];

export const AddActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const navigation = useNavigation();

  const handleNavigation = (route: string) => {
    navigation.navigate(route as never);
    setOpen(false);
  };

  return open ? (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={styles.backdropStyles}
      overlayStyle={styles.overlayContainer}>
      <View style={styles.modalContent}>
        {quickActions.map((item, index) => (
          <AddItemButton
            key={index}
            label={item.label}
            Icon={item.icon}
            onPress={() => handleNavigation(item.route)}
          />
        ))}
      </View>
    </Overlay>
  ) : null;
};

const AddItemButton = ({
  label,
  Icon,
  onPress,
}: {
  label: string;
  Icon: React.ElementType;
  onPress: () => void;
}) => {
  return (
    <View className="flex items-center flex-row w-full justify-between gap-10">
      <Text style={styles.labelText}>{label}</Text>
      <Pressable className="rounded-full bg-white p-3" onPress={onPress}>
        <Icon size={20} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backdropStyles: {
    backgroundColor: 'black',
    opacity: 0.7,
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    margin: 0,
    padding: 15,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContent: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 200,
  },
  labelText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'lexend',
  },
});

export const UpdateActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const [increment, setIncrement] = useState('');
  const handleUpdate = () => {
    setOpen(false);
    return;
  };

  return open ? (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={{backgroundColor: 'black', opacity: 0.7}}>
      <View className="p-5 rounded-lg flex justify-center items-center">
        <LabelInputField
          label="Increment"
          placeholder="50"
          required
          type="numeric"
          value={increment}
          onChangeText={setIncrement}
        />
        <PrimaryButton className="mt-5" onPress={handleUpdate}>
          Save
        </PrimaryButton>
      </View>
    </Overlay>
  ) : null;
};
