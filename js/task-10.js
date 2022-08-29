function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputNum = document.querySelector('#controls input');

// let number;

// inputNum.addEventListener('input', (event) => {
//   number = event.currentTarget.value;
//   return number; 
// });

// function createBoxes(number) {
//   const elementsToAdd = [];
//   // let number;

//   // inputNum.addEventListener('input', (event) => {
//   //   number = event.currentTarget.value;
//   //   return number; 
//   // });

//   for (let i = 1; i <= number; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = `${30 + 10 * (i - 1)}px`;
//     box.style.height = `${30 + 10 * (i - 1)}px`;
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     elementsToAdd.push(box);
//   }

//   boxes.append(...elementsToAdd);
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = '';
// };

// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);


console.log(inputNum);

inputNum.addEventListener('input', (event) => {
  // console.log(event.currentTarget.value);
  // return event.currentTarget.value;

  let num = event.currentTarget.value;
  console.log(num);
});
// let num = 5;

function createBoxes(num) {
    // const elementsToAdd = [];
    
    for (let i = 1; i <= num; i += 1) {
      const markupEl = `<div style = 'background-color: ${getRandomHexColor()}; width = ${30 + 10 * (i - 1)}px; height = ${30 + 10 * (i - 1)}px'></div>`;
      boxes.innerHTML += markupEl;
      // elementsToAdd.push(markupEl);
    }
  
    // boxes.innerHTML = elementsToAdd.join('');
  };

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', createBoxes());
btnDestroy.addEventListener('click', destroyBoxes);