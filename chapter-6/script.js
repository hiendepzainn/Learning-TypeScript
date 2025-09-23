const buttonLogin = document.querySelector("button");
const tkInput = document.getElementById("tk");
const mkInput = document.getElementById("mk");

buttonLogin.addEventListener("click", () => {
  if (
    tkInput.value === "hiendepzainn@gmail.com" &&
    mkInput.value === "1223456"
  ) {
    alert("Login success!");
    window.location.href = "success.html";
  } else {
    tkInput.style.borderColor = "red";
    mkInput.style.borderColor = "red";
    alert("Login failed!");
  }
});
