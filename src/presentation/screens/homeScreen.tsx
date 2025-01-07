import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View className='bg-red-200'>
      <Text onPress={()=>navigation.navigate('New')}>the main home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ff0"
  },
})

export default HomeScreen