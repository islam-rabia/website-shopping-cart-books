import { ModeFunction } from "../dist/Dark_Light.js";
import { handleNavbar, iconOutFunc } from "../dist/handle-header.js";
import { getCountProductInCart } from "./get-data-inLocalStorage.js";
import { getDataInLocalStorage } from "./handle-data.js";
import { headerFunc } from "../dist/header_navbar.js";
import "../dist/scroll-header.js";

function accountFunc() {
  let account = document.querySelector(".account h3");
  let firstName = localStorage.getItem("FirstUser");
  let lastName = localStorage.getItem("LastUser");
  account.innerHTML = `Welcome ${firstName ? JSON.parse(firstName) : "Guest"} ${
    lastName ? JSON.parse(lastName) : ""
  }`;
}

let counter = document.querySelector(".counter");
let counterNumber = document.querySelector(".counter p");

let local = JSON.parse(localStorage.getItem("wishListDataArray")) || [];
if (local.length === 0) {
  counter.classList.remove("active");
} else {
  const wishListData =
    JSON.parse(localStorage.getItem("wishListDataArray")) || [];
  counterNumber.innerHTML = wishListData.length;
  counter.classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  getDataInLocalStorage();
});

accountFunc();
ModeFunction();
handleNavbar();
iconOutFunc();
getCountProductInCart();
headerFunc();
