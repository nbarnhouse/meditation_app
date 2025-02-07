import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./components/CustomButton";
import { useRouter } from "expo-router";

export default function meditationTimeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>[itemId]meditationTimeScreen</Text>
      <CustomButton
        title="Adjust Duration"
        onPress={() => router.push("/(modal)/meditationAdjustDuration")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#847490",
    alignItems: "center",
    justifyContent: "space-around",
  },

  button_container: {
    flex: 0.5,
    //backgroundColor: "red",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
