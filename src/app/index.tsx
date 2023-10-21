import { Redirect, useRouter, useFocusEffect } from "expo-router";
import { Text, View, Button, Pressable } from "react-native";
import { styles } from "./styles"
import React from 'react';
import MainContainer from './MainContainer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const router = useRouter();

  // if user isn't logged in it redirects person to login screen
  // const { user } = useAuth();
  // if (!user) {
  //   return <Redirect href="../app/navigation/screens/login.tsx" />;
  // }


  // useFocusEffect(() => {
  //   router.replace('../app/navigation/MainContainer.tsx');
  // });

  return (
    // <View style={styles.container}>
    //   <Button title="Login" onPress={() => router.push('/login')} />
    //   <MainContainer />
    // </View>
    <MainContainer />
  );
}
