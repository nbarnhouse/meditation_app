import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/app/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/app/constants/affirmation-gallery";
import { SafeAreaView } from "react-native-safe-area-context";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationsData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");

        // Remove the last element if it's an empty string
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);
        return;
      }
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.text}>{affirmation?.text}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;

const styles = StyleSheet.create({
  container: { margin: 10, marginTop: 30, justifyContent: "center" },
  text: {
    flex: 1,
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
