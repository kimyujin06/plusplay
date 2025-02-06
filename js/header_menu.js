"use strict";

// 햄버거 버튼 클릭시
document.querySelector(".menu").onclick = function () {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector("#gnb02").style.right = "0px";
  document.body.style.overflow = "hidden";
};
// 햄버거 버튼_x 버튼 클릭시
document.querySelector(".close").onclick = function () {
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector("#gnb02").style.right = "-2000px";
  document.body.style.overflow = "auto";
};

// 검색 아이콘 클릭시
document.querySelector(".serch").onclick = function () {
  document.querySelector(".serch").style.display = "none";
  document.querySelector(".close02").style.display = "block";
  document.querySelector("#gnb").style.display = "none";
  document.querySelector(".serch_screen").style.display = "block";
  document.querySelector(".serch_wrap").style.transform = "translateY(0px)";
  document.querySelector(".header-scrolled").style.border = "none";
  document.body.style.overflow = "hidden";
};

// 검색 아이콘_x 버튼 클릭시
document.querySelector(".close02").onclick = function () {
  document.querySelector(".serch").style.display = "block";
  document.querySelector(".close02").style.display = "none";
  document.querySelector("#gnb").style.display = "flex";
  document.querySelector(".serch_screen").style.display = "none";
  document.querySelector(".serch_wrap").style.transform = "translateY(-5000px)";
  document.body.style.overflow = "auto";
};

if (matchMedia("(min-width: 320px) and (max-width: 768px)").matches) {
  //모바일
  document.querySelector(".serch_screen").style.display = "none";
} else if (matchMedia("(min-width: 680px) and (max-width: 1024px)").matches) {
  //테블릿 sm,md
  document.querySelector(".serch_screen").style.display = "none";
} else if (matchMedia("(min-width: 1025px) and (max-width: 1250px)").matches) {
  //작은 노트북
  document.querySelector(".serch_screen").style.display = "none";
}

window.addEventListener("scroll", function () {
  const header = document.getElementById("header_event");

  if (window.scrollY > 50) {
    // 50px 이상 스크롤 시
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
