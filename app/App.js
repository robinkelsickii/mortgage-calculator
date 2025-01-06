import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import InputScreen from "./src/components/InputScreen"; // Import InputScreen
import QuoteScreen from "./src/components/QuoteScreen"; // Import QuoteScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.safeContainer}>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
