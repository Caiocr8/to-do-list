// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdog0bqDHqKeX-_J3mQvxV_9vlzbgpo2U",
  authDomain: "to-do-list-cc720.firebaseapp.com",
  projectId: "to-do-list-cc720",
  storageBucket: "to-do-list-cc720.appspot.com",
  messagingSenderId: "1006597775140",
  appId: "1:1006597775140:web:ca8a186fd14971bbc41db1",
  measurementId: "G-ZNCGH4PK0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

const analytics = getAnalytics(app);

export { auth, db, storage, analytics };
