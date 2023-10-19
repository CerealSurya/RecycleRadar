import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';

// Import your screens
// import ScrollPage from './scrollPage/index';
import CreatePost from './createPost/index';
// import ProfileScreen from './profileScreen/index';
// import TopCleanups from './topCleanups/index';
//import Login from './screens/login';

// Screen names
const scroll = 'Home';
const camera = 'Detector';
const post = 'Post Cleanup';
const profile = 'Profile';
const top = 'View Cleanups';
const signIn = 'Login';

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
                        iconName = focused ? 'flame' : 'flame-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            {/* <Tab.Screen name={scroll} component={ScrollPage} options={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 80,
                    backgroundColor: "#fff"
                }
            }}
            /> */}
            {/* <Tab.Screen name={camera} component={CameraPage} /> */}
            <Tab.Screen name={post} component={CreatePost} />
            {/* <Tab.Screen name={profile} children={ProfileScreen} />
            <Tab.Screen name={top} children={TopCleanups} /> */}
        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    MainContainer: {

    }
});

