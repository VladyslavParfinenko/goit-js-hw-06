function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnEl.addEventListener('click', changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();

}