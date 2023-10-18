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
    <View style={styles.container}>
      <MainContainer />
    </View>
  );
}
