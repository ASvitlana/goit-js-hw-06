let counterValue = 0;

const counterClick = document.querySelector('#value');

const decrementButtonClick = () => {
    counterValue -= 1;
    return counterClick.textContent = `${counterValue}`;
};

const incrementButtonClick = () => {
    counterValue += 1;
    return counterClick.textContent = `${counterValue}`;
};

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener('click', decrementButtonClick);

const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener('click', incrementButtonClick);
