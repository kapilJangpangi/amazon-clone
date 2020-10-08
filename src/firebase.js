import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCFVvb41Mc2IM6LXCEgSbdQjsxJturZb78",
  authDomain: "clone-ae62d.firebaseapp.com",
  databaseURL: "https://clone-ae62d.firebaseio.com",
  projectId: "clone-ae62d",
  storageBucket: "clone-ae62d.appspot.com",
  messagingSenderId: "763196311500",
  appId: "1:763196311500:web:78420a7716b47961c0bf69"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth};