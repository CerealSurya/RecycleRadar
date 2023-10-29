import * as React from 'react';
import { View, Text, ScrollView, Image, FlatList, ListRenderItem, Pressable } from 'react-native';
import { styles } from './styles';
import * as Location from 'expo-location';
import { getTopCleanups, getCleanupPic } from '../api';

interface cleanupType {
    eventName: string,
    author: string,
    picture: string,
    description: string,
    location: string,
    date: string,
    materials: string
}

// const oneItem: cleanupType = {
//     eventName: "Helping the Community At WhiteRock",
//     author: "Author Name",
//     picture: "https://static.wixstatic.com/media/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg/v1/fill/w_640,h_568,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1e8f13_693e417d0a9c44768f1ca6044f5bfa32~mv2.jpg",
//     description: "We visited this fabulous place and explored the wilderness. It was like nothing else we'd ever imagined.",
//     location: "Example Location",
//     date: "2023-10-28",
//     materials: "1"
// }


const Item = ({ data }: { data: cleanupType }) => { //post component
    return (
        <View style={styles.card}>
            <Text style={styles.postTitle}>{data.eventName}</Text>
            <Text style={styles.postAuthor}>    - {data.author}</Text>
            <Text style={styles.postAuthor}>Materials: {data.materials}</Text>
            {data.picture && <Image source={{ uri: data.picture }} style={styles.postPicture} />}
            <Text style={styles.postDescrip}>{data.description}</Text>
        </View>
    );
}

// var events: cleanupType[] = [oneItem, oneItem, oneItem];

var events: cleanupType[] = [];

export default function topCleanups() {
    var loc: Object = { "altitude": 0, "heading": 0, "altitudeAccuracy": 100, "latitude": 0, "speed": 0, "longitude": 0, "accuracy": 100 };
    const [location, setLocation] = React.useState<any>(loc);
    const renderItem: ListRenderItem<cleanupType> = ({ item }) => (<Item data={item} />);
    const getCleanups = async (loc = location, replace: boolean = false) => {
        var length: number = 0;
        var counter: number = 0;
        if (replace) { length = events.length; }
        try {
            console.log("here");
            const response = await getTopCleanups(loc);
            if (response != null && response.token == "Success") {
                for (let i = 0; i < response.events.length; i++) {
                    if (replace && (length != 0 && counter < length)) {
                        events[counter] = response.events[i] as cleanupType;
                        counter++;
                    }
                    else {
                        var daEvent:cleanupType = response.events[i] as cleanupType;
                        const rep = await getCleanupPic(daEvent.eventName);
                        console.log(rep);
                        daEvent.picture = rep;

                        events.push(response.events[i] as cleanupType);
                    }
                }
            }
            else {
                console.log(response);
            }
        }
        catch (err) {
            console.log("caught err", location, err);
        }
    }
    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLocation('Permission to access location was denied');
                return;
            }
            let getLocation = await Location.getCurrentPositionAsync({});
            setLocation({ ...getLocation["coords"] });
        })();
    }, []);
    React.useEffect(() => {
        (async () => {
            await getCleanups(location, true);
        })();
    }, [location]);

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <React.Suspense>
                    {events && (
                        <FlatList
                            data={events}
                            renderItem={renderItem}
                            keyExtractor={(item: cleanupType) => item.description}
                        // onEndReachedThreshold={0.02}
                        // onEndReached={getCleanups}
                        />
                    )}
                </React.Suspense>
            </View>
        </View>
    )
}
