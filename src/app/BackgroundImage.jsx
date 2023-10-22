
import React from 'react';
import {
    Text, View, TextInput, ImageBackground,
    StyleSheet, Dimensions
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BackgroundImg = () => {
    return (
        <View>
            <ImageBackground
                source={{
                    uri:
                        'https://files.oaiusercontent.com/file-BY7bDq7leZtvBEdcTPInsenL?se=2023-10-22T01%3A00%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=attachment%3B%20filename%3Dada0725f-0be7-47c9-9448-b4f9e92486e9.webp&sig=/Voar%2BJb3r19ycbxIsaLALH/SbfuY6zh6pfO73YnuBg%3D',
                }}
                resizeMode="stretch"
                style={styles.img}>
                <TextInput placeholder="Geeks for Geeks" style={styles.input} />
            </ImageBackground>
        </View>
    );
};

export default BackgroundImg;

const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
});
