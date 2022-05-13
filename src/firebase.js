import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-mq5SiBEbKDHVT0sjuBdIcE2S-n2Lc-o",
  authDomain: "react-2022-d7ed2.firebaseapp.com",
  projectId: "react-2022-d7ed2",
  storageBucket: "react-2022-d7ed2.appspot.com",
  messagingSenderId: "571846083285",
  appId: "1:571846083285:web:f35cbe0c4df1c59436d85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};