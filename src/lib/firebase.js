// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpW-OiDyNILiTYwBkBLR84L--D2MxnkZc",
  authDomain: "veda-newageeducation.firebaseapp.com",
  projectId: "veda-newageeducation",
  storageBucket: "veda-newageeducation.appspot.com",
  messagingSenderId: "302814654999",
  appId: "1:302814654999:web:45ca90b7a140efd325e252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();