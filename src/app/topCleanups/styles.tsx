import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e0e5ec',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  card: {
    alignSelf: 'center',
    borderRadius: 30,
    margin: 10,
    padding: 20,
    backgroundColor: '#e0e5ec',
    shadowColor: 'rgb(37, 150, 190)',
    shadowOffset: {
      width: -12,
      height: -12,
    },
    shadowOpacity: 1,  // Adjusted opacity to a valid value
    shadowRadius: 30,
    elevation: 10,
    overflow: 'hidden',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,  // Adjusted border radius
    backgroundColor: '#e0e5ec',  // Adjusted background color
    borderWidth: 2,  // Added border
    borderColor: '#D1D9E6',  // Added border color
  },
  time: {
    position: 'relative',
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 14,
    color: '#333',  // Adjusted color
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#e0e5ec',
    shadowColor: '#D1D9E6',
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  postTitle: {
    position: 'relative',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',  // Adjusted color
  },
  postDescrip: {
    position: 'relative',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 16,
    color: '#333',  // Adjusted color
  },
  postAuthor: {
    position: 'relative',
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 18,
    color: '#333',  // Adjusted color
  },
  postPicture: {
    position: 'relative',
    alignSelf: 'center',
    paddingLeft: 10,
    width: 341,
    height: 275,
    borderRadius: 10,
    borderWidth: 2,  // Added border
    borderColor: '#D1D9E6',  // Added border color
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 50,
    paddingTop: 50,
    paddingBottom: 5,
    paddingLeft: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#333',  // Adjusted color
  },
  titleInput: {
    position: 'relative',
    top: 15,
    left: 30,
    fontSize: 24,
    borderWidth: 0,
    height: 80,
    width: 320,
    margin: 2,
    borderBottomWidth: 2,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 20,
    borderRadius: 12,  // Adjusted border radius
    backgroundColor: '#e0e5ec',  // Adjusted background color
    shadowColor: '#D1D9E6',
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  descripInput: {
    position: 'relative',
    top: 30,
    left: 30,
    fontSize: 24,
    borderWidth: 0,
    height: 80,
    width: 320,
    margin: 2,
    borderBottomWidth: 2,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 20,
    borderRadius: 12,  // Adjusted border radius
    backgroundColor: '#e0e5ec',  // Adjusted background color
    shadowColor: '#D1D9E6',
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  secondButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 105,
    right: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: '#e0e5ec',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  firstButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 60,
    left: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    backgroundColor: '#e0e5ec',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },
  text: {
    margin: 48,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',  // Changed color to a dark gray to match the neumorphic design
  },
  photo: {
    position: 'relative',
    top: 80,
    left: 30,
    width: 340,
    height: 275,
    borderRadius: 30,
    backgroundColor: '#e0e5ec',  // Set background color to match neumorphic design
    shadowColor: '#aaa',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },
});

// export const styles = StyleSheet.create({
//   background: {
//     backgroundColor: '#e0e5ec',
//   },
//   container: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     alignSelf: 'center',
//   },
//   card: {
//     borderWidth: 5,
//     margin: 10,
//     backgroundColor: '#448547',
//     borderRadius: 20,
//   },
//   avatar: {
//     // flex: 1,
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   time: {
//     position: 'relative',
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingBottom: 20,
//     fontSize: 14,
//     color: '#ffffff',
//   },
//   icons: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     right: -20,
//   },
//   button: {
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 5,
//     width: 120,
//     height: 50,
//     right: 20,
//     borderRadius: 0,
//   },
//   postTitle: {
//     position: 'relative',
//     alignSelf: 'center',
//     textAlign: 'center',
//     paddingTop: 10,
//     paddingLeft: 10,
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   postDescrip: {
//     position: 'relative',
//     paddingTop: 10,
//     paddingLeft: 10,
//     paddingBottom: 20,
//     fontSize: 16,
//     color: '#ffffff',
//   },
//   postAuthor: {
//     position: 'relative',
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingBottom: 20,
//     fontSize: 18,
//     color: '#ffffff',
//   },
//   postPicture: {
//     position: 'relative',
//     alignSelf: 'center',
//     paddingLeft: 10,
//     width: 341,
//     height: 275,
//     borderRadius: 10,
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
//     top: 15,
//     left: 30,
//     fontSize: 24,
//     borderWidth: 0,
//     height: 80,
//     width: 320,
//     margin: 2,
//     borderBottomWidth: 2,
//     paddingTop: 5,
//     paddingBottom: 2,
//     paddingRight: 20,
//   },
//   descripInput: {
//     position: 'relative',
//     top: 30,
//     left: 30,
//     fontSize: 24,
//     borderWidth: 0,
//     height: 80,
//     width: 320,
//     margin: 2,
//     borderBottomWidth: 2,
//     paddingTop: 5,
//     paddingBottom: 2,
//     paddingRight: 20,
//   },
//   secondButton: {
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     top: 105,
//     right: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 12,
//     backgroundColor: 'black',
//   },
//   firstButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     top: 60,
//     left: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 12,
//     backgroundColor: 'black',
//   },
//   text: {
//     margin: 48,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'black'
//   },
//   photo: {
//     position: 'relative',
//     top: 80,
//     left: 30,
//     width: 340,
//     height: 275,
//     borderRadius: 30,
//   }
// });












// import { StyleSheet } from 'react-native';


// export const styles = StyleSheet.create({
//   background: {
//     backgroundColor: '#B4CEB3',
//   },
//   container: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     alignSelf: 'center',
//   },
//   card: {
//     borderWidth: 5,
//     margin: 10,
//     backgroundColor: '#448547',
//     borderRadius: 20,
//   },
//   postTitle: {
//     position: 'relative',
//     alignSelf: 'center',
//     textAlign: 'center',
//     paddingTop: 10,
//     paddingLeft: 10,
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   postDescrip: {
//     position: 'relative',
//     paddingTop: 10,
//     paddingLeft: 10,
//     paddingBottom: 20,
//     fontSize: 16,
//     color: '#ffffff',
//   },
//   postAuthor: {
//     position: 'relative',
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingBottom: 20,
//     fontSize: 18,
//     color: '#ffffff',
//   },
//   postPicture: {
//     position: 'relative',
//     alignSelf: 'center',
//     paddingLeft: 10,
//     width: 351,
//     height: 275,
//     borderRadius: 10,
//   },
//   text: {
//     margin: 48,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'black'
//   },
// });

