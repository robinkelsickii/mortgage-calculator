import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const PurchasePriceSlider = ({ purchasePrice, setPurchasePrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Purchase Price: ${purchasePrice.toLocaleString()}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={50000}
        maximumValue={1500000}
        step={1000}
        value={purchasePrice}
        onValueChange={(value) => {
          setPurchasePrice(value);
          console.log("Updated Purchase Price:", value);
        }}
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
