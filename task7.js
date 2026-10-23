const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const calculationResult = document.querySelector("#calculation-result");

function calculate(operation) {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    calculationResult.textContent = "Enter both numbers first.";
    return;
  }

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);
  let answer;

  if (operation === "+") {
    answer = firstNumber + secondNumber;
  } else if (operation === "-") {
    answer = firstNumber - secondNumber;
  } else if (operation === "*") {
    answer = firstNumber * secondNumber;
  } else if (operation === "/") {
    if (secondNumber === 0) {
      calculationResult.textContent = "Cannot divide by zero.";
      return;
    }
    answer = firstNumber / secondNumber;
  }

  calculationResult.textContent = "Result: " + answer;
}

document.querySelector("#add").addEventListener("click", function () {
  calculate("+");
});

document.querySelector("#subtract").addEventListener("click", function () {
  calculate("-");
});

document.querySelector("#multiply").addEventListener("click", function () {
  calculate("*");
});

document.querySelector("#divide").addEventListener("click", function () {
  calculate("/");
});
