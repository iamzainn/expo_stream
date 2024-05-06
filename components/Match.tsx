import { View, Text, TouchableOpacity } from 'react-native';
import { matchProp } from '../types/tstypes';
import Team from './Team';
import { router } from 'expo-router';
import { useState } from 'react';
import { Modal } from 'react-native-paper';


const Match = ({ match }: { match: matchProp }) => {
  const [team1, team2] = match.teams.map((team) => team.teams);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20}

  return (
    <>
    <TouchableOpacity onPress={showModal} style={{ marginBottom: 16 }}>
      <View
        style={{
          padding:visible ?50:20,
          backgroundColor: '#fff',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        <View className='flex-row justify-between items-center gap-3'> 
          <Team team={team1}></Team>
          <Text className='font-extrabold text-2xl'>VS</Text>
          <Team team={team2}></Team>
        </View>
        <View className='extras flex-1 justify-between p-5'>
          
          <TouchableOpacity className='disabled:bg-slate-50' disabled={!match.avaliable} onPress={()=>router.push("/Home/Stream")}>
            <View className={`p-2 rounded-md ${match.avaliable ? 'bg-green-500' : 'bg-gray-200'}`}>
              <Text className='text-white text-center'>{match.avaliable ? "Watch now" : "Unavailable"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
   
       <Modal visible={visible}  onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text className='font-semibold w-full text-center mb-2'>Match Details</Text>
          <View className='det bg-gray-200 p-3 rounded-sm'>
            <Text className='mb-2' >Time : {new Date(match.match_datetime).toUTCString()}</Text>
            <Text>Result : {match.status.toUpperCase()}</Text>
            
          </View>
        </Modal>
       

    
    </>
    

  );
};

export default Match;