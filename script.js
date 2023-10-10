window.addEventListener('resize', () => console.log(window.innerWidth));

const modalCloseButton = document.querySelector('.modalClose');
const modal = document.querySelector('.modal');
const productButton = document.querySelectorAll('.productButton');

modalCloseButton.addEventListener(
  'click',
  () => (modal.style.display = 'none')
);

productButton.forEach((button) => {
  button.addEventListener('click', () => (modal.style.display = 'block'));
});
