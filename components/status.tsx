import React, { useEffect, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View, Text, useWindowDimensions, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Assets } from "../constants/image"




interface ChatItem {
  Name: string;
  text: string;
  date: string;
  profile: any; 
  id: number;
}

function calculateTimeDifference(currentTime: Date, pastTime: Date): string {
  const pastDate = new Date(pastTime);
  const currentDate = new Date(currentTime);

  const pastDateNumeric = pastDate.getTime();
  const currentDateNumeric = currentDate.getTime();

  const diffInSeconds = Math.floor((currentDateNumeric - pastDateNumeric) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours > 0) {
    return `${diffInHours} hours ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minutes ago`;
  } else {
    return 'Just now';
  }
}


const Chat = [
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T10:30:00.000Z'), new Date()),
      profile:Assets.Profile,
      id:1
  },
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T20:30:00.000Z'), new Date()),
      profile:Assets.Honey,
      id:2
  },
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T20:50:00.000Z'), new Date()),
      profile:Assets.Honey,
      id:3
  },
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T21:30:00.000Z'), new Date()),
      profile:Assets.Honey,
      id:4
  },
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T22:30:00.000Z'), new Date()),
      profile:Assets.Honey,
      id:5
  },
  {
      Name: 'Sandrine',
      text: calculateTimeDifference(new Date('2024-05-13T23:30:00.000Z'), new Date()),
      profile:Assets.Honey,
      id:6
  },
 
]

const Status = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={{ margin: 20 }}>
      <Text style={{ marginLeft: 10 }}>Status</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
        <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, overflow: 'hidden' }}>
          <ImageBackground source={Assets.Profile} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={{ position: 'absolute', marginLeft: 60 }}><Text>My Status</Text></View>
      </View>
      <Text style={{ marginTop: 20, marginLeft:8 }}>Recent Updates</Text>
      
        {Chat.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => console.log('Chat item pressed')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: '#fff0',right:10,top:10 }}>
              <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, overflow: 'hidden' }}>
                <ImageBackground source={item.profile} style={{ width: '100%', height: '100%' }} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{item.Name}</Text>
                <Text style={{ color: 'black', fontSize: 10 }}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      
      <View style={{ width:30, height:30, backgroundColor:'grey',borderRadius:10, alignItems:"center",justifyContent:'center', right:25,position:'absolute',bottom:60}}>
        <Ionicons name='pencil' color='white' style={{fontSize:15}}/>
      </View>
      <View style={{ width:35, height:35, backgroundColor:'green',borderRadius:10, alignItems:"center",justifyContent:'center', right:25,position:'absolute', bottom:15}}>
        <MaterialCommunityIcons name='camera' color='black' style={{fontSize:15}}/>
      </View>
    </View>
    </ScrollView>
 
   
  );
}

export default Status;

