import React, { Component } from "react";
import { Button, StyleSheet, View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  render() {
    const name = "Megat Syafiq";
    return (
      <View style={styles.container}>
        <Text style={{ color: "gray", fontSize: 25 }}>My Name is: {name}</Text>
        <Button
          onPress={() =>
            Alert.alert("this is my title", "this is my description")
          }
          title="Alert"
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
          style={styles.customButton}
        >
          <Text style={styles.customText}>Go to profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    color: "gray",
    fontSize: 15,
  },
  customButton: {
    width: 120,
    backgroundColor: "lightblue",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
