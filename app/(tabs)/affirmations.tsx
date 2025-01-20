import { Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function Affirmations() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Change your beliefs with affirmations.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7c618e",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
