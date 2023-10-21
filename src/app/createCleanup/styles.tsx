import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    height: 60,
    width: 320,
    margin: 2,
    borderBottomWidth: 2,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight:20,
  },
  secondButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 80,
    right: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: 'black',
  },
  firstButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 30,
    left: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    paddingTop: 5,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  photo: {
    position: 'relative',
    top: 70,
    left: 30,
    width: 340,
    height: 275,
  }
});

