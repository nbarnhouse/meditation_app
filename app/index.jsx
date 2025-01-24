import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(modal)/TestModalFile")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Open Modal</Text>
          </TouchableOpacity>

          <CustomButton
            title="Get Started"
            onPress={() => router.push("/nature-meditate")}
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

  button: {
    height: 62,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "90%",
  },
});
