const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsEl = elements => {
  return elements.map(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = `${ingredient}`;
      ingredientItem.classList.add('item');
      
      return ingredientItem;
  })
};

const listOfIngredientsEl = document.querySelector('#ingredients');

const ingredientsItems = makeIngredientsEl(ingredients);

listOfIngredientsEl.append(...ingredientsItems);

// console.log(ingredientsItems);
