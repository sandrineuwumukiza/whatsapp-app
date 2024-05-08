import { View, Text, Image, ImageBackground, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { Assets } from "../constants/image"

interface ChatItem {
    Name: string;
    text: string;
    date: string;
    profile: any; 
    id: number;
  }
  

const Chat = [
    {
        Name: 'Sandrine',
        text: 'Hello Sandrine',
        date: new Date().toLocaleDateString(),
        profile:Assets.Honey,
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


export const Home = () =>{
    const renderItem = ({ item }: {item:ChatItem}) => (
        <TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
              <View style={{width: 50, height: 50, margin: 5, borderRadius: 25}}>
                <ImageBackground source={item.profile} style={{width: 50, height: 50, margin: 5, borderRadius: 25}} />
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginTop: 10, position: 'absolute'}}>{item.Name}</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 2}}>
                  <Image source={item.profile} style={{width: 18, height: 18, marginTop: 30}}/>
                  <Text style={{marginTop: 30, position: 'absolute', marginLeft: 20, fontSize: 10}}>{item.text}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{marginTop: 20, position: 'absolute'}}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    return(
        <SafeAreaView>
            <View style={{backgroundColor: '#054C44', height:30}}></View>
            <View style={{backgroundColor: '#075E55', padding:20, paddingBottom:60,flex:1,flexDirection: 'column'}}>
                <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end', alignContent:'center', alignItems:'center',marginTop:8, position:'absolute', left:30}}>
                <View style={{flex:1,flexDirection:'row', alignContent: 'center'}}>
                    <Text style={{color:'white'}}>Whatsapp</Text>
                </View>
                <View style={{flex:1,flexDirection:'row', position:'absolute', gap:10}}>
                    <View>
                        <EvilIcons name='search' color='white'/>
                    </View>
                    <View>
                        <Entypo name='dots-three-vertical' color='white'/> 
                    </View>
                    
                </View>
                </View>
                <View style={{flex:1,flexDirection:'row', position:'absolute',marginTop:48, justifyContent:'space-between', gap:70}}>
                    <TouchableOpacity>
                       <View>
                        <Feather name='camera' color='white' style={{fontSize:20,marginLeft:8}}/>
                    </View> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                        <Text style={{color:'white'}}>CHATS</Text>
                    </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                         <View>
                        <Text style={{color:'white'}}>STATUS</Text>
                    </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View>
                        <Text style={{color:'white'}}>LLADOS</Text>
                    </View>
                        </TouchableOpacity>
                      
                </View>
            </View>
            <View>

            </View>
            <FlatList
        data={Chat}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
            
        </SafeAreaView>
    )
}