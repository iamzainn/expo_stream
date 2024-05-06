import { teamProp } from "../types/tstypes"
import { View,Image,Text } from "react-native"

type teamProps = {
    team:teamProp
}

const Team = ({team}:teamProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
     <Image className='rounded-full' source={{ uri: team.img }} style={{ width: 40, height: 40, objectFit:'contain' }} />
    <Text className='text-sm font-bold mt-1'>{team.name}</Text>
 </View>
  )
}

export default Team
