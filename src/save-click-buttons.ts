function saveButtonClick() {
  let btnProducts = document.querySelectorAll(
    ".love-icon"
  ) as NodeListOf<Element>;
  let activeButtons: object[] = JSON.parse(
    localStorage.getItem("saveButtonClick") || "[]"
  );

  btnProducts.forEach((element: any) => {
    let index: any = element.dataset.ion;

    if (activeButtons.includes(index)) {
      element.classList.add("active");
      element.querySelector("ion-icon").setAttribute("name", "heart");
      element.querySelector("ion-icon").style.color = "#F44336";
    }

    element.addEventListener("click", () => {
      element.classList.toggle("active");
      element.querySelector("ion-icon").style.color = "#F44336";

      let isActive = element.classList.contains("active");
      const iconName = isActive ? "heart" : "heart-outline";

      element.querySelector("ion-icon").setAttribute("name", iconName);
      let Duplicate = activeButtons.some((id) => id === index);

      if (!Duplicate) {
        if (isActive) {
          activeButtons.push(index);
        }
      }

      localStorage.setItem("saveButtonClick", JSON.stringify(activeButtons));
    });
  });
}

export { saveButtonClick };
