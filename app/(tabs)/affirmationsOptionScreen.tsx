import {
  View,
  Text,
  SectionList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import AFFIRMATION_DATA from "../../constants/affirmation-data";
import affirmationImages from "@/constants/affirmation-images";

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
            <SectionList
              sections={AFFIRMATION_DATA}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.flatlist_item}
                  onPress={() => router.push("/affirmationDetailScreen")} // Navigate to affirmation detail screen
                >
                  <ImageBackground
                    source={item.image} // Using the image from each item
                    resizeMode="cover"
                    style={styles.flatlist_images}
                  >
                    <Text style={styles.affirmationText}>{item.text}</Text>
                  </ImageBackground>
                </Pressable>
              )}
              renderSectionHeader={({ section }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
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
});
