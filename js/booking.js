const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-error");
const messageSuccess = document.querySelector(".message-success");
const button = document.querySelector("button");

function validateForm(event) {
  event.preventDefault();
  if (checkLength(name.value, 1) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validatePhoneno(phone.value) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }

  if (
    checkLength(name.value, 1) &&
    validateEmail(email.value) &&
    validatePhoneno(phone.value) === true
  ) {
    messageSuccess.innerHTML =
      "Booking confirmation will be sent to your e-mail within 24 hours";
    form.reset();
  } else {
    messageSuccess.innerHTML = "";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validatePhoneno(phone) {
  const regEx = /^\d{8}$/;
  const patternMatches = regEx.test(phone);
  return patternMatches;
}
