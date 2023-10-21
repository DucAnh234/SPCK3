let login = document.getElementById("form-login");
login.addEventListener("submit", (e) => {
  e.preventDefault();

  let users = JSON.parse(localStorage.users);
 
  let emailUserEnter = document.getElementById("email");
  let pwUserEnter = document.getElementById("password");

  let check = users.map(
    (index) => index.email == emailUserEnter.value.trim() && index.pw == pwUserEnter.value.trim()
  );

  if (check[0] == true) {
    window.location.href = "../Kem/kem.html";
    console.log('thành công')
  } else {
    alert("Vui lòng nhập lại");
  }
});
