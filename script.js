"use strict";
const mainNav = document.querySelector(".main-nav");
// we want to exit out of mobile menu when we click one of the buttons
const navBtn = document.querySelectorAll(".nav-btn");

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

// Mobile menu button listener
const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector(".close");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function () {
  console.log("hey");
  if (!btnMenu.classList.contains("nav-open")) {
    mainNav.classList.add("nav-open");
    btnMenu.classList.add("nav-open");
    btnClose.classList.add("nav-open");
  } else {
    mainNav.classList.remove("nav-open");
    btnMenu.classList.remove("nav-open");
    btnClose.classList.remove("nav-open");
  }
});

// mobile menu exit once click on the buttons
navBtn.forEach(function (value) {
  value.addEventListener("click", function () {
    mainNav.classList.remove("nav-open");
    btnMenu.classList.remove("nav-open");
    btnClose.classList.remove("nav-open");
  });
});

// Sticky Nav
window.addEventListener("scroll", function () {
  const viewport_width = window.innerWidth;
  // want to stop once we reach mobile version 800px
  if (viewport_width > 800) {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  }
});
