document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.big-arrow');
  const contentSection = document.querySelector('.content-section');
  
  arrow.addEventListener('click', () => {
    contentSection.classList.remove('hidden');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  });
});
