import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';

// Import your screens
import scrollPage from './screens/scrollPage';
import cameraPage from './screens/cameraPage';
import createPost from './screens/createPost';
import profileScreen from './screens/profileScreen';
import topCleanups from './screens/topCleanups';
import login from './screens/login';

// Screen names
const scroll = 'Home';
const camera = 'Recycle Detector';
const post = 'Post Cleanup';
const profile = 'Profile';
const top = 'View Cleanups';
const signIn = 'Login';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={signIn}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';

                    if (route.name === scroll) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === camera) {
                        iconName = focused ? 'camera' : 'camera-outline';
                    } else if (route.name === post) {
                        iconName = focused ? 'create' : 'create-outline';
                    } else if (route.name === profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === top) {
                        iconName = focused ? 'star' : 'star-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={scroll} component={scrollPage} />
            <Tab.Screen name={camera} component={cameraPage} />
            <Tab.Screen name={post} component={createPost} />
            <Tab.Screen name={profile} component={profileScreen} />
            <Tab.Screen name={top} component={topCleanups} />
        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    MainContainer: {

    }
});

