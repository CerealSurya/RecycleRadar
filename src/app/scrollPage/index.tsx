import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { getPosts } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};
type postType = {
    postName: string,
    author: string
    picture: string | null,
    description: string,
    location: string,
    date: string
}
let events:postType[];
let testEvent:postType = {
    postName: "White Rock Lake Cleanup",
    author: "Surya Jalapati",
    picture: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Frecycleradar-e00fd2c1-da51-478e-9e44-592e57495f99/ImagePicker/22cca225-6be1-4e77-a2d0-d5d02ad878ac.jpeg",
    description: "Cleaning white rock is one exuaghsting task!",
    location: "lat:xxxx, long:xxxx",
    date: "8/12/12"
}
type scrollPageNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

// type Props = {
//     navigation: scrollPageNavigationProp;
// };
const Post = (props: postType) => {
    //post component
    return(
        <>
        <Text style={styles.postTitle}>{props.postName}</Text>
        <Text style={styles.postAuthor}>    - {props.author}</Text>
        {props.picture && <Image source={{ uri: props.picture }} style={styles.postPicture} />}
        <Text style={styles.postDescrip}>{props.description}</Text>
        </>
    );
}
//{ navigation }: Props
export default function scrollPage() {
    const getThePosts = async () => {
        const response = await getPosts();
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
        // Form is valid, perform the submission logic 
    }
 
    return (
        <ScrollView>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>
            <Post postName={testEvent.postName} description={testEvent.description} author={testEvent.author} picture={testEvent.picture} location={testEvent.location} date={testEvent.date}/>

        </ScrollView>
    );
};
