import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const QuoteScreen = ({ route, navigation }) => {
  const { loanAmount, monthlyPayment } = route.params || {};

  // Fallback values in case params are not available
  const displayLoanAmount = loanAmount
    ? loanAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "N/A";
  const displayMonthlyPayment = monthlyPayment
    ? monthlyPayment.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "N/A";

  const handleBackToInput = () => {
    navigation.navigate("Input", { reset: true });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Mortgage Quote</Text>

        <View style={styles.quoteContainer}>
          <Text style={styles.label}>Loan Amount:</Text>
          <Text style={styles.value}>${displayLoanAmount}</Text>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.label}>Monthly Payment:</Text>
          <Text style={styles.value}>${displayMonthlyPayment}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBackToInput}>
          <Text style={styles.buttonText}>Back to Calculator</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
    color: "#1FB28A",
    marginBottom: 20,
  },
  quoteContainer: {
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    color: "#555",
    fontWeight: "bold",
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1FB28A",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QuoteScreen;
