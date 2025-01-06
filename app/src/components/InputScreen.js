import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import PurchasePriceSlider from "./PurchasePriceSlider";
import DownPaymentSlider from "./DownPaymentSlider";
import RepaymentTimeSlider from "./RepaymentTimeSlider";
import InterestRateSlider from "./InterestRateSlider";

const InputScreen = ({ navigation }) => {
  const [purchasePrice, setPurchasePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoanAmount = () => {
    setLoanAmount(purchasePrice - downPayment);
  };

  const calculateMonthlyPayment = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = repaymentTime * 12;
    if (r === 0) {
      setMonthlyPayment(P / n);
    } else {
      const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(M);
    }
  };

  useEffect(() => {
    calculateLoanAmount();
  }, [purchasePrice, downPayment]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [loanAmount, interestRate, repaymentTime]);

  const handleSubmit = () => {
    navigation.navigate("Quote", { monthlyPayment, loanAmount });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sliderContainer}>
          <PurchasePriceSlider
            purchasePrice={purchasePrice}
            setPurchasePrice={setPurchasePrice}
          />
          <DownPaymentSlider
            downPayment={downPayment}
            setDownPayment={setDownPayment}
          />
          <RepaymentTimeSlider
            repaymentTime={repaymentTime}
            setRepaymentTime={setRepaymentTime}
          />
          <InterestRateSlider
            interestRate={interestRate}
            setInterestRate={setInterestRate}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Get a Mortgage Quote!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  sliderContainer: {
    width: "100%",
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

export default InputScreen;
