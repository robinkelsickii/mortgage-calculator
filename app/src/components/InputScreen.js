import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import PurchasePriceSlider from "./PurchasePriceSlider";
import DownPaymentSlider from "./DownPaymentSlider";
import RepaymentTimeSlider from "./RepaymentTimeSlider";
import InterestRateSlider from "./InterestRateSlider";
import { debounce } from "lodash";

const InputScreen = ({ navigation }) => {
  const initialPurchasePrice = 50000;
  const initialDownPayment = 0;
  const initialRepaymentTime = 0;
  const initialInterestRate = 0;

  const [purchasePrice, setPurchasePrice] = useState(initialPurchasePrice);
  const [downPayment, setDownPayment] = useState(initialDownPayment);
  const [repaymentTime, setRepaymentTime] = useState(initialRepaymentTime);
  const [interestRate, setInterestRate] = useState(initialInterestRate);
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

  // Use debounce to only call the calculation function after a delay
  const updateCalculations = useCallback(
    debounce(() => {
      const calculatedLoanAmount = calculateLoanAmount();
      setLoanAmount(calculatedLoanAmount);
      const calculatedMonthlyPayment = calculateMonthlyPayment(
        calculatedLoanAmount,
        interestRate,
        repaymentTime
      );
      setMonthlyPayment(calculatedMonthlyPayment);
    }, 500), // Adjust debounce delay to suit your needs
    [purchasePrice, downPayment, interestRate, repaymentTime]
  );

  useFocusEffect(
    useCallback(() => {
      updateCalculations();
    }, [updateCalculations])
  );

  const handleSubmit = () => {
    navigation.navigate("Quote", {
      loanAmount,
      monthlyPayment,
    });
  };

  const resetState = () => {
    setPurchasePrice(initialPurchasePrice);
    setDownPayment(initialDownPayment);
    setRepaymentTime(initialRepaymentTime);
    setInterestRate(initialInterestRate);
    setLoanAmount(0);
    setMonthlyPayment(0);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sliderContainer}>
          <PurchasePriceSlider
            purchasePrice={purchasePrice}
            setPurchasePrice={(value) => {
              setPurchasePrice(value);
              updateCalculations(); // Trigger calculation after value change
            }}
          />
          <DownPaymentSlider
            downPayment={downPayment}
            setDownPayment={(value) => {
              setDownPayment(value);
              updateCalculations(); // Trigger calculation after value change
            }}
          />
          <RepaymentTimeSlider
            repaymentTime={repaymentTime}
            setRepaymentTime={(value) => {
              setRepaymentTime(value);
              updateCalculations(); // Trigger calculation after value change
            }}
          />
          <InterestRateSlider
            interestRate={interestRate}
            setInterestRate={(value) => {
              setInterestRate(value);
              updateCalculations(); // Trigger calculation after value change
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
