

import Sportlist from '@/components/Sportlist';
import { sportProps } from '@/types/tstypes';
import { supabase } from '@/utils/db';
import { useQuery } from '@tanstack/react-query';

import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  
  const {data:allSports} = useQuery({
    queryKey:['getSports'],
    queryFn:()=>getSports()
  })

  async function getSports():Promise<sportProps[] | undefined >{
    
  try{
   
let { data: sports, error } = await supabase
.from('sports')
.select('*')
  if(sports){
    return sports
  }
  throw new Error(error?.message);

  } catch(e){
console.log(e)
  }
   }

 
   
   
  return (
   <SafeAreaView style={{flex:1}}>
    <Sportlist sportsArray={allSports!}></Sportlist>
   </SafeAreaView>
  );
};



export default App;

