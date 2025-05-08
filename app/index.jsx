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
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "./components/CustomButton";

export default function App() {
  const router = useRouter();
  return (
    <ImageBackground source={beachImage} style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradient}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Simple Meditation App</Text>
              <Text style={styles.subtitle}>
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <CustomButton
              title="Get Started"
              onPress={() => router.push("/meditationOptionScreen")}
            />
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
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
