const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    toggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggle.textContent = '☰';
    });
});

document.querySelectorAll('.about-card').forEach(card => {
    card.addEventListener('click', () => {
        if (window.innerWidth <= 786) {
            card.classList.toggle('active');
        }
    });
});