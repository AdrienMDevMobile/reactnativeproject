import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
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
        <TouchableOpacity style={styles.button} onPress={() => console.log('Play pressed')}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Pause pressed')}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Fast forward pressed')}>
          <Text style={styles.buttonText}>Fast forward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Next play pressed')}>
          <Text style={styles.buttonText}>Next play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,

  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});