import { useRouter } from "expo-router";
import { Text, View, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles"
import React from 'react';
import { Link } from "expo-router";
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export default function App() {
    const navigation = useRouter();
    const [photo, setPhoto] = React.useState(Object);
    const handleChoosePhoto = async () => {
        // No permissions request is necessary for launching the image library
      let result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setPhoto(result.assets[0]);
      }
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app</Text>
        <StatusBar style="auto" />
        <Link href="/createPost" asChild>
            <Pressable>
                <Text>Create Post</Text>
            </Pressable>
        </Link>
        <Button title="Create Cleanup" onPress={() => navigation.push("/createPost")} />
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    );
  }