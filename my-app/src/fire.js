import firebase from 'firebase'
// import firestore from "firebase/firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-Txeo1y1h5jx0EdOcD4-narqjZ-Dsvc",
  authDomain: "tailor-app-20048.firebaseapp.com",
  projectId: "tailor-app-20048",
  storageBucket: "tailor-app-20048.appspot.com",
  messagingSenderId: "741148741187",
  appId: "1:741148741187:web:b7d47a0db2aa6399c54ef6",
  measurementId: "G-7YW5L4VWMJ"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
export const storage = firebase.storage();


