import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Games from "./src/screens/Games";
import Coding from "./src/screens/Coding";
import Profile from "./src/screens/Profile";
import CourseDetails from "./src/screens/CourseDetails";
import Html from './src/api/Html';

export default function App() {

  {/* navigations */}
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* Home Screen */}
      <Stack.Navigator initialRouteName="Home">
        {/*<Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home" options={{
          headerShown: false,
        }}>
          {(props) => <Home {...props} gitHub={"Git Hub"} />}
        </Stack.Screen>

        {/* Games Screen */}
                <Stack.Screen name="Games" component={Games}
                options={{
                  headerTitleAlign: 'center'
                }} /> 
        {/* Codin Screen */}
                <Stack.Screen name="Programming" component={Coding} 
                options={{
                  headerTitleAlign: 'center'
                }}/>
        {/* Profiel Screen */}
        <Stack.Screen name="Profile" component={Profile}
        options={{
          headerTitleAlign: 'center'
        }} />
         {/* crsdtls Screen */}
         <Stack.Screen name="Roadmap" component={CourseDetails}
         options={{
           headerTitleAlign: 'center'
         }} /> 
         {/* html Screen */}
         <Stack.Screen name="HTML" component={Html}
         options={{
           headerTitleAlign: 'center',
           headerShown: false,

         }} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
