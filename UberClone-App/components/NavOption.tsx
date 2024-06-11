import { selectOrgin } from "@/features/navSlice";
import { useNavigation } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { Icon } from 'react-native-elements'
const data=[
    {
        id:1,
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:'MapScreen',
    },
    {
        id:2,
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"
    }
]

const NavOption:React.FC=()=>{
    const navigation=useNavigation()
    const orgin = useSelector(selectOrgin)


    return (
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            return(
                <TouchableOpacity className="p-2 pl-6 pb-8 bg-gray-200 m-2 mt-3 ml-0 w-44">
                <View>
                    <Image
                    source={{uri:item.image}}
                    style={{width:120,height:120,resizeMode:'contain'}}/>
                    <Text className="mt-2 text-lg font-semibold ml-4">{item.title}</Text>

                </View>
            </TouchableOpacity>
            )
          
        }}
        />
    )
}
export default NavOption