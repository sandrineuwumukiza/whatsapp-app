    import { useState } from "react"
    import { View, Text, Image, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, TextInput, ScrollView, useWindowDimensions } from "react-native"
    import { useNavigation } from "@react-navigation/native"
    import { createNativeStackNavigator } from "@react-navigation/native-stack"
    import EvilIcons from 'react-native-vector-icons/EvilIcons'
    import Entypo from 'react-native-vector-icons/Entypo'
    import Status from "./Status"
    import Feather from 'react-native-vector-icons/Feather'
    import { NativeStackScreenProps } from "@react-navigation/native-stack"
    import { TabView, SceneMap } from 'react-native-tab-view';

    // import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
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
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:1
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Honey,
            id:2
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Honey,
            id:3
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Honey,
            id:4
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Honey,
            id:5
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Honey,
            id:6
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:7
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:8
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:9
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:10
        },
        {
            Name: 'Sandrine',
            text: 'Hello Sandrine',
            smsaNumber: 1,
            date: new Date().toLocaleDateString(),
            profile:Assets.Profile,
            id:11
        },
    ]

    // type RootStackParamList = {
    //     Home: undefined;
    //     Status: { userId: string };
    //     Feed: { sort: 'latest' | 'top' } | undefined;
    // };
    
    // type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

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
                <Text style={{ color: 'white', fontSize: 12, marginTop: 5,backgroundColor:'green',borderRadius:50,width:15,marginLeft:20,alignItems:'center' }}>{item.smsaNumber}</Text>
                <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            ))}
          </ScrollView>
        );
      };
      
      
      
      
      const StatusScene = () => (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <Text>Status</Text>
                <View>
                <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, overflow: 'hidden' }}>
        <ImageBackground source={Assets.profile} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
          </View>
                    
                    <View><Text>My Status</Text></View>
                </View>

            </View>
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


    
    export const Home = () => {
        const [isSearchVisible, setIsSearchVisible] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        
        const layout = useWindowDimensions();
        const [index, setIndex] = useState(0);
    
        // const navigation = useNavigation<Props>();
    
        const toggleSearchVisibility = () => {
            setIsSearchVisible(!isSearchVisible);
        };
    
        return(
            <>
                <View style={{backgroundColor: '#054C44', height:30}}></View>
                <View style={{backgroundColor: '#075E55', height:40,padding:20}}>
                <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end', alignContent:'center', alignItems:'center',marginTop:8, position:'absolute', left:30}}>
                    <View style={{flex:1,flexDirection:'row', alignContent: 'center'}}>
                        <Text style={{color:'white'}}>Whatsapp</Text>
                    </View>
                  <View style={{flex:1, flexDirection:'row', position:'absolute', gap:10}}>
                        {isSearchVisible? (
                            <TextInput
                                style={{height: 30, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={text => setSearchQuery(text)}
                                value={searchQuery}
                            />
                        ) : (
                            <EvilIcons name='search' color='white' onPress={toggleSearchVisibility}/>
                        )}
                        <View>
                            <Entypo name='dots-three-vertical' color='white'/> 
                        </View>
                    </View>
                
                    </View>
                    </View>

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
                    
                
            </>
        )
    }