import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: '#e8f5e9',  // Light green background
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        marginBottom: 20,
        color: '#2e7d32',  // Dark green text color
    },
    titleInput: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#e8f5e9',  // Light Green background
        shadowColor: 'black',
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 15,
    },
    firstButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#e8f5e9',  // Light Green background
        shadowColor: 'black',
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 15,
    },
    secondButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#e8f5e9',  // Light Green background
        shadowColor: 'black',
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 15,
    },
    text: {
        fontSize: 18,
        color: '#2e7d32',  // White text color
    },
    photo: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
});