import React from 'react'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View,Text,Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Post() {
  return (
    <SafeAreaView style={{}}>   
         <View style={Style.profile}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
           
            <View style={{display:'flex',flexDirection:"row",alignItems:"center"}}>
                    <View style={{borderRadius:50,borderColor:"black",width:50,height:50}}>
                        <Image source={{uri:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=826&t=st=1687275163~exp=1687275763~hmac=385a4d4974d943dbd4debb1e7e091f38996e6dfd913c9aa4c4bc41ce931d27fd"}} style={{borderRadius:50,width:48,height:48}}/>
                    </View>
                    <Text style={{marginLeft:"5%",fontSize:17}}>Name</Text>
            </View>
           <Text>
                    @School
           </Text>
        </View>

        <View style={{justifyContent:"center",alignItems:"center",marginTop:"3%",margin:"1%"}}>
           
            <Text style={{fontSize:15}}>Today Annual day function in our school</Text>
           
            <View style={{width:330,height:280,backgroundColor:"black",marginTop:"3%",borderWidth:1}}>
                <Image source={{uri:'https://static.kiit.ac.in/news/2020/12/3-8.jpg'}} style={{width:330,height:280}}/>
            </View>
        </View>

        <View style={{marginTop:"3%"}}>
           
            <Text style={{fontSize:17}}>100likes</Text>
            
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", width:"23%",marginTop:'2%',alignItems:"center"}}>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/833/833472.png?w=826&t=st=1687268448~exp=1687269048~hmac=aaaf177ebccfcd92d6e27f13bd3d51343ecc95a0035dd6655f92148d850ea566"}} style={{width:30,height:27}}/>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/638/638822.png?w=826&t=st=1687270007~exp=1687270607~hmac=ee65ba6d5e32225bbcf421c324a39d0f50fb8f968114ef5e807ed50983715ff7"}} style={{width:30,height:27}}/>

            </View>

        </View>


    </View>
    </SafeAreaView>

  )
}

const Style = new StyleSheet.create({
    profile : {
        height:460,
        width:'100%',
        padding:10,
        borderWidth:1,
    }
})