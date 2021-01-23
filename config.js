import * as firebase from "firebase";
require("@firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-KEaAKdnG9Y1GL17wWGR3oXdH9gO3FqI",
    authDomain: "wireless-library-5938c.firebaseapp.com",
    projectId: "wireless-library-5938c",
    storageBucket: "wireless-library-5938c.appspot.com",
    messagingSenderId: "340196132764",
    appId: "1:340196132764:web:25c5ccb8892ad0eff1ea59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
