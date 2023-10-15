import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { styles } from "./styles"
import React from 'react';
import { handleUploadPhoto } from './uploadPhoto';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export default function App() {
  const [photo, setPhoto] = React.useState(Object);
  const handleChoosePhoto = async () => {
      // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0]);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <Button title="Upload Photo" onPress={() => handleUploadPhoto(photo)} />
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
}