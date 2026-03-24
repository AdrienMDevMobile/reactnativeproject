import { Text, TextInput, View } from "react-native";

export default function ReplayViewer() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput defaultValue = "Put DB link here"/>
      <Text>Play</Text>
      <Text>Pause</Text>
      <Text>Fast forward</Text>
      <Text>Next play</Text>
    </View>
  );
}
