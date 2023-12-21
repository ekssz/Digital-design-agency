'use strict';

window.onscroll = function () {
  myFunction();
};

const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger__menu");

const headerHeight = header.offsetHeight;
const burgerMenuHeight = 400; // Ваша висота бургерного меню

function myFunction() {
  if (window.scrollY >= (headerHeight / 2) + 10) {
    header.classList.add("sticky");
    document.body.style.paddingTop = headerHeight + "px";

    burgerMenu.style.top = headerHeight + "px";
  } else {
    header.classList.remove("sticky");
    document.body.style.paddingTop = 0;

    burgerMenu.style.top = "0";
  }
}


function toggleMenu() {

  var menu = document.querySelector('.header__menu');
  menu.classList.toggle('header__menu--open');
  overlay.classList.toggle('hidden');
  menu.style.zIndex = 5;
  overlay.addEventListener('click', function () {
    menu.classList.remove('header__menu--open');
    overlay.classList.add('hidden');
    menu.style.zIndex = 0;
  });
}


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

ScrollReveal({ delay: 1 }).reveal(".scrollreveal");
ScrollReveal({ delay: 1 }).reveal(".scrollreveal-noreturn");