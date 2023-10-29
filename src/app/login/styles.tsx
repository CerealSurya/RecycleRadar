import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#e8f5e9',  // Light green background
    },
    textTogether: {
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        marginBottom: 20,
        color: '#2e7d32',  // Dark green text color
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#2e7d32',  // Dark green text color
    },
    username: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#c8e6c9',  // Light green border color
        borderRadius: 10,
        backgroundColor: '#ffffff',  // White background
    },
    password: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#c8e6c9',  // Light green border color
        borderRadius: 10,
        backgroundColor: '#ffffff',  // White background
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#388e3c',  // Green button color
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#fff',  // White text color
    },
    signUp: {
        fontSize: 18,
        color: '#2e7d32',  // Dark green text color
        marginBottom: 10,
    },
    linkSign: {
        color: '#388e3c',  // Green text color
    },

  google: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 140,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    backgroundColor: '#A1EF8B',
    left: -90,
  },
  facebook: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 140,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#A1EF8B',
    right: 70,
  },
  holdForget: {
    alignItems: 'center',
},
});

