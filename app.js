const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.nav__menu');
const menuLogo = document.querySelector('.nav__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
