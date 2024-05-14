
import { WhatsappHeader } from './WhatsappHeader';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Camera } from './Camera';
import { Isdo } from './lsdo';
import Status from './Status';
import Chats from './Chats';



const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <WhatsappHeader/>

       
      <Tab.Navigator
      initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: 'white', 
          tabBarInactiveTintColor: 'white', 
          tabBarStyle: { backgroundColor: '#075E55' }, 
          }}
      >
        
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Llados" component={Isdo} />
      </Tab.Navigator>
    </View>
  );
};
