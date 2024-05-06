import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { sportProps } from '../types/tstypes';
import { router } from 'expo-router';

type SportCardProp = {
  sport: sportProps;
};

const SportCard = ({ sport }: SportCardProp) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    Image.prefetch(sport.img).then(() => setImageLoaded(true));
  }, []);

 

  return (
    <Pressable
      onPress={() => router.push(`Home/${sport.id}`)}
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        overflow: 'hidden',
      }}
    >
      <View style={{ position: 'relative' }}>
        {imageLoaded ? (
          <Image
            source={{ uri: sport.img }}
            style={{ width: '100%', height: 150, borderRadius: 10 }}
            resizeMode="cover" // Ensure image covers the entire area
          />
        ) : (
          <View style={{ width: '100%', height: 150, borderRadius: 10, backgroundColor: '#ccc' }} />
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            padding: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>{sport.name}</Text>
          
        </View>
      </View>
    </Pressable>
  );
}

;


export default SportCard;