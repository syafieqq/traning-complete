import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ProfileDetails from "../screens/ProfileDetails";
import Pokemon from "../screens/Pokemon";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile", headerTintColor: "white" }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{ title: "Profile Details" }}
      />
    </Stack.Navigator>
  );
}

function PokemonStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pokemon"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 10,
        },
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "Pokemon List" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

class Navigations extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Pokemon") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            footerTintColor: "black",
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Pokemon" component={PokemonStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigations;
