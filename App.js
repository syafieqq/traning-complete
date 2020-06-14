import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import ProfileDetails from "./src/screens/ProfileDetails";
import Pokemon from "./src/screens/Pokemon";
import Navigations from "./src/navigations/Navigations";

export default function App() {
  return <Navigations />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
