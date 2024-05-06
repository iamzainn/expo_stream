import { View,Text, Pressable } from "react-native";
import { client } from "@/utils/KindeAuth";
import { Storage } from "@kinde-oss/react-native-sdk-0-7x";
import { router } from "expo-router";


export default function ProfileScreen() {
  const logout = async()=>{
   const logoutSuccess = await client.logout(true);
   if(logoutSuccess){
    router.replace("/");
   }
  }
  return (
    <View className="flex-1 p-3 justify-center items-center">
     <Pressable className="border-2 w-full p-2 rounded-lg" onPress={logout} ><Text className="text-center">LOGOUT</Text></Pressable>
    </View>
  )
}


