let shoppingList = [];

document.addEventListener('DOMContentLoaded', () => {
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const listContainer = document.getElementById("shoppingList");
const clearButton = document.getElementById("clearButton");

function addItemToList(item){
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listContainer.appendChild(listItem);
    shoppingList.push(item);
}
addButton.addEventListener('click', () => {
    const inputValue = itemInput.value;
    addItemToList(inputValue);
    itemInput.value = '';
    });

clearButton.addEventListener('click', () => {
    shoppingList = [];
    listContainer.innerHTML = '';
    });
});







