import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB52Almj9gPO_M2UfDnPb2cxHbTq9nxVh8",
    authDomain: "tae-sinsa.firebaseapp.com",
    projectId: "tae-sinsa",
    storageBucket: "tae-sinsa.appspot.com",
    messagingSenderId: "264548184207",
    appId: "1:264548184207:web:60352c59c93552511200fa",
    measurementId: "G-BZYML3KJRE"
  };


firebase.initializeApp(firebaseConfig);
export default firebase

