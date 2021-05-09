import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDAWETQkdTZnJrOk3NI7nKl2cSPFdObDfo",
  authDomain: "netflix-8af28.firebaseapp.com",
  projectId: "netflix-8af28",
  storageBucket: "netflix-8af28.appspot.com",
  messagingSenderId: "900051916903",
  appId: "1:900051916903:web:6169e59f88a118c4bddcc2",
  measurementId: "G-486PZZK08Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log("auth",auth)

export {auth}
export default db;