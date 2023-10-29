import * as FS from 'expo-file-system';

const SERVER_URL = "http://10.0.2.2:6900"; 
interface loginInterface {
    "token": string, 
    "config": number,
    "username": string
}//`${SERVER_URL}/login?usern=${usern}&passw=${passw}`
interface pic {
    "assetId": null, 
    "base64": null, 
    "duration": null, 
    "exif": null, 
    "height": 720, 
    "rotation": null, 
    "type": string, 
    "uri": string, 
    "width": Number
}
export async function loginFunc(usern:String, passw:String): Promise<loginInterface>{
    console.log(`${SERVER_URL}/login?usern=${usern}&passw=${passw}`);
    const response = await fetch(`${SERVER_URL}/login?usern=${usern}&passw=${passw}`, {
        method: 'POST',
        headers: {
            // Add headers if needed
            'Content-Type': 'application/json',
        },
    })
    
    //the JSON body is taken from the response
    //console.log(response.json());
    return response.json() as any; // as loginInterface;
}

interface publishpostInterface {
    "token": String, 
    "reason": String
}
// In your api.js (or equivalent file)
export const fetchTotalHours = async (username: string) => {
    try {
        const response = await fetch(`${SERVER_URL}/totalhours?username=${username}`)
        console.log('Response status:', response.status);  // Log the status code


        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        return data.totalHours;
    } catch (error) {
        console.error('There was a problem with the fetch:', error);
    }
};

export async function publishpost(name:String, description:String, photo:string, author:String, location:String, date:String, hoursSpent: String): Promise<publishpostInterface>{
    let response:any;
    try{
        let finalName:string = name.replace(/\s/g, "");
        console.log(finalName);
        response = await FS.uploadAsync(`${SERVER_URL}/uploadpostpicture?title=${finalName}`, photo, {
            headers: {
              "content-type": "image/jpeg",
            },
            httpMethod: "POST",
            uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });
    }
    catch(error){
        console.log("here", error);
    }
    response = JSON.parse(response.body)
    //console.log(`${SERVER_URL}${response["url"]}`);
    const body:Object = {
        "postName": name,
        "author": author,
        "picture": `${SERVER_URL}${response.url}`,
        "description": description,
        "location": location,
        "date": date,
        "hoursSpent": hoursSpent,  // Add this line to include hoursSpent in the request body
        "id": 0 //ID doesn't matter gets overwritten on server
    }
    fetch(`${SERVER_URL}/publishpost`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    // the JSON body is taken from the response
    .then(res => {
      // The response has an `any` type, so we need to cast
      // it to the `User` type, and return it from the promise
        return res.json();
    });
    return null as any;
}
interface getPostsInterface {
    "token": string, 
    "events": object[]
}
interface defaultReturn {
    "token": string
}
interface avatarReturn {
    "token": string,
    "url": string
}
export async function getPosts(page:number): Promise<getPostsInterface>{
    try{
        const response = await fetch(`${SERVER_URL}/getposts?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.json() as any;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}
export async function getUserPosts(page:number, username:string): Promise<getPostsInterface>{
    try{
        const response = await fetch(`${SERVER_URL}/getuserposts?page=${page}&usern=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.json() as any;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}
export async function getUserCleanups(page:number, username:string): Promise<getPostsInterface>{
    try{
        const response = await fetch(`${SERVER_URL}/getusercleanups?page=${page}&usern=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.json() as any;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}
export async function setUserAvatar(username:string, file:FormData, ct:string, picture:pic): Promise<defaultReturn>{
    try{
        let response = await FS.uploadAsync(`${SERVER_URL}/setavatar?usern=${username}`, picture.uri, {
            headers: {
              "content-type": ct,
            },
            httpMethod: "POST",
            uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });
        return response as any;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}

export async function getUserAvatar(username:string): Promise<string>{
    try{
        return `${SERVER_URL}/static/${username}.jpeg`;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}
export async function getTopCleanups(location:object): Promise<getPostsInterface>{
    const response = await fetch(`${SERVER_URL}/gettopcleanups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(location)
    })
    return response.json() as any;
}
export async function getCleanupPic(title:string): Promise<string>{
    return `${SERVER_URL}/static/${title.replace(/\s/g, "")}.jpeg`;
}
export async function publishcleanup(data:any, pic:any): Promise<publishpostInterface>{
    fetch(`${SERVER_URL}/publishcleanup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    // the JSON body is taken from the response
    .then(res => res.json())
    .then(res => {
      // The response has an `any` type, so we need to cast
      // it to the `User` type, and return it from the promise
        return res as publishpostInterface
    })
    try{
        let finalName:string = data.eventName.replace(/\s/g, "");
        console.log(finalName);
        let response = await FS.uploadAsync(`${SERVER_URL}/uploadcleanuppicture?title=${finalName}`, pic.uri, {
            headers: {
              "content-type": "image/jpeg",
            },
            httpMethod: "POST",
            uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });
        return response as any;
    }
    catch(error){
        console.log("here", error);
    }
    return null as any;
}