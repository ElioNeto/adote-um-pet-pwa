// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa9RM357zXhkbSiSKCC7xYUi9FqR_UIx8",
  authDomain: "adote-um-pet-pwa.firebaseapp.com",
  projectId: "adote-um-pet-pwa",
  storageBucket: "adote-um-pet-pwa.appspot.com",
  messagingSenderId: "831907283760",
  appId: "1:831907283760:web:59d36706ae6018a23f3ef5",
  measurementId: "G-WFET9D8XR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);