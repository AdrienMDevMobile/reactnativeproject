import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React from 'react';

export default function ReplayViewer() {
  const router = useRouter();
  const webViewRef = React.useRef(null);

  const injectAction = (toClick) => {
      if (webViewRef.current) {
                                             webViewRef.current.injectJavaScript(
                                               'document.getElementById("' + toClick + '").click();'
                                             );
                                           }
                                         };
  
  const injectPlay = () => {
      injectAction("play_btn")
  };
  
  const injectPause = () => {
      injectAction("pause_replay_btn")

  };
  
  const injectFastForward = () => {
      injectAction("fast_btn")
  };
  
  const injectNextPlay = () => {
      injectAction("next_btn")
  };

  const injectHideHand = () => {
      injectAction("show_rb")
  };

const injectShowHand = () => {
      injectAction("show1_rb")
  };

const injectShowBoth = () => {
      injectAction("show2_rb")
  };



      return (
        <View
          style={{
            flex: 1,
          }
    }

    >
      <WebView
        ref={webViewRef}
        style={styles.webView}
        source={{ uri: 'https://www.duelingbook.com/replay?id=542855-80052265' }}
      />
      <View
        style={styles.controls}
      >
      <View
          style={{flexDirection: 'row', padding: 5  }}>
            <TouchableOpacity style={styles.button} onPress={injectPlay}>
              <Text style={styles.smallButtonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={injectPause}>
              <Text style={styles.smallButtonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={injectFastForward}>
              <Text style={styles.smallButtonText}>Fast forward</Text>
            </TouchableOpacity>
        </View>
              <View
                  style={{flexDirection: 'row', padding: 5  }}>
                    <TouchableOpacity style={styles.button} onPress={injectHideHand}>
                      <Text style={styles.smallButtonText}>Hide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={injectShowHand}>
                      <Text style={styles.smallButtonText}>Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={injectShowBoth}>
                      <Text style={styles.smallButtonText}>Both</Text>
                    </TouchableOpacity>
                </View>
        <TouchableOpacity style={styles.button} onPress={injectNextPlay}>
          <Text style={styles.bigButtonText}>Next play</Text>
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
  smallButtonText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  bigButtonText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      padding: 10
  },
});