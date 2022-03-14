'use strict';
const menuIcon = document.querySelector('.header--hamburger');
const hamburger = document.querySelector('.header--hamburger div');
const menu = document.querySelector('.header--nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});
