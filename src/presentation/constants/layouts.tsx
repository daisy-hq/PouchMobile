import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const BaseLayout = ({children}:any) => {
  return (
    <View className='flex-1 p-4'>
        {children} 
    </View>
  )
}


export const AuthLayout = ()=>{
    return(
        <></>
    )
}
