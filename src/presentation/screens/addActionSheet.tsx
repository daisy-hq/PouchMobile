import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  CircleDollarSign,
  Goal,
  NotebookText,
  ReceiptText,
} from 'lucide-react-native';

type Props = {
  open: boolean;
  toggleOverlay: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const navigation = useNavigation();

  return open ? (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={styles.backdropStyles}
      overlayStyle={styles.overlayContainer}>
      <View style={styles.modalContent}>
        <AddItemButton
          label="Add Expense"
          Icon={ReceiptText}
          onPress={() => {
            navigation.navigate('addExpense' as never);
            setOpen(false);
          }}
        />
        <AddItemButton
          label="Add Goal"
          Icon={Goal}
          onPress={() => {
            navigation.navigate('addGoal' as never);
            setOpen(false);
          }}
        />
        <AddItemButton
          label="Add Income"
          Icon={CircleDollarSign}
          onPress={() => {
            navigation.navigate('addIncome' as never);
            setOpen(false);
          }}
        />
        <AddItemButton
          label="Add Budget"
          Icon={NotebookText}
          onPress={() => {
            navigation.navigate('addBudget' as never);
            setOpen(false);
          }}
        />
      </View>
    </Overlay>
  ) : null;
};

export default AddActionSheet;

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
    // borderRadius: 10,
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
    // backgroundColor: 'green',
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
