// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa9RM357zXhkbSiSKCC7xYUi9FqR_UIx8",
  authDomain: "adote-um-pet-pwa.firebaseapp.com",
  databaseURL: "https://adote-um-pet-pwa-default-rtdb.firebaseio.com",
  projectId: "adote-um-pet-pwa",
  storageBucket: "adote-um-pet-pwa.appspot.com",
  messagingSenderId: "831907283760",
  appId: "1:831907283760:web:59d36706ae6018a23f3ef5",
  measurementId: "G-WFET9D8XR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getDatabase();

export function writeData(collection: string, data: any) {
  set(ref(db, collection), data);
}
export function writeAddData(collection: string, data: any) {
  push(ref(db, collection), data);
}

export function readSubsData(collection:string):any{
  const starCountRef = ref(db, collection);
  onValue(starCountRef, (snapshot) => {
  let data = snapshot.val();
  return data
});

}

export async function createUser (email:string, password:string, data?:any):Promise<any>{
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   let sanitizedEmail = email.replace(/[.@_-]/g, "");
    console.log(data, "firebase");
    writeData(`users/${sanitizedEmail}`, data)
    return "success"
    // ...
  })
  .catch((error) => {
   // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    return errorMessage
  })
  //return "Não foi possivel comunicar com o servidor"
}

export function login(email:string, password:string):any{
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    
    userCredential.user.getIdTokenResult().then((res)=>{
      let token = res.token
      sessionStorage.setItem("token", token);
    })
    return "sucesso"
  }).catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    return errorMessage
  })
}