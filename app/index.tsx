import React from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
//import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

//CommonJS-style Import
//const beachImage = require("../assets/meditation-images/beach.webp");

//ES Module Import
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        {/* <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        > */}
        <SafeAreaView className=" flex-1 mx-5 my-12 justify-between">
          <View>
            <Text className="text-white text-center text-4xl font-bold">
              Simple Meditation App
            </Text>
            <Text className="text-center text-white font-regular text-2xl mt-3">
              Simplifying Meditation for Everyone
            </Text>
          </View>
          <CustomButton
            title="Get Started"
            onPress={() => router.push("/nature-meditate")}
          />
          <StatusBar style="light" />
        </SafeAreaView>
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  );
};

export default App;
