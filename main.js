const navActive = document.querySelector('.nav-active'),
  hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navActive.classList.toggle('vigorous');
});
