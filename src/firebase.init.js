// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkKPCnLhBwht3PeMV-mascmX9JEkgIiYI",
    authDomain: "independent-service-prov-a0e7e.firebaseapp.com",
    projectId: "independent-service-prov-a0e7e",
    storageBucket: "independent-service-prov-a0e7e.appspot.com",
    messagingSenderId: "682192445181",
    appId: "1:682192445181:web:f2ff07eb0d429b3a692894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;