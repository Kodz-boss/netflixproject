var btn = document.getElementById("toggleBtn");
var inp = document.getElementById("passwordInput");

btn.addEventListener("click", () => {
  if (inp.type === "password") {
    inp.type = "text";
    btn.textContent = "Hide";
  } else {
    inp.type = "password";
    btn.textContent = "Show";
  }
});

var logi = document.querySelector(".logi");
var pop = document.querySelector(".pop");
var emailInput = document.querySelector(".email");
var passwordInput = document.querySelector(".password");

logi.addEventListener("click", () => {
  var emailValue = emailInput.value;
  var passwordValue = passwordInput.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,}$/;

  if (emailRegex.test(emailValue) && passwordRegex.test(passwordValue)) {
    pop.classList.toggle("active");
    console.log("Login successful!");
  } else {
    if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email.\nEmail must contain an @.");
    }
    if (!passwordRegex.test(passwordValue)) {
      alert("Please enter a valid password.\nPassword must contain at least 2 symbols and a combination of digits and letters.");
    }
  }
});