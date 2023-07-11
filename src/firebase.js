
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEMsf5fewZ5480IM-luhdZovmscD9N40k",
  authDomain: "react-hooks-blog-d84b1.firebaseapp.com",
  projectId: "react-hooks-blog-d84b1",
  storageBucket: "react-hooks-blog-d84b1.appspot.com",
  messagingSenderId: "116250324200",
  appId: "1:116250324200:web:420b7d2e598cde2fe86d5d"
};


const app = firebase.initializeApp(firebaseConfig);
export default app;