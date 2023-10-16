import { useRouter } from "expo-router";
import { Text, View, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles"
import React from 'react';
import { Link } from "expo-router";
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator;

export default function App() {
  const navigation = useRouter();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <Link href="/createPost" asChild>
        <Pressable>
          <Text>Create Post</Text>
        </Pressable>
      </Link>
      <Button title="Create Cleanup" onPress={() => navigation.push("/login")} />
    </View>
  );
}
const navigation = useRouter();

return (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app</Text>
    <StatusBar style="auto" />
    <Link href="/createPost" asChild>
      <Pressable>
        <Text>Create Post</Text>
      </Pressable>
    </Link>
    <Button title="Create Cleanup" onPress={() => navigation.push("/createPost")} />
    <MainContainer />
  </View>
);
}