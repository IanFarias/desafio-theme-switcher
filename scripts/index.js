const background = document.querySelector('.page-body');
const switcher = document.querySelector('.switcher-checkbox');
const header = document.querySelector('.page-header');


switcher.addEventListener('click', () => {
    background.classList.toggle('background-dark');
    header.classList.toggle('header-dark')
})