// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNRaRe7VK5WMKWEldU6Uufas624shXjs8",
  authDomain: "birthday-a9a6e.firebaseapp.com",
  projectId: "birthday-a9a6e",
  storageBucket: "birthday-a9a6e.appspot.com",
  messagingSenderId: "268445610061",
  appId: "1:268445610061:web:3a9c654bbfd0e42ce8ec04"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export default firebase;