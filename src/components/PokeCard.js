import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

export default function PokeCard({ name }) {
  return (
    <TouchableOpacity>
      <View style={styles.viewDesign}>
        <Text style={{ color: "black", fontSize: 17 }}>{name}</Text>
        <Image
          style={{ backgroundColor: "transparent", height: 30, width: 30 }}
          source={{
            url:
              "https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewDesign: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    padding: 16,
  },
});
