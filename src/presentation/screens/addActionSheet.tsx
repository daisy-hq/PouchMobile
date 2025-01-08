import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {H1} from '../constants/text';

type Props = {
  open: boolean;
  toggleOverlay: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('addGoal' as never);
    setOpen(false);
    return;
  };

  return (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={{backgroundColor: 'black', opacity: 0.7}}>
      <View>
        <H1>Hello from Overlay!</H1>
        <Button title="Add goal" onPress={handleNavigation} />
      </View>
    </Overlay>
  );
};

export default AddActionSheet;
