import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput defaultValue = "Put DB link here"/>
      <Text>Go</Text>
    </View>
  );
}
