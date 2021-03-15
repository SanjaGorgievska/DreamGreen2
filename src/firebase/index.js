import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
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

const storage = firebase.storage();

export {
    storage, firebase as default
}