import { Chip } from 'react-native-paper';
import { FlatList } from 'react-native';
import { leagueProps } from '../types/tstypes';
type leaguesChipsProps = {
    sportName?:string
    leagues:leagueProps[]
}


const Chips = ({sportName,leagues}:leaguesChipsProps) => {
  
  return (
    <FlatList
    contentContainerStyle={{gap:6, marginBottom:10}}
      data={leagues}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Chip  icon={sportName?.toLowerCase()} mode="outlined">
          {item.name}
        </Chip>
      )}
      horizontal={true}
    />
  )
}

export default Chips
