import React from "react";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Coding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maintContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            paddingTop: 20,
            textAlign: "center",
          }}
        >
          What Exactly is Web Development?
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#7d7d7d",
            lineHeight: 20,
            fontSize: 16,
            letterSpacing: 1,
            paddingTop: 40,
          }}
        >
          Web development is closely related to the job of designing the
          features and functionality of websites and apps (often called “web
          design”), but the “web development” term is usually reserved for the
          actual construction and programming of websites and apps. Think of all
          the websites you have used over the years – Web Developers built those
          sites, making sure they functioned properly and performed in ways that
          allowed for a great user experience. Web Developers do this by writing
          lines of code, using a variety of programming languages, which vary
          depending on the tasks they are performing and the platforms they are
          working on.
        </Text>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 30,
              textAlign: "left",
            }}
          >
            What Are the Most Common Programming Languages?
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "#7d7d7d",
              lineHeight: 20,
              fontSize: 16,
              letterSpacing: 1,
              paddingTop: 35,
            }}
          >
            The following programming languages are the basic tools involved in
            web development:
          </Text>
          <View
            style={{
              // display: "flex",
              // flexDirection: "column",
              textAlign: "left",
              paddingTop: 20,
              lineHeight: 18,
            }}
          >
            <Text style={{ fontSize: 16, color: "#7d7d7d", lineHeight: 25 }}>
              HTML (Hypertext Markup Language) {"\n"}
              CSS (Cascading Style Sheets) {"\n"}
              JavaScript
            </Text>
          </View>
        </View>
        <View style={{ padding: 40, paddingBottom: 0 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Roadmap")}>
            <Text style={styles.btnCode}>Let's Start</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ textTransform: "uppercase", paddingHorizontal: 20 }}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maintContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
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
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: "white",
  },
});
export default Coding;
