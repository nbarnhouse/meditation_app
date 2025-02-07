import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />;
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/TestModalFile"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
