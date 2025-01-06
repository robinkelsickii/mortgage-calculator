import React, { useState } from "react";
import { Styleheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const PurchasePriceSlider = () => {
  const [purchasePrice, setPurchasePrice] = useState(50000);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Purchase Price: ${purchasePrice.toLocaleString()}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={50000}
        maximumValue={10000000}
        step={1000}
        value={purchasePrice}
        onValueChange={(value) => setPurchasePrice(value)}
        minimumTrackTintColor="#1FB28A"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#1FB28A"
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
    width: "100%",
    height: 40,
  },
});

export default PurchasePriceSlider;
