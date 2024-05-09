import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
