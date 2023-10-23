const SERVER_URL = "http://10.0.2.2:6900";
interface loginInterface {
    "token": string, 
    "config": number,
    "username": string
}//`${SERVER_URL}/login?usern=${usern}&passw=${passw}`

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
export function publishpost(name:String, description:String, photo:String, author:String, location:String, date:String): Promise<publishpostInterface>{
    const body:Object = {
        "postName": name,
        "author": author,
        "picture": photo,
        "description": description,
        "location": location,
        "date": date,
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
    })
    return null as any;
}
interface getPostsInterface {
    "token": string, 
    "events": object[]
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
export function publishcleanup(data:Object): Promise<publishpostInterface>{
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
    return null as any;
}