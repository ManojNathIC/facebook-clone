import firebase from 'firebase';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARRgiL8HAvJ6iuKJWPPJ1uLW1ARM4OW_M",
    authDomain: "facebook-clone-2fd80.firebaseapp.com",
    projectId: "facebook-clone-2fd80",
    storageBucket: "facebook-clone-2fd80.appspot.com",
    messagingSenderId: "165683540748",
    appId: "1:165683540748:web:7deccf40efa4b2507b8f29",
    measurementId: "G-2HWHM64WV2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //const auth = firebase.auth();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;