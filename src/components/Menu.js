import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () =>{
    const navigation = useNavigation();
    return <View style={styles.menuContainer}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Games')}
      >
      {/*<Text>Games</Text>*/}
      <Image 
      style={styles.iconStyle}
      source={{
          uri: "https://img.icons8.com/color/50/000000/play-games.png" ,
      }}
      />
      </TouchableOpacity>

      {/* coding */}
      <TouchableOpacity
      onPress={() => navigation.navigate('Programming')}
      >
    {/*<Text>Coding</Text>*/}

    <Image 
    style={styles.iconStyle}
    source={{
        uri: "https://img.icons8.com/external-flat-juicy-fish/60/000000/external-code-web-developer-flat-flat-juicy-fish-2.png",
    }}
    />
      </TouchableOpacity>

       {/* profile */}
      <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      >
       {/*<Text>Profile</Text>*/}

       <Image 
    style={styles.iconStyle}
    source={{
        uri: "https://img.icons8.com/dusk/64/000000/cat-profile.png",
    }}
    />
       
      </TouchableOpacity>
        </View>
   
};

const styles = StyleSheet.create({

    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    iconStyle: {
        width: '100%',
        height: 30,
        aspectRatio: 1,
    },
    
});

export default Menu;