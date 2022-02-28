import React from 'react';
import { StyleSheet, Text, Linking, View, Image, TouchableOpacity } from 'react-native';
import Menu from '../components/Menu';

const Profile = () => {
  return (
    <View style={styles.maintContainer}>
      <Text style={{fontSize: 25, fontWeight: 'bold', paddingTop: 20, alignItems: 'center', textAlign: 'center', paddingTop: 100}}>How's this? {'\n'}Give me a feedback.</Text>
      <Text style={{textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold'}}>Social Media Links.</Text>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, paddingBottom: 80}}>
      <TouchableOpacity
      onPress={() => Linking.openURL('https://twitter.com/zayynjutt01')} >
      <View>
 <Image
 style={{width: 40, height: 40}} source={{
  uri: "https://img.icons8.com/color/96/000000/twitter--v1.png" ,
 }} />
 </View>          
 </TouchableOpacity>

{/* 2 */}

<TouchableOpacity
onPress={() => Linking.openURL('https://www.instagram.com/zayyn.jutt1/')} >
<View>
<Image
style={{width: 40, height: 40}} source={{
uri: "https://img.icons8.com/fluency/48/000000/instagram-new.png" ,
}} />
</View>          
</TouchableOpacity>

{/* 3 */}

<TouchableOpacity
onPress={() => Linking.openURL('https://www.linkedin.com/in/al%C3%ACzain/')} >
<View>
<Image
style={{width: 40, height: 40}} source={{
uri: "https://img.icons8.com/cute-clipart/64/000000/linkedin.png" ,
}} />
</View>          
</TouchableOpacity>
      </View>



      <View style={{textTransform: "uppercase", paddingHorizontal: 20,}}>
      <View style={styles.lineStyle}></View>
      <Menu />
      <View style={[styles.lineStyle, {marginVertical: 10,},]}></View>

      </View>
      
    </View>
  )
};


const styles = StyleSheet.create({
  maintContainer: {
    height: "100%",
    display: "flex",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: 'white',
  }
});

export default Profile;
