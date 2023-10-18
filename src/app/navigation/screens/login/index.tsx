import { Platform } from 'react-native';
import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { loginFunc } from '../../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login() {
    const [username, setUsername] = React.useState(String);
    const [password, setPassword] = React.useState(String);

    const submitLogin = async () => {
        if (username != "" && password != "") {
            const response = await loginFunc(username, password)
            console.log("made it");
            if (response != null && response.token == "logged in") {
                //write the userid to the local storage so it can be used globally
                await AsyncStorage.setItem('userId', response.config.toString());
                console.log('Form submitted successfully!');
            }
            else {
                console.log(response);
            }
            // Form is valid, perform the submission logic 
        }
        else {
            // Form is invalid, display error messages 
            console.log('Form has errors. Please correct them.');
        }

    }

    return (
        <View>
            <TextInput
                //style={styles.input} //TODO: Get the styles working
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput
                //style={styles.input} //TODO: Get the styles working
                placeholder="Password"
                onChangeText={setPassword}
            />
            <Button title="Submit Login" onPress={submitLogin} />
        </View>
    );
};