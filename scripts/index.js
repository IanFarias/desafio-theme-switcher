const background = document.querySelector('.main-content')
const switcher = document.querySelector('#switcher')



switcher.addEventListener('click', () => {
    switcher.classList.toggle('button-active');
    
    background.classList.toggle('background-dark');
})