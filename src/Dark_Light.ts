let ModeFunction = function (): void {
  let iconDark = document.querySelector(".icon-dark") as HTMLElement;
  let iconLight = document.querySelector(".icon-light") as HTMLElement;
  let root = document.querySelector(":root") as HTMLElement;

  let ModeFunc = function (): void {
    iconDark.addEventListener("click", function (): void {
      iconDark.classList.add("active");
      iconLight.classList.add("active");
      root.classList.add("active");
    });

    iconLight.addEventListener("click", function (): void {
      iconDark.classList.remove("active");
      iconLight.classList.remove("active");
      root.classList.remove("active");
    });
  }

  ModeFunc();
}

ModeFunction();

export { ModeFunction };