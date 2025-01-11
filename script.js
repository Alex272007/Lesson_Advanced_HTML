const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.navigation__choice-menu');

function toggleMenu() {
    menuActive.classList.toggle('hiden'); 
     }

burger.addEventListener('click', toggleMenu);
    
