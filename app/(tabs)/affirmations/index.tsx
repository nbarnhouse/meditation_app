import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import AFFIRMATION_GALLERY from "../../constants/affirmation-gallery";
import GuidedAffirmationsGallery from "../../components/GuidedAffirmationsGallery";

export default function Affirmations() {
  return (
    <View style={{ flex: 1, backgroundColor: "#7c618e" }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Change your beliefs with affirmations.</Text>
        <View>
          {AFFIRMATION_GALLERY.map((g) => (
            <GuidedAffirmationsGallery
              key={g.title}
              title={g.title}
              previews={g.data}
            />
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 30,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
