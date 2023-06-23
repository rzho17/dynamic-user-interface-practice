const refreshAnimation = (element) => {
  element.classList.remove("fade");
  void element.offsetWidth;
  element.classList.add("fade");
};

const updateImage = (() => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const img = document.querySelector("img");
  let counter = [0];

  const imageArr = [
    "assets/city.jpg",
    "assets/clay.jpg",
    "assets/gates.jpg",
    "assets/singlegate.jpg",
    "assets/sun.jpg",
  ];

  right.addEventListener("click", () => {
    counter[0]++;

    refreshAnimation(img);
    img.src = imageArr[counter[0]];
    currentSlide();

    if (counter[0] > imageArr.length - 1) {
      counter[0] = 0;
      img.src = imageArr[0];
    }
  });

  left.addEventListener("click", () => {
    counter[0]--;

    if (counter[0] < 0) {
      counter[0] = imageArr.length - 1;
    }
    refreshAnimation(img);
    img.src = imageArr[counter[0]];
    currentSlide();
  });

  return { imageArr, counter, img };
})();

const buttonClick = (() => {
  const slideButtons = document.querySelectorAll(".button");

  slideButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      refreshAnimation(updateImage.img);
      updateImage.img.src = updateImage.imageArr[index];
      updateImage.counter[0] = index;
      currentSlide();
    });
  });
})();

const autoUpdate = () => {
  updateImage.counter[0]++;

  if (updateImage.counter[0] > 4) {
    updateImage.counter[0] = 0;
  }

  refreshAnimation(updateImage.img);
  updateImage.img.src = updateImage.imageArr[updateImage.counter[0]];
  currentSlide();

  console.log(updateImage.counter[0]);
};

const currentSlide = () => {
  const button = document.querySelectorAll(".button");

  button.forEach((item, element) => {
    item.classList.remove("active");

    if (element === updateImage.counter[0]) {
      item.classList.toggle("active");
    }
  });
};

const resetTimer = (() => {
  const time = 2000;
  return { time };
})();

const timerInterval = (() => {
  setInterval(autoUpdate, resetTimer.time);
})();
