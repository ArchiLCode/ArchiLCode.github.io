const burgerToggle = document.getElementById("burger-toggle");
const burgerNavigation = document.getElementById("burger-nav");
const burgerToggleTop = document.getElementById("toggle-line-top");
const burgerToggleCenter = document.getElementById("toggle-line-center");
const burgerToggleBottom = document.getElementById("toggle-line-bottom");
const main = document.getElementById("main");

var burgerOpened = false;
burgerToggle.addEventListener("click", () => {
  if (burgerOpened === false) {
    burgerNavigation.style.display = "block";
    burgerOpened = true;
    burgerToggleCenter.style.visibility = "hidden";
    burgerToggleTop.style.transform = "translateY(10px) rotate(45deg)";
    burgerToggleBottom.style.transform = "translateY(-10px) rotate(-45deg)";
    burgerNavigation.style.animation = "changeHeight 1s";
    burgerNavigation.style.height = "calc(100vh - 80px)";
    document.body.style.overflow = "hidden";
    return;
  }
  burgerNavigation.style.display = "none";
  burgerToggleTop.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleBottom.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleCenter.style.visibility = "visible";
  burgerNavigation.style.height = "0";
  document.body.style.overflow = "visible";
  burgerOpened = false;
});

window.onload = () => {
  main.style.opacity = "1";
  new Swiper(".image-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
