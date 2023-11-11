import { auth } from './config.js'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const formLogin = document.getElementById("form-login")
const emailElm = document.getElementById("email")
const passwordElm = document.getElementById("password")
const registerBtn = document.getElementById("register-btn")

const handleLogin = (e) => {
  e.preventDefault()
  const email = emailElm.value;
  console.log(email)
  const password = passwordElm.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      alert('Dang ky thanh cong')
      window.location = './login.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
};

registerBtn.addEventListener('click', handleLogin)




//quan trong .

