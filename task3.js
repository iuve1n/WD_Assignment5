const styleBox = document.querySelector("#style-box");
const changeColorButton = document.querySelector("#change-color");
const changeSizeButton = document.querySelector("#change-size");

changeColorButton.addEventListener("click", function () {
  styleBox.style.backgroundColor = "#343434";
});

changeSizeButton.addEventListener("click", function () {
  styleBox.style.fontSize = "24px";
});
