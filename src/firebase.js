import firebase from "firebase";
const firebaseConfig = {
   //add yoy firebase config here
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
