import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens
import ScrollPage from './scrollPage/index';
import CreatePost from './createPost/index';
import ProfileScreen from './profileScreen/index';
import TopCleanups from './topCleanups/index';
import createCleanup from './createCleanup/index';
import Login from './login/index';

// Screen names
const camera = 'Detector';
const post = 'Post Cleanup';
const socialPost = 'Post'
const profile = 'Profile';
const top = 'View Cleanups';
const signIn = 'Login';
let homee: string = 'Home';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: "#fff"
    }
}
export default function MainContainer() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';

                    if (route.name === homee) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === socialPost) {
                        iconName = focused ? 'camera' : 'camera-outline';
                    } else if (route.name === post) {
                        iconName = focused ? 'leaf' : 'leaf-outline';
                    } else if (route.name === profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === top) {
                        iconName = focused ? 'flame' : 'flame-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                unmountOnBlur: true,
            })}
        >
            <Tab.Screen name={homee} component={ScrollPage} />
            <Tab.Screen name={socialPost} component={CreatePost} />
            <Tab.Screen name={profile} children={ProfileScreen} />
            <Tab.Screen name={top} children={TopCleanups} />
            <Tab.Screen name={post} component={createCleanup} />

        </Tab.Navigator>
    );
}