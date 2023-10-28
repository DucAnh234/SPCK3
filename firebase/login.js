import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const formLogin = document.getElementById("form-login")
const emailElm = document.getElementById("email")
const passwordElm = document.getElementById("password")
const loginBtn = document.getElementById("login-btn")

const handleLogin = (e) => {
  e.preventDefault();
  const email = emailElm.value;
  const password = passwordElm.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('dang nhap thanh cong')
      window.location = './index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });
};

formLogin.addEventListener('submit', handleLogin)



