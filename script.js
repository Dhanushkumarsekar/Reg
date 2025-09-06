const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Validation Functions
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Enable/Disable button
function checkForm() {
  if (validateName() && validateEmail() && validatePassword()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Real-time validation
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);

// Prevent actual form submission (demo purpose)
document.getElementById("regForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration Successful!");
});
