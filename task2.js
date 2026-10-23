const message = document.querySelector("#message");
const changeTextButton = document.querySelector("#change-text");

changeTextButton.addEventListener("click", function () {
  message.textContent = "The paragraph text has changed.";
});
