import { auth } from"./config.js";
import {  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const logoutBtn = document.getElementById('logout-btn');

const handlelogout = () => {
    signOut(auth).then(() => {
        window.location = "./login.html"
        })
        .catch((error) => {
        alert('signout')
       
      })
}