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

import { MEDITATION_DATA } from "../../constants/meditation-data";
import meditationImages from "../../constants/meditation-images";
import { useRouter } from "expo-router";

export default function MeditationOptionScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#7c618e" }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome Nicole</Text>
          <Text style={styles.text}>Start your meditation practice today</Text>
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
                source={meditationImages[item.id - 1]}
                resizeMode="cover"
                style={styles.flatlist_images}
              >
                <Text style={styles.flatlist_text}>{item.title}</Text>
              </ImageBackground>
            </Pressable>
          )}
        />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 30,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },

  flatlist_item: {
    margin: 10,
  },

  flatlist_images: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
