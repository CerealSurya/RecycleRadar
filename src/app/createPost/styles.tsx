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
  input: {
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#c8e6c9',  // Light green border color
      borderRadius: 10,
      backgroundColor: '#ffffff',  // White background
  },
  descripInput: {
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      height: 110,
      borderWidth: 1,
      borderColor: '#c8e6c9',  // Light green border color
      borderRadius: 10,
      backgroundColor: '#ffffff',  // White background
      textAlignVertical: 'top',
      marginBottom: 20,
  },
  hoursInput: {
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      height: 40,
      borderWidth: 1,
      borderColor: '#c8e6c9',  // Light green border color
      borderRadius: 10,
      backgroundColor: '#ffffff',  // White background
      marginBottom: 20,
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 10,
      backgroundColor: '#388e3c',  // Green button color
      marginBottom: 20,
      position: 'relative',
  },
  text: {
      fontSize: 18,
      color: '#fff',  // White text color
  },
  photo: {
      width: '100%',
      height: 200,
      marginBottom: 20,
      borderRadius: 10,
  },
});
