import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  postTitle: {
    position: 'relative',
    paddingTop:10,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'black',
    width: 500,
    color:'white',
  },
  postDescrip: {
    position: 'relative',
    paddingTop:10,
    paddingLeft: 10,
    paddingBottom: 40,
    fontSize: 16,
    backgroundColor: 'black',
    color:'white',
  },
  postAuthor: {
    position: 'relative',
    paddingTop:2,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 18,
    backgroundColor: 'black',
    color:'white',
  },
  postPicture: {
    position: 'relative',
    left: 30,
    paddingLeft: 10,
    width: 340,
    height: 275,
    backgroundColor: 'black',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 50,
    paddingTop: 50,
    paddingBottom:5,
    paddingLeft: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
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
    paddingRight:20,
  },
  text: {
    margin: 48,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  photo: {
    position: 'relative',
    top: 80,
    left: 30,
    width: 340,
    height: 275,
  }
});

