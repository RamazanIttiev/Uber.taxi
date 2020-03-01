window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuList = document.querySelectorAll('.menu-list'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('menu-active');
  });

  menuList.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menu.classList.toggle('menu-active');
    })
  })
})