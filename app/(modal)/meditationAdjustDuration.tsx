import { Text, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
//import { useAudioPlayer } from "expo-audio";

import CustomButton from "@/components/CustomButton";
//const audioSource = require("../../assets/audio/beach.mp3");
const title10 = "10 seconds";

export default function AdjustDurationScreen() {
  const router = useRouter();
  // const player = useAudioPlayer(audioSource);

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

      {/* <Button title="Play Audio" onPress={() => player.play()} /> */}
      <Text style={styles.title}>Adjust your meditation duration</Text>
      <View style={styles.button_container}>
        <CustomButton
          title={title10}
          onPress={() => console.log(`${title10} timer started`)}
        />
        <CustomButton title="5 minutes" />
        <CustomButton title="10 minutes" />
        <CustomButton title="15 minutes" />
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
