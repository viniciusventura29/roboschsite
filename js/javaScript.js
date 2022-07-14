const btn = document.getElementById('btn-menu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu)