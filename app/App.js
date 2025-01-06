import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PurchasePriceSlider from "./src/components/PurchasePriceSlider";
import DownPaymentSlider from "./src/components/DownPaymentSlider";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PurchasePriceSlider />
      <DownPaymentSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
});
