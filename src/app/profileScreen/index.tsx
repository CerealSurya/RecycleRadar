import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ListRenderItem, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { fetchTotalHours } from '../api'; 
import { getUserPosts, getUserCleanups } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type TopCleanupsNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation: TopCleanupsNavigationProp;
};

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
interface cleanupType {
    eventName: string,
    author: string,
    picture: string,
    description: string,
    location: string,
    date: string,
    materials: string
}
interface myType{
    username: string,
    hours: string,
}
var events: postType[] = [];
var cleanEvents:cleanupType[] = [];

function LazyComponent() {
    const [data, setData] = React.useState<string | null>(null);
    const [hours, setHours] = React.useState<string | null>(null);
    React.useEffect(() => {
        AsyncStorage.getItem('username').then(response => {
            setData(response);
            if(response != null){
                fetchTotalHours(response).then(resp => (setHours(resp)))
            }
        });
    }, []);
    if (events.length == 0 && data != null)
    {
        getUserPosts(1, data).then(response =>{
            for (let i = 0; i < response.events.length; i++)
            {
                events.push(response.events[i] as postType);
            }
        });
    }
    if(cleanEvents.length == 0 && data != null)
    {
        getUserCleanups(1, data).then(response =>{
            for (let i = 0; i < response.events.length; i++)
            {
                cleanEvents.push(response.events[i] as cleanupType);
            }
            console.log(cleanEvents);
        });
    }
    return (
        <>
            <Text style={styles.subtitle}>Username: {data}</Text>
            <Text style={styles.subtitle}>Hours Contributed: {hours}</Text>
        </>
    );
}
const Item = ({ data }: { data: postType }) => {
    return (
        <>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.picture} />}
            <Text>  </Text>
        </>
    );
}
const SecondItem = ({ data }: { data: cleanupType }) => {
    return (
        <>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.picture} />}
            <Text>  </Text>
        </>
    );
}

export default function profileScreen({ navigation }: Props) {
    const [avatarSource, setAvatarSource] = React.useState<any>({});
    const backgroundImage = require('../../assets/images/homepage_background.jpg');
    // const [totalHours, setTotalHours] = React.useState<string>("2000000");
    const renderItem: ListRenderItem<postType> = ({ item }) => (<Item data={item} />);
    const renderSecondItem: ListRenderItem<cleanupType> = ({ item }) => (<SecondItem data={item} />);

    const [username, setUserName] = React.useState<string | null>("usererrrrrr");

    const selectPhotoTapped = async () => {
        const options = {
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        };

        try {
            const response = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (response.canceled) {
                console.log('User cancelled photo picker');
            } else if (response.assets && response.assets[0] && response.assets[0].uri) {
                setAvatarSource(response.assets[0]);
            }
        } catch (error) {
            console.error('Error selecting photo: ', error);
        }
    };
    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <Text
                style={styles.title}>Profile Screen</Text>
            <TouchableOpacity onPress={selectPhotoTapped} style={styles.avatarContainer}>
                <View >
                    {avatarSource === null ? 
                        <Text>Select a Photo</Text>
                     : 
                        <Image style={styles.avatar} source={{uri: avatarSource.uri}} />
                    }
                </View>
            </TouchableOpacity>
            <View>
            <LazyComponent />
            </View>
            <View style={styles.firstList}>
                <Text style={styles.title}>♻️Recent Posts♻️</Text>
                {events && (
                    <FlatList
                        horizontal={true}

                        data={events}
                        renderItem={renderItem}
                        keyExtractor={(item: postType) => item.description}
                    />
                )}
            </View>
            <View style={styles.secondList}>
                <Text style={styles.title} >♻️Cleanups♻️</Text>
                    {cleanEvents && (
                        <FlatList
                            horizontal={true}

                            data={cleanEvents}
                            renderItem={renderSecondItem}
                            keyExtractor={(item: cleanupType) => item.description}
                        />
                    )}
            </View>
        </ImageBackground>
    );

}

