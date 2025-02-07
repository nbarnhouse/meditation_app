import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

//CommonJS-style Import
//const beachImage = require("../assets/meditation-images/beach.webp");

//ES Module Import
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "./components/CustomButton";

export default function App() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Simple Meditation App</Text>
            <Text style={styles.subtitle}>
              Simplifying Meditation for Everyone
            </Text>
          </View>
          <CustomButton
            title="Get Started"
            onPress={() => router.push("/meditationOptionScreen")}
          />
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  subtitle: {
    color: "white",
  },
});
