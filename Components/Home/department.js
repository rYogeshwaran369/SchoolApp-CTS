import React from 'react';
import { View, Text, ImageBackground, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Department() {
  const navigation = useNavigation();

  const handleCareer = () => {
    navigation.navigate('DepartmentPage');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:"https://th.bing.com/th/id/OIP.GHl1lOzPW6Fh79B8n7NLMAHaE5?pid=ImgDet&rs=1"}}
        style={styles.career}
        imageStyle={styles.backgroundImageStyle}
      >
       <Text style={{fontSize:20,fontWeight:"bold",marginTop:"2%",backgroundColor:"white",width:200,textAlign:'center',borderRadius:8}}>ARTS AND SCIENCE</Text>

    <TouchableOpacity  style={{borderRadius:50,width:50,height:50,backgroundColor:"white",justifyContent:"center",alignItems:"center",marginTop:'7%',marginLeft:'auto',margin:10}} onPress={handleCareer}>
       <View>
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/20/20864.png?w=826&t=st=1687276677~exp=1687277277~hmac=98ad76db3cf80ea5bba2e310e521775b5dcbcca2f9a996717919ee73f074860e"}} style={{width:20,height:20}}/>
       </View>
       </TouchableOpacity>
       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImageStyle: {
    opacity: 0.5,
    borderRadius:10
  },
  career: {
    width: 330,
    height: 170,
    borderWidth: 1,
    borderColor: 'black',
    margin: '4%',
    borderRadius: 10,
    justifyContent:"flex-start",
    alignItems:"center"
  },
});
