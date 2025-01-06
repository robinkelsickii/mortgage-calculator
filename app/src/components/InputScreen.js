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
    return purchasePrice - downPayment;
  };

  const calculateMonthlyPayment = (loanAmount, interestRate, repaymentTime) => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = repaymentTime * 12;
    if (r === 0) {
      return P / n;
    } else {
      return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
  };

  useEffect(() => {
    const calculatedLoanAmount = calculateLoanAmount();
    setLoanAmount(calculatedLoanAmount);
    const calculatedMonthlyPayment = calculateMonthlyPayment(
      calculatedLoanAmount,
      interestRate,
      repaymentTime
    );
    setMonthlyPayment(calculatedMonthlyPayment);
    console.log("Purchase Price:", purchasePrice);
    console.log("Down Payment:", downPayment);
    console.log("Repayment Time:", repaymentTime);
    console.log("Interest Rate:", interestRate);
    console.log("Loan Amount:", calculatedLoanAmount);
    console.log("Monthly Payment:", calculatedMonthlyPayment);
  }, [purchasePrice, downPayment, interestRate, repaymentTime]);

  const handleSubmit = () => {
    console.log("Navigating with Loan Amount:", loanAmount);
    console.log("Navigating with Monthly Payment:", monthlyPayment);
    navigation.navigate("Quote", {
      loanAmount,
      monthlyPayment,
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sliderContainer}>
          <PurchasePriceSlider
            purchasePrice={purchasePrice}
            setPurchasePrice={(value) => {
              setPurchasePrice(value);
              console.log("Updated Purchase Price:", value);
            }}
          />
          <DownPaymentSlider
            downPayment={downPayment}
            setDownPayment={(value) => {
              setDownPayment(value);
              console.log("Updated Down Payment:", value);
            }}
          />
          <RepaymentTimeSlider
            repaymentTime={repaymentTime}
            setRepaymentTime={(value) => {
              setRepaymentTime(value);
              console.log("Updated Repayment Time:", value);
            }}
          />
          <InterestRateSlider
            interestRate={interestRate}
            setInterestRate={(value) => {
              setInterestRate(value);
              console.log("Updated Interest Rate:", value);
            }}
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
