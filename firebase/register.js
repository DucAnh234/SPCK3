import { auth } from './config.js'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const formLogin = document.getElementById("form-login")
const emailElm = document.getElementById("email")
const passwordElm = document.getElementById("password")
const registerBtn = document.getElementById("register-btn")

const handleLogin = () => {
  const email = emailElm.value;
  const password = passwordElm.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('Dang ky thanh cong')
      window.location = './login.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
};

formLogin.addEventListener('submit', handleLogin)




//quan trong .

