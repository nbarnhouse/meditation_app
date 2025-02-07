import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./components/CustomButton";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function meditationTimeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", marginLeft: 30 }}>
        <Ionicons
          name="chevron-back-circle-outline"
          size={48}
          color="white"
          onPress={() => router.back()}
        />
      </View>
      <View style={styles.timer_container}>
        <Text style={styles.title}>00.10</Text>
      </View>
      <View style={styles.button_container}>
        <CustomButton
          title="Adjust Duration"
          onPress={() => router.push("/(modal)/meditationAdjustDuration")}
        />

        <CustomButton
          title="Start"
          onPress={() => console.log("timer started")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#847490",
    alignItems: "center",
    justifyContent: "space-around",
  },

  timer_container: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },

  button_container: {
    flex: 0.25,
    //backgroundColor: "red",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
});
