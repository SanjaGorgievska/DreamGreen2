import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import 'firebase/storage';

// Replace this with your own config details
// var config = {
//     apiKey: "AIzaSyDeEarQ-5gA2wUquzj-yiVurZNAFtONhHw",
//     authDomain: "aplikacija-ad746.firebaseapp.com",
//     databaseURL: "https://aplikacija-ad746.firebaseio.com",
//     projectId: "aplikacija-ad746",
//     storageBucket: "",
//     messagingSenderId: "182795798750",
//     appId: "1:182795798750:web:6a1b447d10faf12e"
// };

var config = {
    apiKey: "AIzaSyAE4UoVUQ4g83jNPnTktEkR8VqBT2gjVUo",
    authDomain: "podatoci-be5fd.firebaseapp.com",
    databaseURL: "https://podatoci-be5fd.firebaseio.com",
    projectId: "podatoci-be5fd",
    storageBucket: "podatoci-be5fd.appspot.com",
    messagingSenderId: "256775861707",
    appId: "1:256775861707:web:86bdbc8819799e96"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();

export {
    storage, firebase as default
}

