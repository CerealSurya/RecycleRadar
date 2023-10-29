import * as React from 'react';
import { View, Text, Image, FlatList, ListRenderItem } from 'react-native';
import { styles } from './styles';
import { getPosts } from '../api';

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
    postName: "Example Post",
    author: "Author Name",
    picture: "https://static.wixstatic.com/media/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg/v1/fill/w_640,h_568,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg",
    description: "This is an example post",
    location: "Example Location",
    date: "2023-10-28",
    id: "1"
};

const secondItem: postType = {
    postName: "Example Post",
    author: "Author Name",
    picture: "https://static.wixstatic.com/media/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg/v1/fill/w_640,h_568,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg",
    description: "This is an example post",
    location: "Example Location",
    date: "2023-10-28",
    id: "1"
};

var events: postType[] = [oneItem, secondItem];


// var events: postType[] = [];


export const Item = ({ data }: { data: postType }) => { //post component
    return (
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
