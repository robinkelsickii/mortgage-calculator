import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const DownPaymentSlider = () => {
  const [downPayment, setDownPayment] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Down Payment: ${downPayment.toLocaleString()}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1000000}
        step={10000}
        value={downPayment}
        onValueChange={(value) => setDownPayment(value)}
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
