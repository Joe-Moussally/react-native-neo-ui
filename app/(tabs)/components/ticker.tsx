import { Ticker } from "@/core/components/Ticker";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TickerScreen() {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Ticker</Text>

      <View style={styles.tickerContainer}>
        <Ticker value={value} fontSize={60} minDigits={3} />
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue((prev) => prev + 10)}
        >
          <Text style={styles.buttonText}>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue((prev) => prev + 100)}
        >
          <Text style={styles.buttonText}>+100</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(Math.floor(Math.random() * 10000))}
        >
          <Text style={styles.buttonText}>Random</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={() => setValue(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.info}>Current Value: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  tickerContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 40,
  },
  controls: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});
