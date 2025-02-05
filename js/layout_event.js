//스크롤 이벤트
AOS.init();

// 슬라이드 섹션 6번
const swiper = new Swiper(".sec6_community .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  watchOverflow: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: -195,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1025: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -145,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      },
    },
    1251: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -155,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      },
    },
    1270: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -165,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      },
    },
    1280: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
    },
  },
});
