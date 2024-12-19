import { saveButtonClick } from "./save-click-buttons.js";
let products = document.querySelector(".product-list-loved");
let para = document.querySelector(".loved-product p");
let wishListData = [];
function getDataInLocalStorage() {
    let data = JSON.parse(localStorage.getItem("wishListLoveData") || "[]");
    if (data.length !== 0) {
        wishListData = data;
        para.style.display = "none";
    }
    else {
        para.style.display = "block";
    }
    generateData();
}
function generateData() {
    products.innerHTML = wishListData
        .map((item) => {
        let { id, img } = item;
        return `
      <li class="${id}">
        <figure class="book-image">
          <img src="${img}" draggable="false" alt="" />
          <div class="title">
            <h1>New Book</h1>
            <p>Price: $7.99</p>
          </div>
        </figure>
        <button class="removed">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </li>
      `;
    })
        .join("");
    let removed = document.querySelectorAll(".removed");
    removed.forEach((element, index) => {
        element.addEventListener("click", () => {
            removeProductInLocalStorage(index);
        });
    });
}
function removeProductInLocalStorage(index) {
    wishListData.splice(index, 1);
    generateData();
    localStorage.setItem("wishListLoveData", JSON.stringify(wishListData));
    if (wishListData.length === 0) {
        para.style.display = "block";
    }
    let RemovedBtn = JSON.parse(localStorage.getItem("saveButtonClick") || "[]");
    RemovedBtn.splice(index, 1);
    saveButtonClick();
    localStorage.setItem("saveButtonClick", JSON.stringify(RemovedBtn));
}
export { getDataInLocalStorage };
