const inputField = document.querySelector('#validation-input');


const checkInputText = (event) => {
    if(event.target.value.length === Number(inputField.getAttribute('data-length'))) {
        inputField.classList.add('valid');
        if(inputField.classList.contains('invalid')) {
            inputField.classList.remove('invalid');
        } 
    }  else {
        inputField.classList.add('invalid');
        if (inputField.classList.contains('valid')) {
            inputField.classList.remove('valid');
        }
    }
}

inputField.addEventListener('blur', checkInputText);



// ----- ПРАЦЮЄ-------------
// const checkInputText = (event) => {
//     if(event.target.value.length === 6) {
//         inputField.classList.add('valid');
//         inputField.classList.remove('invalid');
//     }  else {
//         inputField.classList.add('invalid');
//         inputField.classList.remove('valid');
//     }
    

// };

// inputField.addEventListener('blur', checkInputText);


