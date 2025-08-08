window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // adjust scroll distance you want
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});