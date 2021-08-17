import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBVn7-E_RQBvddgFKfnljbiHhEwNlmDudU",
    authDomain: "tweet-48868.firebaseapp.com",
    projectId: "tweet-48868",
    storageBucket: "tweet-48868.appspot.com",
    messagingSenderId: "489908071649",
    appId: "1:489908071649:web:fdd412670d638fc7081ba0"
  };
// Initialize firebase app  
const firebaseApp=firebase.initializeApp(firebaseConfig);
//connect DB 
const db=firebaseApp.firestore();
//Authentication 
const auth=firebase.auth(); 
//Add provider for google Authentication
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
export{auth,provider,storage};
export default db;
