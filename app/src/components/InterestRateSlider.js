import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { debounce } from "lodash";

const InterestRateSlider = ({ interestRate, setInterestRate }) => {
  const [tempValue, setTempValue] = useState(interestRate);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setInterestRate(value);
    }, 100),
    []
  );

  const handleSliderDrag = (value) => {
    setTempValue(value);
    handleSliderChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Interest Rate: {tempValue.toFixed(2)}%</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={20}
        step={0.1}
        value={tempValue}
        onValueChange={handleSliderDrag}
        minimumTrackTintColor="#1FB28A"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#FF6347"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 0,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 50,
  },
});

export default InterestRateSlider;
