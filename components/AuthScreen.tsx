
import { client } from '../utils/KindeAuth'
import { useState } from 'react';
import {View , Alert,Text, Pressable, ActivityIndicator} from 'react-native';
import { router} from 'expo-router';
const AuthScreen = () => {
 const [isLoading,setIsLoading] = useState(false);
    const handleAuth = async () => {
      setIsLoading(true);
        try{
          const login = await client.login();
          if (login){
             router.replace("/")
          }
        }catch(e){
         Alert.alert((e as Error).message)
        }
        finally{setIsLoading(false)}
       
      };
    
    
      
  
  return (

   
        <View className='btn mb-28 w-full px-3'>
        <Pressable className={`bg-white w-full p-3 rounded-lg disabled:bg-gray-300`} onPress={handleAuth} disabled={isLoading}>
          <Text className={`text-black font-bold text-center`}>
            {isLoading?<ActivityIndicator size={"small"} color={"black"}></ActivityIndicator>:"Login"}
          </Text>
        </Pressable>
        
        </View>

  )

  }
export default AuthScreen