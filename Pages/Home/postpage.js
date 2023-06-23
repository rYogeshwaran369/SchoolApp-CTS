import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, Image } from 'react-native';
import HamburgerMenu from '../../Components/Home/hamburger';
import Status from '../../Components/Home/status';
import Post from '../../Components/Home/post';

const Top = StatusBar.currentHeight;

export default function PostPage() {
  return (
    <SafeAreaView style={{ marginTop: Top, width: '100%', justifyContent: 'center', alignItems: 'center',height:"100%" }}>

      {/* Top Bar */}
      <View style={{ height: 55, borderWidth: 1, width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: '2%' }}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/633/633816.png?w=826&t=st=1687460200~exp=1687460800~hmac=5b2a5a227c208d2af9cfed858b3b0b4cd792d1229545a4da8e2a63fe908bb13e' }} style={{ width: 30, height: 30, marginRight: 'auto' }} />
        <Text style={{ fontSize: 20 }}>City Name</Text>
        <View style={{zIndex:3,marginLeft:"auto"}}>
        <HamburgerMenu />
        </View>
      </View>

      {/* Status */}
      <View style={{display:"flex" ,flexDirection:"row", borderBottomWidth: 1 ,zIndex:-2}}>
        <ScrollView horizontal={true} style={{width:"100%"}} >
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
        </ScrollView>
      </View>

      <View style={{ flex: 1, borderBottomWidth: 1,zIndex:-2 }}>
        <ScrollView>
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}
