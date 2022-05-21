// Interação responsividade
const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');


menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 