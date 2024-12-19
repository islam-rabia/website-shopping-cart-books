import { draggingSlider } from "./dragging-slider.js";
import { saveButtonClick } from "./save-click-buttons.js";
import { getDataInLocalStorage } from "./get-loved-product.js";

let lovedData: any;
async function fetchData() {
  let result = await fetch("data/data-book.json");
  let myData = await result.json();

  lovedData = myData;
  generateDataBookOne(myData);

  let listBooksOne = document.querySelector(".books-list") as HTMLElement;
  draggingSlider(listBooksOne);
  saveButtonClick();
}

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

let listBooksOne = document.querySelector(".books-list") as HTMLElement;

function generateDataBookOne(data: object[]) {
  listBooksOne.innerHTML = data
    .map((item: any, index: any) => {
      let { id, img } = item;

      return `
      <li class="${id}">
        <div class="love-icon" data-ion="${index}">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <figure class="book-image">
          <img src="${img}" draggable="false" alt="" />
        </figure>
        <div class="book-title">
          <h1>New Book</h1>
          <p>$7.99 <del>$14.99</del></p>
          <ul class="icons-book-list">
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-half-outline"></ion-icon></li>
          </ul>
        </div>
      </li>
    `;
    })
    .join("");
  listBooksOne.addEventListener("click", (e: any) => {
    let element: any = e.target.closest(".love-icon");

    if (element) {
      let index = element.dataset.ion;
      saveToLocalStorage(index);
      getDataInLocalStorage();
    }
  });
}

let wishListLoveData: Object[] = JSON.parse(
  localStorage.getItem("wishListLoveData") || "[]"
);
function saveToLocalStorage(index: any) {
  let Duplicate = wishListLoveData.some((id) => id === lovedData[index]);

  if (!Duplicate) {
    wishListLoveData.push(lovedData[index]);

    localStorage.setItem("wishListLoveData", JSON.stringify(wishListLoveData));
  }
}

export { generateDataBookOne };
