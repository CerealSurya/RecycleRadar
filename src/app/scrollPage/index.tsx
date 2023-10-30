import React, { useState } from 'react';
import { View, Text, Image, FlatList, ListRenderItem, Pressable } from 'react-native';
import { styles } from './styles';
import { getPosts, getUserAvatar } from '../api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface postType {
    postName: string,
    author: string
    picture: string | null,
    description: string,
    location: string,
    date: string,
    id: string
}

const oneItem: postType = {
    postName: "Helping the Community At WhiteRock",
    author: "Author Name",
    picture: "https://variety.com/wp-content/uploads/2023/08/ONEPIECE_Unit_10613RC.jpg?w=1024",
    description: "We visited this fabulous place and explored the wilderness. It was like nothing else we'd ever imagined.",
    location: "Example Location",
    date: "2023-10-28",
    id: "1"
};

var events: postType[] = [oneItem, oneItem, oneItem, oneItem];




export const Item = ({ data }: { data: postType }) => { //post component
    const [pressedStates, setPressedStates] = useState<{ [key: string]: boolean }>({ heart: false, chatbubbles: false, share: false });
    let avatar: any;
    React.useEffect(() => {
        AsyncStorage.getItem("username").then(response => {
            if (response != null) {
                getUserAvatar(response).then(resp => { avatar.uri = resp; console.log(resp); })
            }
        })
    }, []);

    const handlePress = (iconType: string) => {
        setPressedStates(prevStates => ({
            ...prevStates,
            [iconType]: !prevStates[iconType]
        }));
    };


    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', top: 7, right: -10 }}>
                {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
                <Text style={styles.postAuthor}>{data.author + '\n' + data.date}</Text>
            </View>
            <Text style={styles.postTitle}>{data.postName}</Text>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.postPicture} />}
            <View style={styles.icons}>
                <Pressable style={styles.button} onPress={() => handlePress('heart')}>
                    <Ionicons name={pressedStates.heart ? 'heart' : 'heart-outline'} size={20} color={pressedStates.heart ? 'red' : 'black'} />
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('chatbubbles')}>
                    <Ionicons name={pressedStates.chatbubbles ? 'chatbubbles' : 'chatbubbles-outline'} size={20} color={pressedStates.chatbubbles ? 'red' : 'black'} />
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('share')}>
                    <Ionicons name={pressedStates.share ? 'share' : 'share-outline'} size={20} color={pressedStates.share ? 'red' : 'black'} />
                </Pressable>
            </View>
            <Text style={styles.postDescrip}>{data.description}</Text>
        </View>
    );
}


export default function scrollPage() {
    // var events: postType[] = [];

    const [page, setPage] = React.useState(1);
    const renderItem: ListRenderItem<postType> = ({ item }) => (<Item data={item} />);
    const fetchData = () => {
        setPage(page + 1);
    }


    React.useEffect(() => {
        (async () => {
            try {
                const response = await getPosts(page);
                if (response != null && response.token == "Success") {
                    const responseList: object[] = response.events;
                    for (let i = 0; i < responseList.length; i++) {
                        events.push(responseList[i] as postType);
                    }
                }
                else {
                    console.log(response);
                }
                for (let i = 0; i < events.length; i++) {
                    events[i].id = `${i}`;
                }
            }
            catch (err) {
                console.log("caught", err);
            }
        })();
    }, [page]);
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <React.Suspense>
                    {events && (
                        <FlatList
                            data={events}
                            renderItem={renderItem}
                            keyExtractor={(item: postType) => item.id}
                            onEndReachedThreshold={0.02}
                            onEndReached={fetchData}
                        />
                    )}
                </React.Suspense>
            </View>
        </View>
    );
};
