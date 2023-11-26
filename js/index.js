const burgerToggle = document.getElementById("burger-toggle");
const burgerNavigation = document.getElementById("burger-nav");
const burgerToggleTop = document.getElementById("toggle-line-top");
const burgerToggleCenter = document.getElementById("toggle-line-center");
const burgerToggleBottom = document.getElementById("toggle-line-bottom");

// Состояние бургера
var burgerOpened = false;

function openBurger() {
  burgerOpened = true;
  burgerToggleCenter.style.visibility = "hidden";
  burgerToggleTop.style.transform = "translateY(10px) rotate(-45deg)";
  burgerToggleBottom.style.transform = "translateY(-10px) rotate(45deg)";
  burgerNavigation.style.height = "256.7px";
}

function closeBurger() {
  burgerOpened = false;
  burgerToggleTop.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleBottom.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleCenter.style.visibility = "visible";
  burgerNavigation.style.height = "0";
}

// Открытие и закрытие бургера по клику
burgerToggle.addEventListener("click", () => {
  if (burgerOpened === false) {
    openBurger();
    return;
  }
  closeBurger();
});

window.onload = () => {
  // Плавное появление контента в #main
  main.style.opacity = "1";

  // Инициализация свайпера
  new Swiper(".image-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 5,
    preloadImages: false,

    lazyPreloadPrevNext: 1,
  });
};
