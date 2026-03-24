import React, {useState} from 'react';
import { Text, TextInput, View } from "react-native";

export default function Index() {

    const [url, setText] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Put DB link here"
        onChangeText={newText => setText(newText)}
        defaultValue={url}
        style={{
                  height: 40,
                  padding: 5,
                  marginHorizontal: 8,
                  borderWidth: 1,
                }}
        />
      <Text>Go</Text>
    </View>
  );
}
