const swiper = new Swiper(".swiper", {
  slidesPerView: "3",
  spaceBetween: 30,
  centeredSlides: false,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
});
