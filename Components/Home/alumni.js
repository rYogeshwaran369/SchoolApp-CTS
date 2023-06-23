import React from 'react'
import { View,Text,ImageBackground,Image } from 'react-native'

export default function Alumni() {
  return (
    <View style={{marginBottom:"2%"}}>
    <ImageBackground
    source={{uri:"https://th.bing.com/th/id/OIP.GgVivFX4AsNMLn8qr3w9kgHaEi?pid=ImgDet&rs=1"}}
    style={{width:360,height:278,justifyContent:"flex-end",bordertRadius:10}} >


    <View style={{width:360,height:165,backgroundColor:"white",borderWidth:1,borderTopLeftRadius:17,borderTopRightRadius:17,}}>
    
    <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
    <View style={{width:"100%",height:100,borderRadius:50,marginTop:-50,marginLeft:"7%"}}>
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/236/236832.png?w=826&t=st=1687366160~exp=1687366760~hmac=ff0a926bdc573e88d49426ac7f1fafa9b6afef313fd919bc3ea185dd5d36bd97"}} style={{width:100,height:100,borderRadius:50}}/>
    </View>

    <View style={{display:"flex",flexDirection:"row",}}>
    
    <View style={{width:250,justifyContent:"center",alignItems:"flex-start",marginTop:"3%"}}>
        <View style={{justifyContent:"center",}}>
    <Text style={{fontSize:18,marginLeft:"20%"}}>Name</Text>
    <Text style={{marginTop:"3%",fontSize:17,marginLeft:"5%"}}>Sri krishna college of engineering and Technology</Text>
    </View>
    </View>

    <View style={{width:"27%",height:45,borderRadius:40,borderWidth:1,marginRight:"5%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14}}>2022-2024</Text>
    </View>

    </View>

    
    </View>
    <View style={{justifyContent:"center",alignItems:"center",}}>
    </View>

    </View>

    </ImageBackground>
    </View>

  )
}
