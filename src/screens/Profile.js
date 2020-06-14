import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

export default class Blog extends Component {
  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 100, height: 80, marginBottom: 18 }}
        />
        <Text>Profile screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("ProfileDetails")}
          title="Go to Profile Details"
        />
        <Button onPress={() => this.props.navigation.goBack()} title="Home" />
      </View>
    );
  }
}
