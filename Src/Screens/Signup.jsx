import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
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
