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
      }}
    >
      <WebView
        style={styles.webView}
        source={{ uri: 'https://www.duelingbook.com/replay?id=542855-80052265' }}
      />
      <View
        style={styles.controls}
      >
        <Text>Play</Text>
        <Text>Pause</Text>
        <Text>Fast forward</Text>
        <Text>Next play</Text>
        <Text onPress={() => router.back()}>Back</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});