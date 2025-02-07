import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />;
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/meditationAdjustDuration"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="meditationTimeScreen"
        options={{
          headerTitle: "",
          headerShown: false,
          headerTransparent: true,
          headerTintColor: "black",
        }}
      />
    </Stack>
  );
}
