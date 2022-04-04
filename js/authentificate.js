function isAuthentificate() {
  let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  if (!connectedUser) {
    window.location.href = "../login.html";
  }
}
