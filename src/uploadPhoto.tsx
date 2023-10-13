import { Platform } from 'react-native';
const SERVER_URL = "localhost";

export const handleUploadPhoto = (photo: any) => {
    
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(createFormData(photo, { userId: '123' })),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
};

const createFormData = (photo: any, body = {}) => {
    //const data = new FormData();
    // data.append('photo', {
    //     name: photo.fileName,
    //     type: photo.type,
    //     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    // });

    const data: Object = {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri
    }
    return data;
};