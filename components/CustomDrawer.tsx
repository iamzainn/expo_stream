import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const CustomDrawerContent = ({props}:{props:DrawerContentComponentProps})=>{
    const pathname = usePathname();
    console.log("Drawer path : " , pathname)
      return (
      <DrawerContentScrollView  {...props}>
          <DrawerItem  key={"home"}  
          icon={({color,size})=><Ionicons name="home" size={size} color={color} />}
          label={"Home"}
           style={{backgroundColor : pathname ==='/Home'?"#2fe067":"#fff"}}
           onPress={()=>router.push("/Home/")}
           
          ></DrawerItem>
          <DrawerItem  key={"two"} 
          icon={({color,size})=><Ionicons name="people" size={size} color={color} />}
          label={"Profile"}
           style={{backgroundColor : pathname ==='/profile'?"#2fe067":"#fff"}}
           onPress={()=>router.push("/profile")}
          ></DrawerItem>      
      </DrawerContentScrollView>
      
    )
  }
  export default CustomDrawerContent;