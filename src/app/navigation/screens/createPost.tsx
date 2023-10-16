import * as React from 'react';
import { Platform } from 'react-native';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { publishcleanup } from '../../api';
// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type createPostNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation: createPostNavigationProp;
};

export default function createPost({ navigation }: Props) {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('scrollPage')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            <Text>The create post page!</Text>
            <Button title="Choose Photo" onPress={handleChoosePhoto} />
        </View>
    );
}
