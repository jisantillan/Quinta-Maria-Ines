const hamburguer = document.getElementById('hamburguer');
const menuUl = document.getElementById('ul-menu');

hamburguer.addEventListener('click' , () => {
    menuUl.classList.toggle('show');
});

