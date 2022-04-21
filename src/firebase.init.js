// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLS9CzchynrKj3hEGzxnESCcC18HkJAn4",
    authDomain: "independent-service-prov-64881.firebaseapp.com",
    projectId: "independent-service-prov-64881",
    storageBucket: "independent-service-prov-64881.appspot.com",
    messagingSenderId: "697380704913",
    appId: "1:697380704913:web:d8f81df30be59f6558e530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;