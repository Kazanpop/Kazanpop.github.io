const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;

  if (scrollTop >= 2) {
    header.classList.remove('pt-4');
    header.classList.remove('pb-4');
    header.classList.add('bg-black50');

  } else  {
    header.classList.remove('bg-black50');
    header.classList.add('pt-4');
    header.classList.add('pb-4');
    
  }
});
