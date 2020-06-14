import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

export default class Blog extends Component {
  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Detail screen</Text>
      </View>
    );
  }
}
