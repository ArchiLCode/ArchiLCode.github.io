window.onload = () => {
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
