import * as React from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { publishpost } from '../api';
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

export default function CreatePost() {
    const [photo, setPhoto] = React.useState(Object);
    const [postName, setPostName] = React.useState(String);
    const [postDescript, setDescript] = React.useState(String);
    const [location, setLocation] = React.useState(String);
    const date: String = (new Date().getDate()).toString()
    const [author, setAuthor] = React.useState(String);
    const [hoursSpent, setHoursSpent] = React.useState('');

    React.useEffect(() => {
        (async () => {
            let authorr = await AsyncStorage.getItem('username');
            if (authorr != null){setAuthor(authorr);}
            
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
        if (postName != "" && postDescript != "" && hoursSpent != "") {
            const response = await publishpost(postName, postDescript, photo.uri, author, location, date, hoursSpent);
            if (response != null && response.token == "Success") {
                //TODO: redirect to home page, or display notification saying post went through
                console.log('Form submitted successfully!');
            }
        }
    }


    return (
        <View style= {styles.container}>
            <Text style= {styles.title}>Create Post</Text>
            <TextInput
                style={styles.titleInput}
                placeholder="Title"
                onChangeText={setPostName}
            />
            <TextInput
                style={styles.descripInput}
                placeholder="Description"
                onChangeText={setDescript}
            />
            <TextInput
                style={styles.hoursInput}
                placeholder="Hours Spent"
                keyboardType="numeric"  // Ensure that only numbers can be input
                onChangeText={setHoursSpent}
/>
            <Pressable style={styles.firstButton} onPress={handleChoosePhoto}>
                <Text style={styles.text}>Select Photo</Text>
            </Pressable>
            {photo && <Image source={{ uri: photo.uri }} style={styles.photo} />}
            <Pressable style={styles.secondButton} onPress={createPost}>
                <Text style={styles.text}>Publish Post</Text>
            </Pressable>
        </View>
    );
    }
