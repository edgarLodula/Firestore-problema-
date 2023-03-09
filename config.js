import firebase from "firebase/app"
 import 'firebase/auth';
 import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPVWtQpBi-FuKwo0hlLpNA-9A9alcVB4A", 
  authDomain: "appbiblioteca-47bac.firebaseapp.com",
   projectId: "appbiblioteca-47bac",
    storageBucket: "appbiblioteca-47bac.appspot.com",
     messagingSenderId: "21879656195",
      appId: "1:21879656195:web:c7481e4931a65dfefee336"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
