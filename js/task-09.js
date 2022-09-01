function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const widget = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

const newColor = () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = `${randomColor}`;
  color.textContent = `${randomColor}`;
}

btn.addEventListener('click', newColor);
