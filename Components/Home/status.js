import React from 'react'
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function Status() {
  return (
    <View style={{justifyContent:"center",alignItems:"center",}}>
   <View style={Style.Status}>
            
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
