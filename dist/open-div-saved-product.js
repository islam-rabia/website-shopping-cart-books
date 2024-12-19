function openDivClicked() {
    let lovedProduct = document.querySelector(".loved-products");
    let iconLove = document.querySelector(".love-div");
    let iconClose = document.querySelector(".loved-products .btn-close");
    iconLove.addEventListener("click", () => {
        lovedProduct.classList.add("active");
    });
    iconClose.addEventListener("click", () => {
        lovedProduct.classList.remove("active");
    });
}
export { openDivClicked };
