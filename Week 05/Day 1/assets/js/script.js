const navbar = document.querySelector('.navbar');
const barsBtn = document.querySelector('.bars');
const crossBtn = document.querySelector('.cross');
const navItems = document.querySelectorAll('.header-items');

function toggleMenu() {
  navbar.classList.toggle('show');
}

barsBtn.addEventListener('click', toggleMenu);

crossBtn.addEventListener('click', toggleMenu);

navItems.forEach(item => item.addEventListener('click', () => {
  navbar.classList.remove('show');
}));