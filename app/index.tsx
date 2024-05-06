import React, { useEffect, useState } from 'react'
import { View,Text, ActivityIndicator } from 'react-native'
import { Storage } from '@kinde-oss/react-native-sdk-0-7x'
import { Redirect } from 'expo-router';
import AuthScreen from '@/components/AuthScreen';

const Index = () => {
    const [token,setToken] = useState("");
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      const GetToken = async()=>{
        const token = await Storage.getAccessToken();
        console.log("token : ",token)
        if(token){
            setToken(token); 
        }
        setLoading(false)
      }
      GetToken();
    },[Storage])
    
    return (
   <View className='flex-1 justify-center'>
    {loading ? <ActivityIndicator ></ActivityIndicator>:token?<Redirect href={"/Home/"}></Redirect>:<AuthScreen></AuthScreen> }
   </View>
  )
}

export default Index
