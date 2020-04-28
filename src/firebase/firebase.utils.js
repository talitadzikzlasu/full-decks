import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB_dQYLfyUQFmDV6jbVb08ZEG1dWytgw4c",
    authDomain: "full-decks.firebaseapp.com",
    databaseURL: "https://full-decks.firebaseio.com",
    projectId: "full-decks",
    storageBucket: "full-decks.appspot.com",
    messagingSenderId: "647446727401",
    appId: "1:647446727401:web:15a07e0a83bf4369757e78"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
