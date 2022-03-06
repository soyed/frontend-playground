//

// => Grab Elements
const menu = document.querySelector('.header__nav--menu');
const menuIcon = document.querySelector('.hamburger--icon');

if (menuIcon) {
  menuIcon.addEventListener('click', (event) => {
    console.log(event);
  });
}
