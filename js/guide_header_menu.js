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
