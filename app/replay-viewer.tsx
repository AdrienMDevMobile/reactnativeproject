import { Text, TextInput, View, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

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
    <WebView
          style={styles.container}

          source={{ html: '<h1><center>Hello world</center></h1>' }}

        />

      <Text>Play</Text>
      <Text>Pause</Text>
      <Text>Fast forward</Text>
      <Text>Next play</Text>
      <Text onPress={() => router.back()}>Back</Text>
    </View>
  );
}
/** source={{ uri: 'https://www.duelingbook.com/replay?id=542855-80052265' }} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});