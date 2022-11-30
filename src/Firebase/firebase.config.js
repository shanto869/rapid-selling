// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2qTTnpLLBczNUurz7G1knO7zEQxLZGL8",
    authDomain: "rapid-reselling.firebaseapp.com",
    projectId: "rapid-reselling",
    storageBucket: "rapid-reselling.appspot.com",
    messagingSenderId: "615547503818",
    appId: "1:615547503818:web:bc6e617cef2b15c0182033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;