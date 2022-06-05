import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCTtjLmkR9T0jH4-5sakKtKBdumWiN9B90",
    authDomain: "estudo-e8b2a.firebaseapp.com",
    projectId: "estudo-e8b2a",
    storageBucket: "estudo-e8b2a.appspot.com",
    messagingSenderId: "128941473160",
    appId: "1:128941473160:web:f4ea4e883aef00fc710e3d",
    measurementId: "G-GE6YMKL0BN"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
  
export default firebase;