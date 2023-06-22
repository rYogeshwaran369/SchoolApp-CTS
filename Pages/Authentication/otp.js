import React from 'react'
import { View,Text,StatusBar,SafeAreaView,StyleSheet, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'

const Top = StatusBar.currentHeight

export default function Otp() {
  return (
    <SafeAreaView style={Style.safe}>
        <ScrollView>
            <View style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

                <View style={{width:"100%",}}>
                <Image source={{uri:"https://img.freepik.com/free-vector/happy-student-concept-illustration_114360-8268.jpg?w=826&t=st=1687369293~exp=1687369893~hmac=1ba51b4110415dc6ac4d4309cd58ddc76f27ffb26401949f3ea08a11c3724d9f"}} style={{width:300,height:350,display:"flex",flexDirection:"column"}}/>
                </View>

                <View style={{justifyContent:"flex-start",width:"100%",}}>
               
                <View>
                    <Text style={{textAlign:"left",fontSize:18}}>Enter OTP</Text>
                    <View style={{alignItems:"center",marginTop:"7%"}}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"70%",alignItems:"center",alignContent:"center"}}>
                    <TextInput placeholder='0'  style={{borderWidth:1,fontSize:15,width:42,height:42,marginTop:"6%",backgroundColor:"#F3F3F3",borderRadius:7,textAlign:"center"}}/>
                    <TextInput placeholder='0'  style={{borderWidth:1,fontSize:15,width:42,height:42,marginTop:"6%",backgroundColor:"#F3F3F3",borderRadius:7,textAlign:"center"}}/>
                    <TextInput placeholder='0'  style={{borderWidth:1,fontSize:15,width:42,height:42,marginTop:"6%",backgroundColor:"#F3F3F3",borderRadius:7,textAlign:"center"}}/>
                    <TextInput placeholder='0'  style={{borderWidth:1,fontSize:15,width:42,height:42,marginTop:"6%",backgroundColor:"#F3F3F3",borderRadius:7,textAlign:"center"}}/>
                    </View>
                    </View>
                </View>
                </View>
                

                <TouchableOpacity>
                <View style={{width:143,height:37,borderRadius:10,alignItems:"center",backgroundColor:"#D9D9D9",justifyContent:"center",marginTop:"13%"}}>
                <Text style={{fontSize:15}}>Verify</Text>
                </View>
                </TouchableOpacity>

            </View>
            
    </ScrollView>
    </SafeAreaView>
  )
}

const Style = new StyleSheet.create({
    safe:{
        marginTop:Top,

    }
})