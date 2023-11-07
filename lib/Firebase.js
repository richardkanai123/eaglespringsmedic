// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const FireAuth = getAuth(app)

//collections
export const messagesCollection = collection(db, 'messages')
export const blogsCollection = collection(db, 'Blogs')
export const BookingsCollection = collection(db, 'Bookings')
