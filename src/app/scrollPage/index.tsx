import React, { useState } from 'react';
import { View, Text, Image, FlatList, ListRenderItem, Pressable } from 'react-native';
import { styles } from './styles';
import { getPosts } from '../api';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface postType {
    postName: string,
    author: string
    picture: string | null,
    description: string,
    location: string,
    date: string,
    id: string
}

// const oneItem: postType = {
//     postName: "Helping the Community At WhiteRock",
//     author: "Author Name",
//     picture: "https://static.wixstatic.com/media/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg/v1/fill/w_640,h_568,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg",
//     description: "We visited this fabulous place and explored the wilderness. It was like nothing else we'd ever imagined.",
//     location: "Example Location",
//     date: "2023-10-28",
//     id: "1"
// };

// const secondItem: postType = {
//     postName: "Example Post",
//     author: "Author Name",
//     picture: "https://static.wixstatic.com/media/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg/v1/fill/w_640,h_568,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg",
//     description: "This is an example post",
//     location: "Example Location",
//     date: "2023-10-28",
//     id: "1"
// };

// var events: postType[] = [oneItem, secondItem, secondItem, secondItem];


var events: postType[] = [];


export const Item = ({ data }: { data: postType }) => { //post component
    const [pressedStates, setPressedStates] = useState<{ [key: string]: boolean }>({ heart: false, chatbubbles: false, share: false });

    const handlePress = (iconType: string) => {
        setPressedStates(prevStates => ({
            ...prevStates,
            [iconType]: !prevStates[iconType]
        }));
    };


    return (
        <View style={styles.card}>
            <Text style={styles.postTitle}>{data.postName}</Text>
            <Text style={styles.postAuthor}>    - {data.author}</Text>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.postPicture} />}
            <Text style={styles.postDescrip}>{data.description}</Text>
            <View style={styles.icons}>
                <Pressable style={styles.button} onPress={() => handlePress('heart')}>
                    <Ionicons name={pressedStates.heart ? 'heart' : 'heart-outline'} size={40} color={pressedStates.heart ? 'red' : 'black'} />
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('chatbubbles')}>
                    <Ionicons name={pressedStates.chatbubbles ? 'chatbubbles' : 'chatbubbles-outline'} size={40} color={pressedStates.chatbubbles ? 'red' : 'black'} />
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('share')}>
                    <Ionicons name={pressedStates.share ? 'share' : 'share-outline'} size={40} color={pressedStates.share ? 'red' : 'black'} />
                </Pressable>
            </View>
        </View>
    );
}


export default function scrollPage() {
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
                {events && (
                    <FlatList
                        data={events}
                        renderItem={renderItem}
                        keyExtractor={(item: postType) => item.id}
                        onEndReachedThreshold={0.02}
                        onEndReached={fetchData}
                    />
                )}
            </View>
        </View>
    );
};
