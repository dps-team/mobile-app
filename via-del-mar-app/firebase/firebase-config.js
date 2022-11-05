import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import {sendPasswordResetEmail} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB7fjqVdJYtKB-6d1n69g4CCq_NRVP4xc0",
    authDomain: "veterinaria-via-del-mar.firebaseapp.com",
    projectId: "veterinaria-via-del-mar",
    storageBucket: "veterinaria-via-del-mar.appspot.com",
    messagingSenderId: "1038353182078",
    appId: "1:1038353182078:web:dda2c54f2600bc1e41572f"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const store = fb.firestore();
const storage = fb.storage();
const google = new firebase.auth.GoogleAuthProvider();

//  export {auth,store,storage, google}
 export {auth,store,storage,firebase,sendPasswordResetEmail, google}
