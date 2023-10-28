import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAhq1yejvg9vlZC8X0o4cEbOsXRZHZ5FBI",
    authDomain: "buoi6jsi.firebaseapp.com",
    databaseURL: "https://buoi6jsi-default-rtdb.firebaseio.com",
    projectId: "buoi6jsi",
    storageBucket: "buoi6jsi.appspot.com",
    messagingSenderId: "179126232380",
    appId: "1:179126232380:web:16faedf962f1505c232a39",
    measurementId: "G-1DS8PS8HFS"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  //auth giup cac ban dang nhap dang ky.
 
  