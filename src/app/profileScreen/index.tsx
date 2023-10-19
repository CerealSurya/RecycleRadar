import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type profileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation: profileScreenNavigationProp;
};

// todo: 
// 1) how many hours you've spent on the app
// 2) how many meetupds you've contributed to
// 3) make different tiers depending on this make scale later


export default function profileScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('scrollPage')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            {/* <View style={styles.header}>
                <Image source={require('/Users/lucad/Downloads/coding/self_coding/RecycleRadar/src/images')} style={styles.icon} />
                <Image source={require('./path_to_your_avatar..png')} style={styles.avatar} />
            </View>
            <View style={styles.statsContainer}>
                {["Recycled", "Energ Censored", "Polo", "Water Saved"].map((item, index) => (
                    <View key={index} style={styles.statItem}>
                        <Text>{item}</Text>
                        <Text>Vote: 7.2.8</Text>
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                {/* Place footer icons here */}
            {/* </View> * /} */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    statsContainer: {
        flex: 3,
        padding: 20,
    },
    statItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});