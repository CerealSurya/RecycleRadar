import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ListRenderItem, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import { fetchTotalHours } from '../api'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

// todo: 
// 1) how many hours you've spent on the app
// 2) how many meetupds you've contributed to
// 3) make different tiers depending on this make scale later // xp scale --> based on the amount of contributions
// 4) make followers and following work

interface postType {
    postName: string,
    author: string,
    picture: string | null,
    description: string,
    location: string,
    date: string,
    id: string
}
var events: postType[] = [];

const Item = ({ data }: { data: postType }) => {
    return (
        <>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.picture} />}
        </>
    );
}


export default function profileScreen() {
    const [avatarSource, setAvatarSource] = useState<{ uri: string } | null>(null);
    const backgroundImage = require('../../assets/images/homepage_background.jpg');
    const renderItem: ListRenderItem<postType> = ({ item }) => (<Item data={item} />);

    const [username, setUserName] = useState<String | null>("");
    React.useEffect(() => {
        (async () => {
            const user = await AsyncStorage.getItem('username');
            setUserName(user);
        })();
    }, []);
    const [totalHours, setTotalHours] = useState(0);
    useEffect(() => {
        const fetchHours = async () => {
            try {
                const username = await AsyncStorage.getItem('username');
                if (username !== null) {
                    const hours = await fetchTotalHours(username);
                    setTotalHours(hours);
                }
            } catch (error) {
                console.error('Error fetching total hours:', error);
            }
        };

        fetchHours();
    }, []);
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
            <Text>{username}</Text>
            <View style={styles.follow}>
                <Text>
                    Followers: 0
                </Text>
                <Text style={{ marginLeft: 10 }}>
                    Following: 0
                </Text>
            </View>
            <View>
            <Text>Hours Contributed: {totalHours}</Text>
            </View>
            <View>
                <Text style={styles.title}>♻️Recent Posts♻️</Text>
                {events && (
                    <FlatList
                        data={events}
                        renderItem={renderItem}
                        keyExtractor={(item: postType) => item.id}
                    />
                )}
            </View>
            <View>
                <Text style={styles.title}>♻️Recent Posts♻️</Text>
                {events && (
                    <FlatList
                        data={events}
                        renderItem={renderItem}
                        keyExtractor={(item: postType) => item.id}
                    />
                )}
            </View>
        </ImageBackground>
    );

}

