import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="past-link" options={{ title: "Past Link" }} />
      <Stack.Screen name="replay-viewer" options={{ title: "Replay Viewer" }} />
    </Stack>
  );
}
