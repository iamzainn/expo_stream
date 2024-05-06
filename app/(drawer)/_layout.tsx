import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/CustomDrawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props)=><CustomDrawerContent props={props} ></CustomDrawerContent>} >
        <Drawer.Screen name='(tabs)' options={{
          title:"App",
          drawerLabel:"Home",
          drawerIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color} />
          )
        }}></Drawer.Screen> 
      </Drawer>
    </GestureHandlerRootView>
  );
}


