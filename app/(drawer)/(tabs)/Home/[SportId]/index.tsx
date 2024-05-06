import { ActivityIndicator, View, } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllMatches, getAllleagues } from '@/utils/functions';
import Chips from '@/components/leaguesChips';
import Matchlists from '@/components/Matchlists';

export default function SportDetailsPage() {
  const { SportId } = useLocalSearchParams();
  
  const [currentLeagueId, setCurrentLeagueId] = React.useState(1);  
  const {data:allLeagues} = useQuery({
    queryKey:['getLeagues'],
    queryFn:()=>getAllleagues(SportId as string),
   })
    const {data:allMatches,isLoading} = useQuery({
      queryKey:['getSportsMatches'],
      queryFn:()=>getAllMatches(SportId as string,currentLeagueId.toString()),
    })
 
  return (
    <SafeAreaView style={{padding:10, height:"auto"}} p-3 >
      <View style={{marginBottom:7}} >
      <Chips leagues={allLeagues!}></Chips>
      </View>
      {isLoading?<ActivityIndicator className='flex-1 justify-center items-center' size={"small"}></ActivityIndicator>:
     <Matchlists matches={allMatches!}></Matchlists>}
    </SafeAreaView>
  )
}