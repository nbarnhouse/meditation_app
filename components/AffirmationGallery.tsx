import React from "react";
import {
  View,
  Text,
  SectionList,
  FlatList,
  ImageBackground,
} from "react-native";
import { AFFIRMATION_DATA } from "@/constants/affirmation-data";
import { IMAGE_FILES_AFFIRMATION } from "@/constants/affirmation-images";

const renderHorizontalItem = ({ item }) => (
  <ImageBackground
    source={item.image}
    style={{
      width: 300,
      height: 200,
      marginRight: 16,
      justifyContent: "center",
      borderRadius: 10,
      overflow: "hidden",
    }}
  >
    <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
      {item.text}
    </Text>
  </ImageBackground>
);

const renderSection = ({ section }) => (
  <View>
    <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
      {section.title}
    </Text>
    <FlatList
      data={section.data}
      renderItem={renderHorizontalItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const AffirmationList = ({ sections }) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={renderSection}
        renderItem={() => null}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

export default AffirmationList;
