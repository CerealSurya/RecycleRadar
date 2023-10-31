import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ListRenderItem, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { fetchTotalHours } from '../api'; 
import { getUserPosts, getUserCleanups, setUserAvatar, getUserAvatar } from '../api';
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
interface cleanupType {
    eventName: string,
    author: string,
    picture: string,
    description: string,
    location: string,
    date: string,
    materials: string
}
// var dummy;
var events: postType[] = [];
var cleanEvents:cleanupType[] = [];
let username:string = "";
function Info() {
    const [data, setData] = React.useState<string | null>(null);
    const [hours, setHours] = React.useState<string | null>(null);
    React.useEffect(() => {
        AsyncStorage.getItem('username').then(response => {
            setData(response);
            if(response != null){
                username = response;
                fetchTotalHours(response).then(resp => (setHours(resp)));
                getUserCleanups(1, response).then(r =>{
                    console.log(r.events);
                    for (let i = 0; i < r.events.length; i++)
                    {
                        cleanEvents.push(r.events[i] as cleanupType);
                    }
                });
                getUserPosts(1, response).then(re =>{
                    for (let i = 0; i < re.events.length; i++)
                    {
                        events.push(re.events[i] as postType);
                    }
                });
            }
        });
    }, []);
    return (
        <>
            <Text style={styles.subtitle}>{data}</Text>
            <Text style={styles.subtitle}>Hours Contributed: {hours}</Text>
        </>
    );
}
const Item = ({ data }: { data: postType }) => {
    return (
        <View>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.picture} />}
            <Text>  </Text>
        </View>
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
const Avatar = () => { //http://10.0.2.2:6900/static/test.jpeg
    const [avatarSource, setAvatarSource] = React.useState<string>("");
    React.useEffect(() => {
        getUserAvatar(username).then(response => {
            if (response != null){
                console.log("here",response);
                setAvatarSource(response);
            }
        });
    }, [username != ""]);
    const selectPhotoTapped = async () => {
        try {
            console.log(avatarSource);
            const response = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (response.canceled) {
                console.log('User cancelled photo picker');
            } else{
                console.log(response.assets[0]);
                setAvatarSource(response.assets[0].uri);
                var form = new FormData();
                form.append("Content-Type", "image/jpeg");
                form.append('image', response.assets[0].uri);
                setUserAvatar(username, form, "image/jpeg", response.assets[0] as any).then(resp => console.log(resp));
            }
        } catch (error) {
            console.error('Error selecting pho ', error);
        }
    };
    return (
        <TouchableOpacity onPress={selectPhotoTapped} style={styles.avatarContainer}>
            <View >
                
                    <Image style={styles.avatar} source={{uri: avatarSource}} />
                
            </View>
        </TouchableOpacity>
    );
}
export default function profileScreen() {
    const backgroundImage = require('../../assets/images/homepage_background.jpg');
    // const [totalHours, setTotalHours] = React.useState<string>("2000000");
    const renderItem: ListRenderItem<postType> = ({ item }) => (<Item data={item} />);
    const renderSecondItem: ListRenderItem<cleanupType> = ({ item }) => (<SecondItem data={item} />);
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}>Profile Screen</Text>
            <View>
            <React.Suspense >
                <Avatar />
                <Info />
            </React.Suspense>
            </View>
            <View style={styles.firstList}>
                <Text style={styles.title}>♻️Recent Posts♻️</Text>
                <React.Suspense fallback={<Text/>}>
                {events && (
                    <FlatList
                        horizontal={true}

                        data={events}
                        renderItem={renderItem}
                        keyExtractor={(item: postType) => item.description}
                    />
                )}
                </React.Suspense>
            </View>
            <View style={styles.secondList}>
                <Text style={styles.title} >♻️Cleanups♻️</Text>
                <React.Suspense fallback={<Text/>}>
                    {cleanEvents && (
                        <FlatList
                            horizontal={true}
                            data={cleanEvents}
                            renderItem={renderSecondItem}
                            keyExtractor={(item: cleanupType) => item.description}
                        />
                    )}
                </React.Suspense>
            </View>
        </View>
    );
}

