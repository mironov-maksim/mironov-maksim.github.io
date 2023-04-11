const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const menuOverlay = document.querySelector(".menu-overlay");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  navList.classList.toggle("nav__list--active");
  document.body.classList.toggle("no-scroll");
  menuOverlay.classList.toggle("menu-overlay--active");
});

menuOverlay.addEventListener("click", function () {
  burger.classList.remove("burger--active");
  navList.classList.remove("nav__list--active");
  menuOverlay.classList.remove("menu-overlay--active");
  document.body.classList.remove("no-scroll");
});

AOS.init({
  // disable: "phone",
});
