import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import "./global.css"
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return (
    <View className='flex justify-center items-center'>
      <SafeAreaView>
       <Text className='text-4xl'>Pouch</Text>
      </SafeAreaView>      
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    fontFamily:'Lexend-Regular'
  }
})

export default App

