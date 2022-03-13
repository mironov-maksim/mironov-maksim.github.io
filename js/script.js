const slider_1 = new Swiper(".testimonials__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  slidesOffsetBefore: 320,
  slidesOffsetAfter: 320,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const slider_2 = new Swiper(".news__slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  /*  slidesOffsetBefore: 10,
  slidesOffsetAfter: 10, */
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new WOW().init();

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu__link");
const menuOverlay = document.querySelector(".menu-overlay");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu--active");
  document.body.classList.toggle("no-scroll");
  menuOverlay.classList.toggle("menu-overlay--active");
});

menuLink.forEach((item) => {
  item.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    document.body.classList.remove("no-scroll");
    menuOverlay.classList.remove("menu-overlay--active");
    modalClose.classList.remove("modal-video--active");
  });
});

const btnVideo = document.querySelector(".btn-video");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
const modalVideo = document.querySelector(".modal-video");

btnVideo.addEventListener("click", function () {
  modalOverlay.classList.add("modal-overlay--active");
  modalVideo.classList.add("modal-video--active");
});

modalClose.addEventListener("click", function () {
  modalOverlay.classList.remove("modal-overlay--active");
  modalVideo.classList.remove("modal-video--active");
});
