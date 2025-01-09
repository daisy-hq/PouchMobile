import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {H1} from '../constants/text';
import {PrimaryButton} from '../components/button';
import {LabelInputField} from '../components/labelInputField';
import {Lock} from 'lucide-react-native';

type Props = {
  open: boolean;
  toggleOverlay: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('addGoal' as never);
    setOpen(false);
    return;
  };

  return open ? (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={{backgroundColor: 'black', opacity: 0.7}}>
      <View>
        <H1>Hello from Overlay!</H1>
        <Button title="Add goal" onPress={handleNavigation} />
      </View>
    </Overlay>
  ) : null;
};

export const UpdateActionSheet = ({open, toggleOverlay, setOpen}: Props) => {
  const handleUpdate = () => {
    setOpen(false);
    return;
  };

  return open ? (
    <Overlay
      isVisible={open}
      onBackdropPress={toggleOverlay}
      backdropStyle={{backgroundColor: 'black', opacity: 0.7}}>
      <View className="p-5 rounded-lg flex justify-center items-center32` ">
        <LabelInputField
          label="Increment"
          placeholder="**********"
          icon={<Lock color={'#9CA3AF'} size={20} />}
          required
          value={'GHS'}
          onChangeText={() => null}
        />
        <PrimaryButton className="mt-5" onPress={handleUpdate}>
          Save
        </PrimaryButton>
      </View>
    </Overlay>
  ) : null;
};
