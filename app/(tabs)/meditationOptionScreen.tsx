import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import { MEDITATION_DATA } from "../../constants/meditation-data";
import { IMAGE_FILES_MEDITATION } from "@/constants/meditation-images";
import { useRouter } from "expo-router";

export default function MeditationOptionScreen() {
  const router = useRouter();

  return (
    <View style={styles.backgound}>
      <LinearGradient
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Nicole</Text>
            <Text style={styles.subtitle}>
              Start your meditation practice today
            </Text>
          </View>

          <FlatList
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={styles.flatlist_item}
                onPress={() => router.push("/meditationTimeScreen")}
              >
                <ImageBackground
                  source={IMAGE_FILES_MEDITATION[item.image]}
                  resizeMode="cover"
                  style={styles.flatlist_images}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </ImageBackground>
              </Pressable>
            )}
          />
          <StatusBar style="light" />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  backgound: { flex: 1, resizeMode: "center" },
  gradient: { flex: 1 },
  container: {
    flex: 1,
    margin: 10,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },

  flatlist_item: {
    margin: 10,
    shadowColor: "white",
  },

  flatlist_images: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
