const itemList = document.querySelector("#item-list");
const addItemButton = document.querySelector("#add-item");
const removeItemButton = document.querySelector("#remove-item");
let nextItemNumber = 1;

addItemButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "List item " + nextItemNumber;
  itemList.appendChild(newItem);
  nextItemNumber += 1;
});

removeItemButton.addEventListener("click", function () {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});
