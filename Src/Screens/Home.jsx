import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Welcome Screen"
        onPress={() => {
          navigation.navigate("Welcome Screen");
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
