console.log(555);
const enteredName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const inputName = (event) => {
    event.preventDefault();
    console.log(event);
    const name = event.currentTarget;
    if(name.value === '') {
        return nameOutput.textContent = 'Anonymous';
    } return nameOutput.textContent = `${name.value}`;
}

enteredName.addEventListener('input', inputName);