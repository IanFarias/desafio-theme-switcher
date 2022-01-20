const background = document.querySelector('.page-body');
const switcher = document.querySelector('.switcher-checkbox');
const header = document.querySelector('.page-header');


switcher.addEventListener('click', () => {
    background.classList.toggle('background-dark');
    header.classList.toggle('header-dark')
})

switcher.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        event.target.checked = !event.target.checked;

        background.classList.toggle('background-dark');
        header.classList.toggle('header-dark');
    }
})