import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import TabNav from "../Navigation/TabNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from "./Signup";
import Signin from "../Screens/Signin";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Welcome from "./Welcome";
import Cart from "./Cart";
import Payment from "./Payment";

export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="payment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Welcome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
