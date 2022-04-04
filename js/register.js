document.getElementById("rgstr_btn").addEventListener("click", store);
function store(e) {
  let name = document.getElementById("name");
  let Name = name.value;
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

  if (name.value == "") {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
    validate = false;
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  }

  if (validate) {
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    let data = {
      Name: Name,
      Email: Email,
      Pw: Pw,
    };
    formData.push(data);
    localStorage.setItem("formData", JSON.stringify(formData));
    window.open("../login.html");
  }

  //alert("Your account has been created");
}
