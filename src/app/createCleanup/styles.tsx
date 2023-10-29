import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#92B4A7'
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
    color: 'black',
  },
  titleInput: {
    position: 'relative',
    alignContent: 'center',
    top: 15,
    left: 20,
    fontSize: 24,
    borderWidth: 2,
    height: 60,
    width: 370,
    margin: 2,
    borderRadius: 30,
    paddingTop: -5,
    paddingBottom: 2,
    paddingRight: 20,
    paddingLeft: 20,
  },
  secondButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 80,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: '#A1EF8B',
  },
  firstButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#A1EF8B',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    paddingTop: 5,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#0B3948',
  },
  photo: {
    position: 'relative',
    top: 70,
    left: 30,
    width: 340,
    height: 275,
  }
});

