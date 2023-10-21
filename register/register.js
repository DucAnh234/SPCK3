let register = document.getElementById("regis");
register.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let pw = document.getElementById("password");

 
  if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
    alert("Vui lòng nhập email và mật khẩu của bạn");
  } else if (email.value.trim().length == 0) {
    alert("Vui lòng nhập email của bạn");
  } else if (pw.value.trim().length == 0) {
    alert("Vui lòng nhập mật khẩu của bạn");
  } else if (pw.value.trim().length < 8) {
    alert("Mật khẩu cần dài ít nhất 8 ký tự.");
  } 
 
  else {
    if (localStorage.users) {
     
      let users = JSON.parse(localStorage.users);
      
      users.push({
        email: email.value.trim(),
        pw: pw.value.trim(),
      });
      
      localStorage.setItem("users", JSON.stringify(users));
     
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email: email.value.trim(),
            pw: pw.value.trim(),
          },
        ])
      );
    }
    location.replace("../login/login.html");
  }
});
