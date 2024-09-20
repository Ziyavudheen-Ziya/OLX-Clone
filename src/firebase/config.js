import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyAqBTemfqoWLo8_vRSd16IjnWzT93fqhLI",
  authDomain: "olx-clone-b7823.firebaseapp.com",
  projectId: "olx-clone-b7823",
  storageBucket: "olx-clone-b7823.appspot.com",
  messagingSenderId: "681566860197",
  appId: "1:681566860197:web:aef6a0284b2bee1c3dae4c",
  measurementId: "G-KFW9ZPV8L5"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);