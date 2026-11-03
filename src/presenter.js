import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (first.value.trim() === "" || second.value.trim() === "") {
    div.innerHTML =
      '<p role="alert">Por favor, ingresa ambos números.</p>';
    return;
  }

  const firstNumber = Number.parseFloat(first.value);
  const secondNumber = Number.parseFloat(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
