import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type profileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation?: profileScreenNavigationProp;
};

// todo: 
// 1) how many hours you've spent on the app
// 2) how many meetupds you've contributed to
// 3) make different tiers depending on this make scale later


export default function profileScreen({ navigation }: Props) {
    const [avatarSource, setAvatarSource] = useState<{ uri: string } | null>(null);
    const backgroundImage = require('../../assets/images/homepage_background.jpg')

    const selectPhotoTapped = async () => {
        const options = {
            mediaType: 'photo' as MediaType,
        };

        try {
            const response = await launchImageLibrary(options);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets[0] && response.assets[0].uri) {
                const source = { uri: response.assets[0].uri };
                setAvatarSource(source);
            }
        } catch (error) {
            console.error('Error selecting photo: ', error);
        }
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <Text
                // onPress={() => navigation.navigate('scrollPage')}
                style={styles.title}>Profile Screen</Text>
            <TouchableOpacity onPress={selectPhotoTapped}>
                <View style={styles.avatarContainer}>
                    {avatarSource === null ? (
                        <Text>Select a Photo</Text>
                    ) : (
                        <Image style={styles.avatar} source={avatarSource} />
                    )}
                </View>
            </TouchableOpacity>
            <View style={styles.follow}>
                <Text>
                    Followers: 0
                </Text>
                <Text style={{ marginLeft: 10 }}>
                    Following: 0
                </Text>
            </View>
            <View>
                <Text>Hours Contributed</Text>
            </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#9B9B9B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,

    },
    follow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    bar: {

    },
})
