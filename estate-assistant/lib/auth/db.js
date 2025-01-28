// Import the functions you need from the SDKs you need
import 'dotenv/config'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'dotenv/config'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_AUTH_DB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_AUTH_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_AUTH_STORAGE_BUCKET,
    messagingSenderId: process.env.ANEXT_PUBLIC_UTH_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_AUTH_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_AUTH_MEASSURMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)