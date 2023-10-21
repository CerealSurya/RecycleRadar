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
    const date: String = (new Date().getDate()).toString()
    let author: any;
    AsyncStorage.getItem('userId').then((resp) => { author = resp; });
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
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        </View>
    );
}
