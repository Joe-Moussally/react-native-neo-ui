import { Ticker } from "@/core/components/Ticker";
import { View } from "react-native";

export default function TickerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ticker value={104123} />
    </View>
  );
}
