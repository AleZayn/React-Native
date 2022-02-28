import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Courses from "../api/Course";

const CourseDetails = ({ navigation }) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainCard}>
        <View style={styles.courseCard}>
          <View>
            <Image
              style={styles.cardImg}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.maintitle}>{item.title}</Text>

          <Text style={styles.maindescription}>{item.description}</Text>

          <View style={styles.cardButton}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("HTML")}
            >
              <Text style={styles.btnstyle}>Course Details</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Courses}
        keyExtractor={(item) => item.id}
        renderItem={courseCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  courseCard: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  maintitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 0,
    paddingBottom: 15,
    color: "#344055",
  },
  maindescription: {
    color: "#7d7d7d",
    lineHeight: 20,
    textAlign: "left",
    paddingBottom: 20,
    fontSize: 16,
  },
  cardImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5,
  },
  cardButton: {
    alignItems: "center",
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#809fff",
    borderRadius: 4,
  },
  btnstyle: {
    color: "#eee",
    letterSpacing: 2,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CourseDetails;
