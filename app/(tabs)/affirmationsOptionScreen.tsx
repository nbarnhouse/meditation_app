import {
  View,
  Text,
  SectionList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import AffirmationList from "@/components/AffirmationGallery";
import { AFFIRMATION_GALLERY } from "@/constants/affirmation-data";

export default function AffirmationsOptionScreen() {
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.subtitle}>
              Change your beliefs with affirmations.
            </Text>
            <AffirmationList sections={AFFIRMATION_GALLERY} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#7c618e",
  },
  gradient: {
    flex: 1,
  },
  container: {
    margin: 10,
    marginTop: 30,
  },
  header: {
    alignItems: "center",
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
  flatlist_item: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  flatlist_images: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  affirmationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
