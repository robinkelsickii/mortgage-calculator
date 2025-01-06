import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { debounce } from "lodash";

const RepaymentTimeSlider = ({ repaymentTime, setRepaymentTime }) => {
  const [tempValue, setTempValue] = useState(repaymentTime);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setRepaymentTime(value);
    }, 100),
    []
  );

  const handleSliderDrag = (value) => {
    setTempValue(value);
    handleSliderChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Repayment Time: {tempValue} years</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={30}
        step={1}
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

export default RepaymentTimeSlider;
