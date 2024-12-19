import { EmailFuncInt, KeyUpFuncEmail } from "./email-valid.js";
import { PasswordFuncInt, KeyUpFuncPassword } from "./password-valid.js";
import { iconFunction } from "./show-pass.js";

let emailInput = document.querySelector(".formOne .Email input");
let textEmail = document.querySelector(".formOne .Email .text");

let passwordInput = document.querySelector(".formOne .password input");
let textPass = document.querySelector(".formOne .password .text");

let formOne = document.querySelector(".formOne");

KeyUpFuncEmail();
KeyUpFuncPassword();

function validationForm() {
  formOne.addEventListener("submit", (event) => {
    event.preventDefault();

    EmailFuncInt();
    PasswordFuncInt();

    let getLocalStorageEmail = JSON.parse(localStorage.getItem("Email"));
    let getLocalStoragePass = JSON.parse(localStorage.getItem("Password"));

    if (
      emailInput.value == getLocalStorageEmail &&
      passwordInput.value == getLocalStoragePass
    ) {
      emailInput.classList.remove("false");
      emailInput.classList.add("true");
      textEmail.classList.add("active");

      passwordInput.classList.remove("false");
      passwordInput.classList.add("true");
      textPass.classList.add("active");

      setTimeout(() => {
        location.href = "index.html";
      }, 1500);
    }
  });
}

validationForm();
iconFunction();
