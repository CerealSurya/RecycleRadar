import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        fontWeight: 'bold',
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // fontFamily: 'RobotoSlab-Medium'
    },
    firstList: {
        height:250,
        paddingTop:50,
    },
    secondList: {
        position: 'relative',
        bottom:20,
        left: 5,
        paddingTop: 50,
        alignContent: 'flex-start'
    },
    title: {
        fontSize: 26,
        paddingTop: 10,
    },
    subtitle: {
        alignSelf:'flex-start',
        alignContent:'flex-end',
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 200,
        marginTop: 20,
        bottom: 60,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#9B9B9B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 20,
        top: 60
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,

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
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
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
        borderRadius:20
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
