import { ModeFunction } from "./Dark_Light.js";
import { handleNavbar, iconOutFunc } from "./handle-header.js";
import "./generate-slider-books-two.js";
import { openDivClicked } from "./open-div-saved-product.js";
import { getDataInLocalStorage } from "./get-loved-product.js";
import "./feature-books.js";
import "./scroll-header.js";
ModeFunction();
const promises = Promise.all([import("./header_navbar.js")]);
promises.then(function (result) {
    result[0].headerFunc();
});
import { searchFunc } from "./search.js";
searchFunc();
handleNavbar();
iconOutFunc();
function accountFunc() {
    let account = document.querySelector(".account h3");
    let firstName = localStorage.getItem("FirstUser");
    let lastName = localStorage.getItem("LastUser");
    account.innerHTML = `Welcome ${firstName ? JSON.parse(firstName) : "Guest"} ${lastName ? JSON.parse(lastName) : ""}`;
}
accountFunc();
openDivClicked();
window.addEventListener("DOMContentLoaded", () => {
    getDataInLocalStorage();
});
