const hamburg = document.getElementById('hamburg');
const xSection = document.querySelector('.x-section');
const menuRes = document.querySelector('.menu-responsive');
const menuLinks = document.querySelectorAll('.items-menu-responsive');

function resMenu() {
  menuRes.style.display = 'block';
}

function hideResMenu() {
  menuRes.style.display = 'none';
}

xSection.addEventListener('click', hideResMenu);
hamburg.addEventListener('click', resMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', resMenu);
});

