import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Assets } from "../constants/image";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface ChatItem {
  Name: string;
  text: string;
  date: string;
  profile: any; 
  id: number;
  countMessage?: number;
}

export const Chat = [
  {
    Name: 'Sandrine',
    text: 'Typing',
    countMessage:1,
    date: new Date().toLocaleDateString(),
    profile: Assets.Profile,
    id: 1
  },
  {
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    countMessage:3,
    date: new Date().toLocaleDateString(),
    profile: Assets.Honey,
    id: 2
  },
  {
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    date: new Date().toLocaleDateString(),
    profile:Assets.Honey,
    id:2
},
{
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    date: new Date().toLocaleDateString(),
    profile:Assets.Honey,
    id:3
},
{
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    date: new Date().toLocaleDateString(),
    profile:Assets.Honey,
    id:4
},
{
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    date: new Date().toLocaleDateString(),
    profile:Assets.Honey,
    id:5
},
{
    Name: 'Sandrine',
    text: 'Hello Sandrine',
    countMessage:1,
    date: new Date().toLocaleDateString(),
    profile:Assets.Honey,
    id:6
},
{
  Name: 'Sandrine',
  text: 'Hello Sandrine',
  countMessage:1,
  date: new Date().toLocaleDateString(),
  profile: Assets.Profile,
  id: 7
},
{
  Name: 'Sandrine',
  text: 'Hello Sandrine',
  countMessage:1,
  date: new Date().toLocaleDateString(),
  profile: Assets.Profile,
  id: 8
},
{
  Name: 'Sandrine',
  text: 'Hello Sandrine',
  countMessage:1,
  date: new Date().toLocaleDateString(),
  profile: Assets.Profile,
  id: 9
},
{
  Name: 'Sandrine',
  text: 'Hello Sandrine',
  countMessage:1,
  date: new Date().toLocaleDateString(),
  profile: Assets.Profile,
  id: 10
},
];

const Chats = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {Chat.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => console.log('Chat item pressed')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#fff0' }}>
              <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, overflow: 'hidden' }}>
                <ImageBackground source={item.profile} style={{ width: '100%', height: '100%' }}>
                </ImageBackground>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{item.Name}</Text>
                <Text style={{ color: index === 0 ? 'green' : 'black', fontSize: 10 }}>{item.text}</Text>
              </View>
              <View>
              {item.countMessage? (<View style={{ width: 15, height: 15, backgroundColor: 'green', borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginLeft:30 }}>
              
               <Text style={{ color: 'white', fontSize: 12 }}>{item.countMessage}</Text>
                   
                   </View>
                   ) : null}

                <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ width:40, height:40, backgroundColor:'green',borderRadius:10, alignItems:"center",justifyContent:'center', right:25,position:'absolute', bottom:70}}>
        <MaterialCommunityIcons name='message-plus' color='white'/>
      </View>
    </View>
  );
}

export default Chats;
