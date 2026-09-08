// Small enhancements only; all portfolio content lives in index.html.
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
function closeMenu() {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && links.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
