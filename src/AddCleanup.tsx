import React from 'react';
import {Image, Text, View} from 'react-native';

const Bananas = () => {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
        <Image source={pic} style={{width: 193, height: 110, marginTop: 50}} />
    );
};
  
export default Bananas;

type Cleanup = {
    name: string;
    description: string;
    picture: string;
    location: string;
    date: string;
    materials: string;
};

const addCleanupPage = (props: Cleanup) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};
