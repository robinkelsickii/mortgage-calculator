import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const PurchasePriceSlider = () => {
  const [purchasePrice, setPurchasePrice] = useState(50000);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Purchase Price: ${purchasePrice.toLocaleString()}{" "}
        {/* Formatting for large numbers */}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={50000}
        maximumValue={100000000} // Adjust maximum value to allow for larger prices
        step={10000} // Larger step size for better control over large numbers
        value={purchasePrice}
        onValueChange={(value) => setPurchasePrice(value)}
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
    padding: 20,
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
