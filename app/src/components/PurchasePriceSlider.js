import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { debounce } from "lodash";

const PurchasePriceSlider = () => {
  const [purchasePrice, setPurchasePrice] = useState(50000);
  const [tempValue, setTempValue] = useState(50000);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setPurchasePrice(value);
    }, 100),
    []
  );

  const handleSliderDrag = (value) => {
    setTempValue(value); // Update the temporary value on drag
    handleSliderChange(value); // Trigger the debounced state update
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Purchase Price: ${purchasePrice.toLocaleString()}{" "}
        {/* Formatting for large numbers */}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={50000}
        maximumValue={1500000} // Adjust maximum value to allow for larger prices
        step={1000} // Larger step size for better control over large numbers
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

export default PurchasePriceSlider;
