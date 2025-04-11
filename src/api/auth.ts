import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQLTNwStReHRMAJCuCgEuea2YLlVFCQ00",
    authDomain: "malltique.firebaseapp.com",
    projectId: "malltique",
    storageBucket: "malltique.firebasestorage.app",
    messagingSenderId: "514518410717",
    appId: "1:514518410717:web:b0e27b9b76592fa20fc234",
    measurementId: "G-ZZ88RS19R1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
