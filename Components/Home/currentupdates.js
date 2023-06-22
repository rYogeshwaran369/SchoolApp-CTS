import React from 'react'
import { View,Text,Image } from 'react-native'

export default function CurrentUpdates() {
  return (
    <View style={{width:360,height:301,backgroundColor:"#D8E3EB",borderWidth:1,marginBottom:"1%"}}>
        <View style={{width:325,height:226,backgroundColor:"green",margin:15}}>
          <Image source={{uri:"https://1.bp.blogspot.com/-0NNzoOXnmpA/X1ZZP_TY9XI/AAAAAAAAYHk/jNuWe5eSKrkXEpw_1qPkkGkzPnxrPYKngCLcBGAsYHQ/w1200-h630-p-k-no-nu/Neuralink%2BElon%2BMusk%2BBrain%2BComputer%2BInterface%2BLogo.jpg"}} style={{width:325,height:226}}/>

        </View>

        <View style={{justifyContent:"center",alignItems:"center",width:360}}>
          <Text style={{fontSize:17,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            Elon Got a Approval AI CHIP 
          </Text>
        </View>

    </View>
  )
}
