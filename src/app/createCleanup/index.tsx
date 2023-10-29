import * as React from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import * as Location from 'expo-location';
import { publishcleanup } from '../api';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type createCleanupNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation: createCleanupNavigationProp;
};

export default function createCleanup({ navigation }: Props) {
    const [photo, setPhoto] = React.useState(Object);
    const [postName, setPostName] = React.useState(String);
    const [postDescript, setDescript] = React.useState(String);
    const [location, setLocation] = React.useState(String);
    const [author, setAuthor] = React.useState(String);
    const [materials, setMaterials] = React.useState(String);
    const date: String = (new Date().getDate()).toString()
    React.useEffect(() => {
        (async () => {
            let authorr = await AsyncStorage.getItem('username');
            if (authorr != null) { setAuthor(authorr); }
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
    const createCleanup = async () => {
        if (postName != "" && postDescript != "") {
            const data: object = {
                eventName: postName,
                author: author,
                picture: photo.uri,
                description: postDescript,
                location: location,
                date: date,
                materials: materials
            }
            const response = await publishcleanup(data);
            if (response != null && response.token == "Success") {
                //TODO: redirect to home page, or display notification saying post went through
                console.log('Form submitted successfully!');
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Cleanup</Text>
            <TextInput
                style={styles.titleInput}
                placeholder="Title"
                onChangeText={setPostName}
            />
            <TextInput
                style={styles.titleInput}
                placeholder="Description"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                onChangeText={setDescript}
            />
            <TextInput
                style={styles.titleInput}
                placeholder="Materials Needed"
                onChangeText={setMaterials}
            />

            <Pressable style={styles.firstButton} onPress={handleChoosePhoto}>
                <Text style={styles.text}>Select Photo</Text>
            </Pressable>
            {photo && <Image source={{ uri: photo.uri }} style={styles.photo} />}
            <Pressable style={styles.secondButton} onPress={createCleanup}>
                <Text style={styles.text}>Publish Cleanup</Text>
            </Pressable>
        </View>
    );
}
