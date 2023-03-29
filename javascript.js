const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#confirmed-password");
const output = document.querySelector(".output");

confirmedPassword.addEventListener("input", function (event) {
  if (confirmedPassword.value !== password.value) {
    output.textContent = "*Passwords do not match";
  } else {
    output.textContent = "";
  }
});
