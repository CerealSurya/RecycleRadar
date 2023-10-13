import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { styles } from "./styles"
import React from 'react';
import { handleUploadPhoto } from './uploadPhoto';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [photo, setPhoto] = React.useState(null);
  const handleChoosePhoto = () => {launchImageLibrary({ noData: true })};
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <Button title="Upload Photo" onPress={() => handleUploadPhoto(photo)} />
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
}


