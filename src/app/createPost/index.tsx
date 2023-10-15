import { Platform } from 'react-native';
import { Text, View } from 'react-native';
import React from 'react';

const SERVER_URL = "localhost"; //TODO: Put the server url here

type Cleanup = {
  name: string;
  description: string;
  picture: string;
  location: string;
  date: string;
  materials: string;
};

export default function createPost(){
    const createCleanup = (photo: any) => {  
        fetch(`${SERVER_URL}/api/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(createFormData(photo, { userId: '123' })), //TODO: Need to get userId for each user
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('error', error);
        });
    };

    const createFormData = (photo: any, body = {}) => {
        const data: Object = {
            name: photo.fileName,
            type: photo.type,
            uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri
        }
        return data;
    };
    return (
        <View>
          <Text>The create post page!</Text>
        </View>
      );
};
