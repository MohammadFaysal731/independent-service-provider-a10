// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7HwaGF5pILPG-RI1LXBpvUvfnDqpBpvI",
    authDomain: "independent-service-prov-f1a49.firebaseapp.com",
    projectId: "independent-service-prov-f1a49",
    storageBucket: "independent-service-prov-f1a49.appspot.com",
    messagingSenderId: "408419015402",
    appId: "1:408419015402:web:3cf6b539b2ebd4c0635593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;