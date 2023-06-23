import React from 'react'
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function Status() {
  return (
    <View style={{justifyContent:"center",alignItems:"center",}}>
   <View style={Style.Status}>
    <Image source={{uri:"https://static.kiit.ac.in/news/2020/12/3-8.jpg"}} style={{width:70,height:70,borderRadius:50}}/>
            
   </View>

   <Text>Name</Text>
   </View>
  )
}

const Style= new StyleSheet.create({
    Status :{
      borderRadius:50,
      width:70,
      height:70,
      backgroundColor:"white",
      borderColor:"black",
      borderWidth:1.7,
      marginRight:"2%"
    }
})
