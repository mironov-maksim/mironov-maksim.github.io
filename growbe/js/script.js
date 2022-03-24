const slider_1 = new Swiper(".testimonials__slider", {
  /* slidesPerView: 3, */
  spaceBetween: 30,
  loop: true,
  /* slidesOffsetBefore: 320,
  slidesOffsetAfter: 320, */
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1900: {
      slidesPerView: 3,
      slidesOffsetBefore: 330,
      slidesOffsetAfter: 330,
    },

    1800: {
      slidesPerView: 3,
      slidesOffsetBefore: 315,
      slidesOffsetAfter: 315,
    },

    1700: {
      slidesPerView: 3,
      slidesOffsetBefore: 300,
      slidesOffsetAfter: 300,
    },

    1000: {
      slidesPerView: 2,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },

    420: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
  },
});

const slider_2 = new Swiper(".news__slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1400: {
      slidesPerView: 2,
    },

    420: {
      slidesPerView: 1,
    },
  },
});

new WOW().init();

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu__link--js");
const menuOverlay = document.querySelector(".menu-overlay");
const offMenuLink = document.querySelector(".menu__link--offdefault");

offMenuLink.addEventListener("click", function (e) {
  e.preventDefault();
});

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu--active");
  document.body.classList.toggle("no-scroll");
  menuOverlay.classList.toggle("menu-overlay--active");
});

menuOverlay.addEventListener("click", function () {
  burger.classList.remove("burger--active");
  menu.classList.remove("menu--active");
  menuOverlay.classList.remove("menu-overlay--active");
  document.body.classList.remove("no-scroll");
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
