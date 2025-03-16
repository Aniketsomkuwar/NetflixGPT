// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqbrLSQW9zOkFZEwozJMYYpjiO-QLSJUY",
    authDomain: "netflixgpt-261a1.firebaseapp.com",
    projectId: "netflixgpt-261a1",
    storageBucket: "netflixgpt-261a1.firebasestorage.app",
    messagingSenderId: "179763560902",
    appId: "1:179763560902:web:d7370ee7e8e488a84472c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase
export const auth = getAuth();