const signBtn = document.querySelector(".sign-up-btn");
const inputs = document.querySelectorAll("input");
const passwordInputs = document.querySelectorAll('input[type="password"]');

passwordInputs.forEach((input) => {
  input.addEventListener("change", () => {
    checkPassword();
  });
  input.addEventListener("click", () => {
    checkPassword();
  });
});
inputs.forEach((input) => {
  input.addEventListener("change", () => {
    checkEmptyInput();
  });
  input.addEventListener("click", () => {
    checkEmptyInput();
  });
});

function checkEmptyInput() {
  [...inputs].every((input) => input.value.length >= 1)
    ? (signBtn.disabled = false)
    : (signBtn.disabled = true);
}
function checkPassword() {
  if ([...passwordInputs].every((input) => input.value.length >= 8)) {
    passwordInputs[0].value === passwordInputs[1].value
      ? passwordInputs.forEach((input) => input.classList.remove("error"))
      : passwordInputs.forEach((input) => input.classList.add("error"));
    signBtn.disabled = false;
  } else {
    signBtn.disabled = true;
  }
}

signBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
