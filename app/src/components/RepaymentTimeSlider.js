import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const RepaymentTimeSlider = () => {
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [tempRepaymentTime, setTempRepaymentTime] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Repayment Time: {repaymentTime} years</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={30}
        step={1}
        value={tempRepaymentTime}
        onValueChange={(value) => setTempRepaymentTime(value)}
        onSlidingComplete={(value) => setRepaymentTime(value)}
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
