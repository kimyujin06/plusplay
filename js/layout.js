"use strict";

// 햄버거 버튼 클릭시
document.querySelector(".menu").onclick = function () {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector("#gnb02").style.right = "20px";
  document.body.style.overflow = "hidden";
};
// 햄버거 버튼_x 버튼 클릭시
document.querySelector(".close").onclick = function () {
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector("#gnb02").style.right = "-2000px";
  document.body.style.overflow = "auto";
};

//스크롤 이벤트
AOS.init();

// 슬라이드
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  watchOverflow: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
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
        stretch: -195,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      },
    },
  },
});
