import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { GalleryPreviewData } from "../constants/models/AffirmationCategory";
import { Link } from "expo-router";
import images from "@/app/constants/affirmation-images";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.flatlist_item}>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View style={styles.flatlist_images}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={styles.image}
                  />

                  {/* <Text>Product Gallery</Text> */}
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  text: {
    marginBottom: 2,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  image: { height: 36, width: 32, borderRadius: 10 },
  flatlist_item: {
    margin: 10,
  },

  flatlist_images: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
