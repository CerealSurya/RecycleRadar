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
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#c8e6c9',  // Light green border color
      borderRadius: 10,
      backgroundColor: '#ffffff',  // White background
  },
  firstButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 10,
      backgroundColor: '#388e3c',  // Green button color
      marginBottom: 20,
  },
  secondButton: {
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
  photo: {
      width: '100%',
      height: 200,
      marginBottom: 20,
      borderRadius: 10,
  },
});







// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     backgroundColor: '#92B4A7'
//   },
//   title: {
//     alignSelf: 'flex-start',
//     fontSize: 50,
//     paddingTop: 50,
//     paddingBottom: 5,
//     paddingLeft: 20,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'black',
//   },
//   titleInput: {
//     position: 'relative',
//     alignContent: 'center',
//     top: 15,
//     left: 20,
//     fontSize: 24,
//     borderWidth: 2,
//     height: 60,
//     width: 370,
//     margin: 2,
//     borderRadius: 30,
//     paddingTop: -5,
//     paddingBottom: 2,
//     paddingRight: 20,
//     paddingLeft: 20,
//   },
//   secondButton: {
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     top: 80,
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     backgroundColor: '#A1EF8B',
//   },
//   firstButton: {
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     top: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     backgroundColor: '#A1EF8B',
//   },
//   text: {
//     fontSize: 20,
//     lineHeight: 21,
//     paddingTop: 5,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: '#0B3948',
//   },
//   photo: {
//     position: 'relative',
//     top: 70,
//     left: 30,
//     width: 340,
//     height: 275,
//   }
// });