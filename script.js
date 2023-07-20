let check = function() {
  if (document.getElementById("confirm-password").value === "") {
    "";
  } else if (document.getElementById("password").value ==
    document.getElementById("confirm-password").value) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Passwords match!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Passwords don\'t match";
  }
}