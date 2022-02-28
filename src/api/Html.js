import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Html = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 25, paddingTop: 20,  paddingBottom: 10,}}>Want to learn Development?</Text>
      <Text style={{ color: '#7d7d7d', paddingBottom: 20}}>Maybe you know this is just as demo app I tried as an experiment. So thanks for your time.I hopey you like this little bit work.
      {"\n"}
      Again Thanks.
      </Text>
      <View>
      <Text style={{ color: 'black', fontSize: 17}}>Let's see How to Write code of HTML!</Text>
      <Image 
      style={ styles.headerImage }
      resizeMode= 'contain'
      source={require('../../assets/Html.png')}
      />
      <View style={{ padding: 40, paddingBottom: 0 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.btnCode}>Go Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
      },
      headerImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        display: "flex",
        alignItems: "stretch",
        borderRadius: 10,
      },
      btnCode: {
        backgroundColor: "#809fff",
        borderRadius: 4,
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        color: "#7d7d7d",
        color: "#eee",
        paddingTop: 8,
        paddingBottom: 10,
        letterSpacing: 2,
      },
});

export default Html;
