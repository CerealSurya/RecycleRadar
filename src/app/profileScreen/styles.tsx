import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        fontWeight: 'bold',
        flex: 1,
        backgroundColor: '#e8f5e9',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // fontFamily: 'RobotoSlab-Medium'
    },
    firstList: {
        height:250,
        paddingTop:10,
    },
    secondList: {
        position: 'relative',
        bottom:50,
        left: 5,
        paddingTop: 40,
        alignContent: 'flex-start'
    },
    title: {
        fontSize: 26,
        paddingTop: 10,
    },
    subtitle: {
        alignSelf:'center',
        alignContent:'center',
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 200,
        marginTop: 20,
        bottom: 120,
        shadowColor: '#000000',
        shadowOffset: {
        width: -8,
        height: -8,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,
    },
    avatarContainer: {
        width: 210,
        height: 210,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#9B9B9B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 5,
        top: 30,
        right:20,
        shadowColor: '#00ff00',
        shadowOffset: {
        width: -8,
        height: -8,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,

    },
    follow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    cards: {
        padding: 8,
    },
    cardRecent: {
        backgroundColor: '#fffff'
    },
    picture: {
        position: 'relative',
        left: 5,
        paddingHorizontal: 8,
        width: 200,
        height: 150,
        backgroundColor: 'black',
        borderRadius:20,
    },
    postText: {
        position: 'relative',
        alignSelf: 'center',
        bottom: 230,
        right: 180,
        fontSize: 20,
        paddingTop: 10,
    }
})
