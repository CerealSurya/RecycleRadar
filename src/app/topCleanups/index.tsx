import * as React from 'react';
import { View, Text, ScrollView, Image, FlatList, ListRenderItem } from 'react-native';
import { styles } from './styles'; 
import * as Location from 'expo-location';
import { getTopCleanups } from '../api';

interface cleanupType {
    eventName: string,
    author: string,
    picture: string,
    description: string,
    location: string,
    date: string,
    materials: string
}
const Item = ({data}: {data: cleanupType}) => { //post component
    return(
        <>
        <Text style={styles.postTitle}>{data.eventName}</Text>
        <Text style={styles.postAuthor}>    - {data.author}</Text>
        <Text style={styles.postAuthor}>Materials: {data.materials}</Text>
        {data.picture && <Image source={{ uri: data.picture }} style={styles.postPicture} />}
        <Text style={styles.postDescrip}>{data.description}</Text>
        </>
    );
}
var events:cleanupType[] = [];
export default function topCleanups() {
    var loc:Object = {"altitude":0,"heading":0,"altitudeAccuracy":100,"latitude":0,"speed":0,"longitude":0,"accuracy":100};
    const [location, setLocation] = React.useState<any>(loc);
    const renderItem: ListRenderItem<cleanupType> = ( {item} ) => (<Item data={item}/>);
    const getCleanups = async (loc=location, replace:boolean = false) => {
        var length:number = 0;
        var counter:number = 0;
        if(replace)
        {length = events.length;}
        try{
            const response = await getTopCleanups(loc);
            if (response != null && response.token == "Success")
            {
                for (let i = 0; i < response.events.length; i ++)
                {
                    if (replace &&(length != 0 && counter < length))
                    {
                        events[counter] = response.events[i] as cleanupType;
                        counter++;
                    }
                    else{events.push(response.events[i] as cleanupType);}
                }
            }
            else
            {
                console.log(response);
            }
        }
        catch(err){
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
            setLocation({...getLocation["coords"]});
        })();
    }, []);
    React.useEffect(() => {
        (async () => {
            await getCleanups(location, true);
        })();
    }, [location]);
    return (
        <View style={styles.container}>
            {events && (
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item: cleanupType) => item.description}
                // onEndReachedThreshold={0.02}
                // onEndReached={getCleanups}
            />
            )}
       </View>
)}
