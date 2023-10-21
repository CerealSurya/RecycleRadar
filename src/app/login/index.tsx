import { Text, View, TextInput, Button, Pressable} from 'react-native';
import { useRouter } from "expo-router";
import React from 'react';
import { loginFunc } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles" 

export default function login(){
    const navigation = useRouter();
    const [username, setUsername] = React.useState(String);
    const [password, setPassword] = React.useState(String);

    const submitLogin = async () => {
        if (username != "" && password != "") { 
            const response = await loginFunc(username, password)
            console.log("made it");
            if(response != null && response.token == "logged in"){
                //write the userid to the local storage so it can be used globally
                await AsyncStorage.setItem('userId', response.config.toString());
                console.log('Form submitted successfully!');
                navigation.push("/scrollPage")
            }
            else
            {
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
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Enter Username & Password below</Text>
            <TextInput style={styles.username}
                //style={styles.input} //TODO: Get the styles working
                placeholder="Username" 
                onChangeText={setUsername} 
            />
            <TextInput style={styles.password}
                //style={styles.input} //TODO: Get the styles working
                placeholder="Password" 
                onChangeText={setPassword} 
            />
            <Pressable style={styles.button} onPress={submitLogin}>
                <Text style={styles.text}>Submit Login</Text>
            </Pressable>
            {/* <Button style={styles.button} title="Submit Login" onPress={submitLogin} /> */}
        </View>
    );
};