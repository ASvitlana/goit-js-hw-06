const itemInCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemInCategories.length}`);

itemInCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});

