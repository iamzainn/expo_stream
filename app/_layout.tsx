import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Slot} from 'expo-router';
import { Storage } from '@kinde-oss/react-native-sdk-0-7x'

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(Drawer)',
};


SplashScreen.preventAutoHideAsync();
export default  function RootLayout(){
   const [loaded, error] = useFonts
   
   ({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }  

  }, [loaded]);


  if (!loaded) {
    return null;
  }
  return  <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <Slot></Slot>
    </QueryClientProvider>
  );
}
