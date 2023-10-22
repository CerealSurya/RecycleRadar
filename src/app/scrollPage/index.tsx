import * as React from 'react';
import { View, Text, ScrollView, Image, FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { getPosts } from '../api';
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
var events:postType[] = [];


const Item = ({data}: {data: postType}) => { //post component
    return(
        <>
        <Text style={styles.postTitle}>{data.postName}</Text>
        <Text style={styles.postAuthor}>    - {data.author}</Text>
        {data.picture && <Image source={{ uri: data.picture }} style={styles.postPicture} />}
        <Text style={styles.postDescrip}>{data.description}</Text>
        </>
    );
}

export default function scrollPage() {
    const [page, setPage] = React.useState(1);
    const renderItem: ListRenderItem<postType> = ( {item} ) => (<Item data={item}/>);
    const fetchData = () => {
        setPage(page + 1);
        getThePosts();
    }
    const getThePosts = async () => {
        const response = await getPosts(page);
        if(response != null && response.token == "Success"){
            const responseList:object[] = response.events;
            for (let i = 0; i < responseList.length; i++)
            {
                events.push(responseList[i] as postType);
            }
        }
        else
        {
            console.log(response);
        }
    }

    if (events.length == 0)
    {
        getThePosts();
    }
    return (
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
    );
};
