import React from 'react'
import { View,Text,Image } from 'react-native'

export default function Sports() {
  return (
    <View style={{width:300,height:345,borderRadius:10,borderWidth:1,alignItems:"center",marginBottom:"2%"}}>
        <View style={{width:"100%",borderRadius:10,height:158,backgroundColor:"green"}}>
            <Image source={{uri:"https://th.bing.com/th?id=OIF.EJRDn4OU1KJA5I%2f5RAG34A&pid=ImgDet&rs=1"}} style={{width:"100%",height:158}}/>
        </View>

        <View style={{justifyContent:"space-evenly",alignItems:"center",display:"flex",flexDirection:"column",}}>
            <Text style={{fontSize:28,marginTop:"3%"}}>TNPL CRICKET</Text>
            <Text style={{fontSize:22,marginTop:"3%"}}>REGISTRATION ENDS IN</Text>
            <Text style={{fontSize:20,marginTop:"3%"}}>25 : 07 :2023</Text>

            <View style={{backgroundColor:"#69EABC",width:143,height:26,borderRadius:7,justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
                <Text>Register</Text>
            </View>
        </View>
        

    </View>
  )
}
