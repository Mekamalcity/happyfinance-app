import 'firebase/auth';

import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJAQcSjnrctdMjjBnQTucTHGGSKm4Wd2A",
    authDomain: "happyfinanceapp.firebaseapp.com",
    projectId: "happyfinanceapp",
    storageBucket: "happyfinanceapp.appspot.com",
    messagingSenderId: "748542722405",
    appId: "1:748542722405:web:ec6c2839d4a94a41aae18c",
    measurementId: "G-P95EQFS296",
    databaseURL: "https://happyfinanceapp-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export default app;
