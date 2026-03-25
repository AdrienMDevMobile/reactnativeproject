import { Text, TextInput, View } from "react-native";
import { Link, useRouter } from 'expo-router';

export default function ReplayViewer() {
  const router = useRouter();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Play</Text>
      <Text>Pause</Text>
      <Text>Fast forward</Text>
      <Text>Next play</Text>
      <Text onPress={() => router.back()}>Back</Text>
    </View>
  );
}
