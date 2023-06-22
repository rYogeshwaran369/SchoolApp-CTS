import React from 'react'
import { View,Text,StatusBar,SafeAreaView,StyleSheet, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'

const Top = StatusBar.currentHeight

export default function Forgot() {
  return (
    <SafeAreaView style={Style.safe}>
        <ScrollView>
            <View style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

                <View style={{width:"100%",}}>
                <Image source={{uri:"https://img.freepik.com/free-vector/happy-student-concept-illustration_114360-8268.jpg?w=826&t=st=1687369293~exp=1687369893~hmac=1ba51b4110415dc6ac4d4309cd58ddc76f27ffb26401949f3ea08a11c3724d9f"}} style={{width:300,height:350,display:"flex",flexDirection:"column"}}/>
                </View>

                <View style={{justifyContent:"flex-start",width:"100%",}}>
               
                <View>
                    <Text style={{textAlign:"left",fontSize:18}}>User Mail Id</Text>
                    <TextInput placeholder='Mail Id'  style={{borderWidth:1,paddingLeft:10,fontSize:15,width:"90%",height:43,marginTop:"6%",backgroundColor:"#F3F3F3",borderRadius:7}}/>
                </View>

                

                
                </View>
                

                <TouchableOpacity>
                <View style={{width:143,height:37,borderRadius:10,alignItems:"center",backgroundColor:"#D9D9D9",justifyContent:"center",marginTop:"7%"}}>
                <Text style={{fontSize:15}}>Send</Text>
                </View>
                </TouchableOpacity>

            </View>
            
    </ScrollView>
    </SafeAreaView>
  )
}

const Style = new StyleSheet.create({
    safe:{
        marginTop:Top+30,

    }
})