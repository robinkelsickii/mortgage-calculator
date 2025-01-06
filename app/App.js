import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import PurchasePriceSlider from "./src/components/PurchasePriceSlider";
import DownPaymentSlider from "./src/components/DownPaymentSlider";
import RepaymentTimeSlider from "./src/components/RepaymentTimeSlider";
import InterestRateSlider from "./src/components/InterestRateSlider";

export default function App() {
  const [purchasePrice, setPurchasePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  const calculateLoanAmount = () => {
    setLoanAmount(purchasePrice - downPayment);
  };

  useEffect(() => {
    calculateLoanAmount();
  }, [purchasePrice, downPayment]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PurchasePriceSlider
        purchasePrice={purchasePrice}
        setPurchasePrice={setPurchasePrice}
      />
      <DownPaymentSlider
        downPayment={downPayment}
        setDownPayment={setDownPayment}
      />
      <RepaymentTimeSlider />
      <InterestRateSlider />
      <Text style={styles.label}>Loan Amount: {loanAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
});
