import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDMOFKFVmhNIqxH4T2iiHPdZZ6rRfoM7Uw",
  authDomain: "school-attendance-afc9b.firebaseapp.com",
  projectId: "school-attendance-afc9b",
  databaseURL: "https://school-attendance-afc9b.firebaseio.com",
  storageBucket: "school-attendance-afc9b.appspot.com",
  messagingSenderId: "150922704154",
  appId: "1:150922704154:web:feca030208d054365d68a3"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();