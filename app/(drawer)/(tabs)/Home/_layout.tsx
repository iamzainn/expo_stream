import { Stack } from 'expo-router'
import React from 'react'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index'
      options={{
        headerShown:false
      }}
      ></Stack.Screen>
      <Stack.Screen name='[SportId]/index'
      options={{
        headerShown:false
      }}
      ></Stack.Screen>
    </Stack>
  )
}

export default HomeLayout
