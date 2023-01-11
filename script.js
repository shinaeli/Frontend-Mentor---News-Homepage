console.log('Hello!');

const menuBarEl = document.querySelector('.menu-bar');
const closeModalEl = document.querySelector('.close-modal');
const closeMenuEl = document.querySelector('.close-menu');

menuBarEl.addEventListener('click', function() {
    closeModalEl.style.display = 'block';
})

closeMenuEl.addEventListener('click', function() {
    closeModalEl.style.display = 'none';
})