import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

export default function index() {
    return (
        <ImageBackground
            source={require('../../images/homepage_background.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Your Content Goes Here</Text>
            </View>
        </ImageBackground>
    );
}