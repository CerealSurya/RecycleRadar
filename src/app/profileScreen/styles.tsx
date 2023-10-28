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
        fontFamily: 'RobotoSlab-Medium'
    },
    title: {
        fontSize: 26,
        paddingTop: 10,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#9B9B9B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
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

    }
})
