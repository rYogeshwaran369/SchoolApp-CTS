import React from 'react'
import { View,Text,Image } from 'react-native'

export default function Branch() {
  return (
    <View style={{width:314,height:98,borderWidth:1,marginBottom:"6%",borderRadius:10,backgroundColor:"#BAC4CB",justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",padding:"2%"}}>
        <View style={{width:70,height:64,borderRadius:50,borderWidth:1}}>
        <Image source={{uri:"https://wallpapercave.com/wp/wp9554504.jpg"}} style={{width:70,height:64,borderRadius:50}}/>
        </View>

       <Text style={{fontSize:17}}>B.A TAMIL</Text>

       <View style={{borderRadius:50,width:50,height:50,backgroundColor:"white",justifyContent:"center",alignItems:"center",}}>
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/20/20864.png?w=826&t=st=1687276677~exp=1687277277~hmac=98ad76db3cf80ea5bba2e310e521775b5dcbcca2f9a996717919ee73f074860e"}} style={{width:20,height:20}}/>

       </View>

    </View>
  )
}
