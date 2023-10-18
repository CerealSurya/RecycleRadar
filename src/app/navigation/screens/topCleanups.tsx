import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your own ParamList if you have specific routes and parameters
type RootStackParamList = {
    scrollPage: undefined;  // Replace 'undefined' with the type of parameters that 'scrollPage' expects, if any
    // Add other routes here
};

type TopCleanupsNavigationProp = StackNavigationProp<RootStackParamList, 'scrollPage'>;

type Props = {
    navigation: TopCleanupsNavigationProp;
};

export default function topCleanups({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('scrollPage')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Trending</Text>
        </View>
    );
}
