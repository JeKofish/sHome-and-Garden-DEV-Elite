const kapljicaContainer = document.querySelector('.kapljica-container');
const pokreniButton = document.querySelector('#pokreni');
const resetButton = document.querySelector('#reset');

let intervalId;

pokreniButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const kapljica = document.createElement('div');
    kapljica.classList.add('kapljica');
    kapljica.style.left = Math.random() * window.innerWidth + 'px';
    kapljicaContainer.appendChild(kapljica);
    setTimeout(() => {
      kapljica.remove();
    }, 2000);
  }, 200);
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  const kapljice = document.querySelectorAll('.kapljica');
  kapljice.forEach(kapljica => kapljica.remove());
});
