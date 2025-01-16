import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
//import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { MEDITATION_DATA } from "@/constants/meditation-data";
import meditationImages from "@/constants/meditation-images";

const NatureMeditate = () => {
  return (
    <SafeAreaView className="flex-1">
      {/* <AppGradient colors={["#161b2e", "0a4d4a", "#766e67"]}>
      </AppGradient> */}

      <View className="mb-6">
        <Text className="text-black mb-3 font-bold text-4xl text-left">
          Welcome Steven
        </Text>
        <Text className="text-black text-xl font-medium">
          Start your meditation practice today
        </Text>
      </View>
      <View>
        <FlatList
          data={MEDITATION_DATA}
          className="mb-20"
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("Pressed Item")}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={meditationImages[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <Text className="text-gray-300 text-3xl font-bold text-center">
                  {item.title}
                </Text>
              </ImageBackground>
            </Pressable>
          )}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default NatureMeditate;
