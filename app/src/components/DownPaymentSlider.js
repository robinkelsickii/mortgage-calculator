import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { debounce } from "lodash";

const DownPaymentSlider = ({ downPayment, setDownPayment }) => {
  const [tempValue, setTempValue] = useState(downPayment);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setDownPayment(value);
    }, 100),
    []
  );

  const handleSliderDrag = (value) => {
    setTempValue(value);
    handleSliderChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Down Payment: ${tempValue.toLocaleString()}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1000000}
        step={1000}
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

export default DownPaymentSlider;
