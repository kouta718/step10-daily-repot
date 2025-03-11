// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data";
import { submitData } from "./my-modules/submit-data";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID
    // apiKey: "AIzaSyD_6KjYDJNHOfnYbKNidGjDwCxwI3qLZ7M",
    // authDomain: "daily-report-d7de4.firebaseapp.com",
    // projectId: "daily-report-d7de4",
    // storageBucket: "daily-report-d7de4.firebasestorage.app",
    // messagingSenderId: "655501734099",
    // appId: "1:655501734099:web:47c1e63e45039321e9a426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化
const db = getFirestore(app);
console.log(firebaseConfig);

// Cloud Firestoreから取得したデータを表示する
if(document.getElementById("js-history")) {
    fetchHistoryData(getDocs, collection, db);
}

// Cloud Firestoreにデータを送信する
if(document.getElementById("js-form")) {
    document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
};

