function openDivClicked() {
  let lovedProduct = document.querySelector(".loved-products") as HTMLElement;
  let iconLove = document.querySelector(".love-div") as HTMLElement;
  let iconClose = document.querySelector(
    ".loved-products .btn-close"
  ) as HTMLElement;

  iconLove.addEventListener("click", () => {
    lovedProduct.classList.add("active");
  });

  iconClose.addEventListener("click", () => {
    lovedProduct.classList.remove("active");
  });
}

export { openDivClicked };
