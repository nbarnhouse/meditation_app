import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
//import { useAudioPlayer } from "expo-audio";

//const audioSource = require("../../assets/audio/beach.mp3");

export default function TestModalFile() {
  // const player = useAudioPlayer(audioSource);

  return (
    <SafeAreaView>
      {/* <Button title="Play Audio" onPress={() => player.play()} /> */}
      <Text>Test Modal Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    height: 50,
    width: 150,
    backgroundColor: "green",
  },
});
