import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./styles"
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View> <LinearGradient
        colors={['rgba(255,0,150,1)', 'rgba(0,204,255,1)']}
        style={styles.modernButton}
      >
        <Text style={styles.modernButtonText}>Click Me</Text>
      </LinearGradient>
      </View>
    </View>

  );
}


