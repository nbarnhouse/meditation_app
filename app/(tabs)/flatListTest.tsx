import {
  View,
  Text,
  SectionList,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

import AFFIRMATION_GALLERY from "../constants/affirmation-gallery";
import images from "@/app/constants/affirmation-images";

const Item = ({ title, text, id }) => (
  <View key={id} style={{ marginBottom: 20 }}>
    {/* Display the image */}
    {/* <Image
      source={image}
      style={{ width: 100, height: 100, marginBottom: 10 }}
    /> */}
    {/* Display the title */}
    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
    {/* Display the text */}
    <Text>{text}</Text>
  </View>
);

const FlatListTest = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          {AFFIRMATION_GALLERY.map((category) => (
            <FlatList
              key={category.title}
              data={category.data} // Each category's data
              renderItem={({ item }) => (
                <Item
                  title={category.title}
                  text={item.text}
                  // image={item.image}
                  id={item.id}
                />
              )}
              keyExtractor={(item) => item.id.toString()} // Use id as the unique key
            />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FlatListTest;
