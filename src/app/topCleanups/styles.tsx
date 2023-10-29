import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#B4CEB3',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  card: {
    borderWidth: 5,
    margin: 10,
    backgroundColor: '#448547',
    borderRadius: 20,
  },
  postTitle: {
    position: 'relative',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  postDescrip: {
    position: 'relative',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 16,
    color: '#ffffff',
  },
  postAuthor: {
    position: 'relative',
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 18,
    color: '#ffffff',
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

