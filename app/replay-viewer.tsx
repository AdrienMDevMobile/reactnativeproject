import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React from 'react';

export default function ReplayViewer() {
  const router = useRouter();
  const webViewRef = React.useRef(null);
  
  const injectPlay = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        'document.getElementById("play_btn").click();'
      );
    }
  };
  
  const injectPause = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        'document.getElementById("pause_replay_btn").click();'
      );
    }
  };
  
  const injectFastForward = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        'document.getElementById("fast_btn").click();'
      );
    }
  };
  
  const injectNextPlay = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        'document.getElementById("next_btn").click();'
      );
    }
  };
  
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        ref={webViewRef}
        style={styles.webView}
        source={{ uri: 'https://www.duelingbook.com/replay?id=542855-80052265' }}
      />
      <View
        style={styles.controls}
      >
        <TouchableOpacity style={styles.button} onPress={injectPlay}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={injectPause}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={injectFastForward}>
          <Text style={styles.buttonText}>Fast forward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={injectNextPlay}>
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