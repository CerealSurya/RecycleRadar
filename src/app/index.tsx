import React from 'react';
import MainContainer from './MainContainer';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const navigation = useRouter();
  const [ID, setID] = React.useState<number | null>(0);
  const [main, setMain] = React.useState<boolean>(false);
  React.useEffect(() => {
    (async () => {
      let IDD = await AsyncStorage.getItem('userId');
      if (IDD != null) {
        setID(parseInt(IDD));
      }
      if (IDD == null) { navigation.push('/login'); }
      else if (typeof parseInt(IDD) != 'number') //typeof IDD != 'number'
      {
        console.log("nade iut");
        navigation.push('/login');
      }
    })();
  }, []);

  return (
    <MainContainer />
  );
}
