import { Text, View, TextInput, Button, Pressable } from 'react-native';
import React from 'react';
import { loginFunc } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles"
import { Link, useRouter } from "expo-router";

export default function login() {
    const navigation = useRouter();
    const [username, setUsername] = React.useState(String);
    const [password, setPassword] = React.useState(String);

    const submitLogin = async () => {
        if (username != "" && password != "") {
            const response = await loginFunc(username, password)
            if (response != null && response.token == "logged in") {
                //write the userid to the local storage so it can be used globally
                await AsyncStorage.setItem('userId', response.config.toString());
                await AsyncStorage.setItem('username', response.username.toString());
                console.log('Form submitted successfully!');
                //navigation.push("/scrollPage");
                navigation.back();
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
        <View style={styles.container}>
            <View style={styles.textTogether}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Enter Username and Password Below</Text>
                <TextInput style={styles.username}
                    //style={styles.input} //TODO: Get the styles working
                    placeholder="Username"
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.password}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Pressable style={styles.button} onPress={submitLogin}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.holdForget}>
                <Text style={styles.signUp}>
                    Forgot
                    <Link href='../CreateAccount/createAccount' style={styles.linkSign}> Password?</Link>
                    {'\n\n\t\t\t\t\t\t\t\t\tOr\n\n\t\tSign Up Using'}

                </Text>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Pressable style={styles.google}><Text style={styles.text}>Google</Text></Pressable>
                    <Pressable style={styles.facebook}><Text style={styles.text}>Facebook</Text></Pressable>
                </View> */}
            </View>

        </View >
    );
};