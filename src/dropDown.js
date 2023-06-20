export const displayDropDown = () => {
  const li = document.querySelectorAll("li");

  li.forEach((item) => {
    const itemContainer = item.querySelector(".info");
    item.addEventListener("mouseover", (e) => {
      //   console.log(itemContainer.children[1]);
      itemContainer.classList.toggle("active");
    });

    item.addEventListener("mouseleave", () => {
      itemContainer.classList.remove("active");
    });

    itemContainer.addEventListener("mouseover", () => {
      itemContainer.classList.toggle("active");
    });

    itemContainer.addEventListener("mouseleave", () => {
      itemContainer.classList.remove("active");
    });
  });
};

export const hello = () => {};
