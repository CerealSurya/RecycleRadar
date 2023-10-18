import { Redirect, useRouter, useFocusEffect } from "expo-router";
import { Text, View, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles"
import React from 'react';
import { Link } from "expo-router";
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const navigation = useRouter();
  // const { user } = useAuth();
  // if (!user) {
  //   return <Redirect href="../app/navigation/screens/login.tsx" />;
  // }

  // const router = useRouter();

  // useFocusEffect(() => {
  //   router.replace('../app/navigation/MainContainer.tsx');
  // });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <Link href="/src/app/navigation/screens/createPost.tsx" asChild>
        <Pressable>
          <Text>Create Post</Text>
        </Pressable>
      </Link>
      <Button title="Login" onPress={() => navigation.push("/login")} />
      <MainContainer />
    </View>
  );
}
