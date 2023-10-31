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
    width: 351,
    height: 275,
    borderRadius: 10,
  },
  text: {
    margin: 48,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
});

