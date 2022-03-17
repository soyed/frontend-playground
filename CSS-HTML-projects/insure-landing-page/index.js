const menu = document.querySelector('.header__nav');
const menuIcon = document.querySelector('.header__hamburger img');

menuIcon.addEventListener('click', () => {
  const currentIcon = menuIcon.src.includes('icon-hamburger');

  if (currentIcon) {
    menuIcon.src = './images/icon-close.svg';
  } else {
    menuIcon.src = './images/icon-hamburger.svg';
  }
  // => toggle menu bar
  menuIcon.classList.toggle('open');
  menu.classList.toggle('open');
});
