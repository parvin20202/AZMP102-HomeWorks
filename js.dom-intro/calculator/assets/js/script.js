const result = document.querySelector(".result");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const reset = document.querySelector(".reset");
const addBtn = document.querySelector(".addition");
const subBtn = document.querySelector(".substract");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".division");

addBtn.addEventListener("click", (e) => {
  let sum = +num1.value + +num2.value;
  result.textContent = sum;
});
subBtn.addEventListener("click", (e) => {
  let sum = +num1.value - +num2.value;
  result.textContent = sum;
});
multBtn.addEventListener("click", (e) => {
  let sum = +num1.value * +num2.value;
  result.textContent = sum;
});
divBtn.addEventListener("click", (e) => {
  let sum = +num1.value / +num2.value;
  result.textContent = sum;
});

reset.addEventListener("click", (e) => {
  result.textContent = "0";
  num1.value = 0;
  num2.value = 0;
});

