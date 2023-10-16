import { Platform } from 'react-native';
import { Text, View, Button } from 'react-native';
import React from 'react';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { publishcleanup } from '../api';

const SERVER_URL = "localhost"; //TODO: Put the server url here

type Cleanup = {
  name: string;
  description: string;
  picture: string;
  location: string;
  date: string;
  materials: string;
};

export default function createPost(){
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
        console.log(result.assets[0].uri);
      }
    }

    const createCleanup = (photo: any) => {  
        const response = publishcleanup(createFormData(photo));
        //TODO: Deal with response
    };

    const createFormData = (photo: any, body = {}): Object => {
        const data: Object = {
            name: photo.fileName,
            type: photo.type,
            uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri
        }
        return data;
    };
    return (
        <View>
          <Text>The create post page!</Text>
          <Button title="Choose Photo" onPress={handleChoosePhoto} />
        </View>
      );
};
