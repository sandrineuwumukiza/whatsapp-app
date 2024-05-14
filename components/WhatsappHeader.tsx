

import { ScrollView } from "react-native-gesture-handler"
import { useState } from "react"
import { Text, View, TextInput, useWindowDimensions } from "react-native"
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Status from "./Status"
import Feather from 'react-native-vector-icons/Feather'


export const WhatsappHeader = () =>{

    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    // const navigation = useNavigation<Props>();

    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible);
    };
    return(
        <View>
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
        </View>
    )
}