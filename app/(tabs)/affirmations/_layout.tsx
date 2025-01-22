import { Stack } from "expo-router";
import React from "react";

const AffirmationsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "" }}
      />
      <Stack.Screen
        name="[itemId]"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "black",
        }}
      />
    </Stack>
  );
};

export default AffirmationsLayout;
