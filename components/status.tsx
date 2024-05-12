import React, { useEffect, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { View, Text, useWindowDimensions, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import { Assets } from "../constants/image"




interface ChatItem {
  Name: string;
  text: string;
  date: string;
  profile: any; 
  id: number;
}

// type RootStackParamList = {
//     Home: undefined;
//    Status: String;
//   };

//   type Props = NativeStackScreenProps<RootStackParamList, 'Status'>;

const Chat = [
  {
      Name: 'Sandrine',
      text: 'Hello Sandrine',
      date: new Date().toLocaleDateString(),
      profile:Assets.Profile,
      id:1
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
      date: new Date().toLocaleDateString(),
      profile:Assets.Honey,
      id:6
  }
]



const routes = [
  { key: 'camera', title: 'Camera' },
  { key: 'chats', title: 'Chats' },
  { key: 'status', title: 'Status' },
  { key: 'llados', title: 'Llados' },
];

// Define your scenes
const CameraScene = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
    <Text>Hello Camera</Text>
  </View>
);

const ChatsScene = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {Chat.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => console.log('Chat item pressed')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#fff0' }}>
        <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, overflow: 'hidden' }}>
      <ImageBackground source={item.profile} style={{ width: '100%', height: '100%' }}>
      </ImageBackground>
        </View>
          <View style={{ flex: 1 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>{item.Name}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{item.text}</Text>
          </View>
          <View>
          <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>{item.date}</Text>
          <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      ))}
    </ScrollView>
  );
};




const StatusScene = () => (
  <View style={{ flex: 1, backgroundColor: '#f44336' }}>
    <Text>Hello Status</Text>
  </View>
);

const LladosScene = () => (
  <View style={{ flex: 1, backgroundColor: '#2196f3' }}>
    <Text>Hello Sandrine</Text>
  </View>
);

// Map your scenes to routes
const renderScene = SceneMap({
  camera: CameraScene,
  chats: ChatsScene,
  status: StatusScene,
  llados: LladosScene,
});



const Status = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ flex: 1 }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 48, gap: 70 }}>
        {routes.map((route, index) => (
          <TouchableOpacity key={route.key} onPress={() => setIndex(index)}>
            <View>
              {route.key === 'camera'? (
                <Feather name="camera" color="white" size={20} />
              ) : (
                <Text style={{ color: 'white' }}>{route.title}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </TabView>
  );
}

export default Status;


// const isTyping = useSharedValue(false);

//   // Simulate typing state change
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       isTyping.value = true;
//     }, 5000); // Change typing state after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const animatedIconStyle = useAnimatedStyle(() => {
//     return {
//       opacity: isTyping.value? 1 : 0.5, // Example animation, adjust as needed
//     };
//   });

//   return (
//     <View removeClippedSubviews={false}>
//       <View style={animatedIconStyle}>
//         {isTyping.value? (
//           <Ionicons name="send" size={16} color="light.white" />
//         ) : (
//           <FontAwesome5
//             name="microphone"
//             size={16}
//             color="light.white"
//           />
//         )}
//       </View>
//     </View>
//   );
// };