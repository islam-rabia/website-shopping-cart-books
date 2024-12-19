let ModeFunction = function () {
    let iconDark = document.querySelector(".icon-dark");
    let iconLight = document.querySelector(".icon-light");
    let root = document.querySelector(":root");
    let ModeFunc = function () {
        iconDark.addEventListener("click", function () {
            iconDark.classList.add("active");
            iconLight.classList.add("active");
            root.classList.add("active");
        });
        iconLight.addEventListener("click", function () {
            iconDark.classList.remove("active");
            iconLight.classList.remove("active");
            root.classList.remove("active");
        });
    };
    ModeFunc();
};
ModeFunction();
export { ModeFunction };
