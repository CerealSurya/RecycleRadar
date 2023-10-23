import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
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
let counter:number = 0;
//var events:cleanupType[] = [];
export const Item = ({data}: {data: cleanupType}) => { //post component
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

export default function topCleanups() {
    const [location, setLocation] = React.useState(String);
    const [event1, setEvent1] = React.useState<cleanupType>(Object);
    const [event2, setEvent2] = React.useState<cleanupType>(Object);
    const [event3, setEvent3] = React.useState<cleanupType>(Object);
    const [event4, setEvent4] = React.useState<cleanupType>(Object);
    const [event5, setEvent5] = React.useState<cleanupType>(Object);
    const getCleanups = async () => {
        const loc = JSON.parse(location);
        const response = await getTopCleanups(loc);
        if (response != null && response.token == "Success")
        {
            for (let i = 0; i < response.events.length; i ++)
            {
                if(i == 0)
                {setEvent1(response.events[i] as cleanupType);}
                if(i == 1)
                {setEvent2(response.events[i] as cleanupType);}
                if(i == 2)
                {setEvent3(response.events[i] as cleanupType);}
                if(i == 3)
                {setEvent4(response.events[i] as cleanupType);}
                if(i == 4)
                {setEvent5(response.events[i] as cleanupType);}
            }
        }
        else
        {
            console.log(response);
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
            setLocation(JSON.stringify(getLocation["coords"]));
            
        })();
    }, []);
    if (location != "" && counter < 3)
    {
        console.log(event1);
        getCleanups();
        counter++;
    }
    return (
        <ScrollView>
            <Item data={event1}/>
            {/* {typeof events[0] != null ?<Item data={events[1]}/>: null} 
            {typeof events[0] != null ?<Item data={events[2]}/>: null} 
            {typeof events[0] != null ?<Item data={events[3]}/>: null} 
            {typeof events[0] != null ?<Item data={events[4]}/>: null}  */}
        </ScrollView>
    );
}
