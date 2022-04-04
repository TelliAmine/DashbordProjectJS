let users = JSON.parse(localStorage.getItem("formData") || "[]");
document.getElementById("login_btn").addEventListener("click", login);
function login(e) {
  let email = document.getElementById("email");
  let Email = email.value;
  let pw = document.getElementById("pw");
  let Pw = pw.value;
  let validate = true;

  e.preventDefault();
  if (email.value == "") {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    validate = false;
  } else if (!email.value.includes("@")) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    validate = false;
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }
  if (pw.value == "") {
    pw.classList.add("is-invalid");
    pw.classList.remove("is-valid");
    validate = false;
  } else {
    pw.classList.add("is-valid");
    pw.classList.remove("is-invalid");
  }

  if (validate) {
    const userFound = users.find(
      (user) => user.Email == Email && user.Pw == Pw
    );
    if (userFound != undefined) {
      //alert("Your account has been created");
      // window.open("../Dashboard.html");
      localStorage.setItem("connectedUser", JSON.stringify(userFound));
      window.location.href = "../index.html";
    } else {
      alert("Error on login");
    }
  }
}
