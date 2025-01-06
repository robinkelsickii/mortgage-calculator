import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";

const QuoteScreen = ({ route, navigation }) => {
  const { loanAmount, monthlyPayment } = route.params;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Mortgage Quote</Text>

        <View style={styles.quoteContainer}>
          <Text style={styles.label}>Loan Amount:</Text>
          <Text style={styles.value}>${loanAmount.toFixed(2)}</Text>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.label}>Monthly Payment:</Text>
          <Text style={styles.value}>${monthlyPayment.toFixed(2)}</Text>
        </View>

        <Button
          title="Back to Input"
          onPress={() => navigation.navigate("Input")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  quoteContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    color: "#555",
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default QuoteScreen;
