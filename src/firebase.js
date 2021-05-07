import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDo_z1ncnT5b_LwDu69GrYix22qGUs2WJE",
  authDomain: "ticket-33f88.firebaseapp.com",
  databaseURL: "https://ticket-33f88-default-rtdb.firebaseio.com",
  projectId: "ticket-33f88",
  storageBucket: "ticket-33f88.appspot.com",
  messagingSenderId: "763907763822",
  appId: "1:763907763822:web:0ede147721c4492161c07f",
  measurementId: "G-7EN6EZ2WVN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;