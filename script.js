"use strict";
// const nav = document.querySelector(".nav");

const navBar1 = document.querySelector(".nav--bar-1");
const navBar2 = document.querySelector(".nav--bar-2");
const navBar3 = document.querySelector(".nav--bar-3");

const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");

// implementing smooth scrolling
navBar1.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});
navBar2.addEventListener("click", function (e) {
  section2.scrollIntoView({ behavior: "smooth" });
});
navBar3.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});

// Sticky Nav
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
