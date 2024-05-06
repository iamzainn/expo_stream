

import { sportProps } from '../types/tstypes'
import { FlatList } from 'react-native'
import SportCard from './SportCard'


type SportlistProp = {
 sportsArray : sportProps[]
}
const Sportlist = ({sportsArray}:SportlistProp) => {
  return (
   <FlatList data={sportsArray} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=><SportCard sport={item}></SportCard>}/>
  )
}

export default Sportlist