let input = "";

let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");
let buttonThree = document.querySelector("#three");
let buttonFour = document.querySelector("#four");
let buttonFive = document.querySelector("#five");
let buttonSix = document.querySelector("#six");
let buttonSeven = document.querySelector("#seven");
let buttonEight = document.querySelector("#eight");
let buttonNine = document.querySelector("#nine");
let buttonZero = document.querySelector("#zero");

let newWindow = document.querySelector("#window");

buttonOne.addEventListener('click', function() {
  input = input + 1;
  newWindow.textContent = input;
});

buttonTwo.addEventListener('click', function() {
  input = input + 2;
  newWindow.textContent = input;
});

buttonThree.addEventListener('click', function() {
  input = input + 3;
  newWindow.textContent = input;
});

buttonFour.addEventListener('click', function() {
  input = input + 4;
  newWindow.textContent = input;
});

buttonFive.addEventListener('click', function() {
  input = input + 5;
  newWindow.textContent = input;
});

buttonSix.addEventListener('click', function() {
  input = input + 6;
  newWindow.textContent = input;
});

buttonSeven.addEventListener('click', function() {
  input = input + 7;
  newWindow.textContent = input;
});

buttonEight.addEventListener('click', function() {
  input = input + 8;
  newWindow.textContent = input;
});

buttonNine.addEventListener('click', function() {
  input = input + 9;
  newWindow.textContent = input;
});

buttonZero.addEventListener('click', function() {
  input = input + 0;
  newWindow.textContent = input;
});