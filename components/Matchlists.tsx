import { FlatList} from "react-native"

import { matchProp } from "../types/tstypes";
import Match from "./Match";

type MatchlistsProp = {
    matches : matchProp[]
}
const Matchlists = ({matches}:MatchlistsProp) => {
  return (
    
    <FlatList
    data={matches}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({item})=><Match match={item}></Match>}
    />
  
  )
}

export default Matchlists
