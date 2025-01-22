// Import the functions you need from the SDKs you need
import 'dotenv/config'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'dotenv/config'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.AUTH_DB_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.AUTH_PROJECT_ID,
    storageBucket: process.env.AUTH_STORAGE_BUCKET,
    messagingSenderId: process.env.AUTH_MESSAGING_SENDER_ID,
    appId: process.env.AUTH_APP_ID,
    measurementId: process.env.AUTH_MEASSURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);