import * as React from 'react';
import { Platform } from 'react-native';
import { View, Text, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { publishpost } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

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
    const [postName, setPostName] = React.useState(String);
    const [postDescript, setDescript] = React.useState(String);
    const [location, setLocation] = React.useState(String);
    const date: String = (new Date().getDate()).toString()
    let author:any;
    AsyncStorage.getItem('userId').then((resp) =>{author = resp;});
    React.useEffect(() => {
    (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setLocation('Permission to access location was denied');
            return;
        }

        let getLocation = await Location.getCurrentPositionAsync({});
        setLocation(JSON.stringify(getLocation));
    })();
    }, []);
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

    const createPost = async () => {  
        if (postName != "" && postDescript != "") { 
            const response = await publishpost(postName, postDescript, photo.uri, author, location, date);
            if(response != null && response.token == "Success"){
                //TODO: redirect to home page, or display notification saying post went through
                console.log('Form submitted successfully!');
            }
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('scrollPage')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            <Text>The create post page!</Text>
            <Button title="Choose Photo" onPress={handleChoosePhoto} />
            <TextInput 
                //style={styles.input} //TODO: Get the styles working
                placeholder="Title" 
                onChangeText={setPostName} 
            />
            <TextInput 
                //style={styles.input} //TODO: Get the styles working
                placeholder="Description" 
                onChangeText={setDescript} 
            /> 
            <Button title="Publish Post" onPress={createPost} />
        </View>
    );
}
