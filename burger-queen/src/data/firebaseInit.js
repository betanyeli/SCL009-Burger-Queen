import firebase from 'firebase';


    const firebaseConfig = firebase.initializeApp({
      apiKey: "AIzaSyBbuuEgdLjC7Ln12GNLJWrYQ1YBrX_trhg",
      authDomain: "burger-queen-labs.firebaseapp.com",
      databaseURL: "https://burger-queen-labs.firebaseio.com",
      projectId: "burger-queen-labs",
      storageBucket: "burger-queen-labs.appspot.com",
      messagingSenderId: "292724101558",
      appId: "1:292724101558:web:6b135c440a0e1172"
    });
const db = firebaseConfig.firestore();
   
export { db }