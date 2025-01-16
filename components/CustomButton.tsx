import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles = " ",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`rounded-xl bg-white min-h-[62px] justify-center items-center ${containerStyles} `}
      onPress={onPress}
    >
      <Text className={`font-bold text-2xl ${textStyles}`}>Button</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
