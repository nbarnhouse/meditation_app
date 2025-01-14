import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

//CommonJS-style Import
//const beachImage = require("../assets/meditation-images/beach.webp");

//ES Module Import
import beachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <Text>App</Text>
      </ImageBackground>
    </View>
  );
};

export default App;
