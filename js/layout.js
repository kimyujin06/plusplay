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
  spaceBetween: 40,
  watchOverflow: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1025: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
