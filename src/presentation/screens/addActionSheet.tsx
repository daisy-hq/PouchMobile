import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Button, Overlay } from 'react-native-elements';

type Props = {
  open: boolean;
  toggleOverlay: () => void;
};

const AddActionSheet= ({open, toggleOverlay}:Props) => {

  return (
    <Overlay isVisible={open} onBackdropPress={toggleOverlay}>
    <View >
      <Text>Hello from Overlay!</Text>
      <Button title="Close Overlay" onPress={toggleOverlay} />
    </View>
  </Overlay>
  )
}

export default AddActionSheet