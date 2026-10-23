const liveInput = document.querySelector("#live-input");
const liveOutput = document.querySelector("#live-output");

liveInput.addEventListener("keyup", function () {
  if (liveInput.value === "") {
    liveOutput.textContent = "Nothing typed yet.";
  } else {
    liveOutput.textContent = liveInput.value;
  }
});
