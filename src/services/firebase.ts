import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTj_pc7J4TDSKtM78FlrgwRvUc_0NhYs4",
  authDomain: "letmeask-b18f2.firebaseapp.com",
  databaseURL: "https://letmeask-b18f2-default-rtdb.firebaseio.com",
  projectId: "letmeask-b18f2",
  storageBucket: "letmeask-b18f2.appspot.com",
  messagingSenderId: "205287173575",
  appId: "1:205287173575:web:c8a0ddfb289ba9a7617de2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
