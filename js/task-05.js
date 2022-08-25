console.log(555);
const inputField = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const inputName = (event) => {
    if(event.currentTarget.value === '') {
       return textOutput.textContent = 'Anonymous';
    } return textOutput.textContent = event.currentTarget.value;
}

inputField.addEventListener('input', inputName);
