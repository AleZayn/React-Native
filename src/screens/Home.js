import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Linking } from 'react-native';
import Menu from '../components/Menu';

const Home = (props) => {

  const description =
  "This is a simple React Native App. I tried some best for me but I think this is not an perfect. Anyway, I hope you'll enjoy it as a beginner. Click on Github text and get code from my git profile. I add few games and programming language for some experiment. In this code I wrote nav and button in easy way. Hit like and follow me for more free coding material.";

  return (
    <View style={styles.mainContainer}>
    <ScrollView 
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/banner.jpg")}
        />
        <Text
          style={{ fontSize: 25, textTransform: "uppercase", color: "#344055" }}
        >
          Welcome to ReactApp
        </Text>
        <Text style={{ fontSize: 33, fontWeight: "bold", paddingTop: 5 }}
        onPress={() => Linking.openURL('https://github.com/AleZayn')}
        >
          {props.gitHub}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      </ScrollView>
      <View style={{textTransform: "uppercase", paddingHorizontal: 20,}}>
      <View style={styles.lineStyle}></View>
      <Menu />
      <View style={[styles.lineStyle, {marginVertical: 10,},]}></View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginTop: 0,
    display: "flex",
    alignItems: "stretch",
    borderRadius: 20,
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 25,
    paddingBottom: 50,
    lineHeight: 24,
  },
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: 'white',
  }
});


export default Home;
