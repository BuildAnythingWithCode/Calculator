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

let buttonAdd = document.querySelector("#add");
let buttonSubtract = document.querySelector("#subtract");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivide = document.querySelector("#divide");

let buttonClear = document.querySelector("#clear");
let buttonGo = document.querySelector("#go");

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




buttonClear.addEventListener('click', function() {
  input = "";
  newWindow.textContent = input;
});




buttonAdd.addEventListener('click', function() {
  if (input.slice(-1) === "+" || 
    input.slice(-1) === "-" || 
    input.slice(-1) === "*" || 
    input.slice(-1) === "/") {
      input = input.slice(0, -1);
      input = input + "+";
  } else if (input.slice(-1) === "0" || 
    input.slice(-1) === "1" || 
    input.slice(-1) === "2" || 
    input.slice(-1) === "3" || 
    input.slice(-1) === "4" || 
    input.slice(-1) === "5" || 
    input.slice(-1) === "6" || 
    input.slice(-1) === "7" || 
    input.slice(-1) === "8" || 
    input.slice(-1) === "9") {
    input = input + "+";
  } else {
    input = "";
  } newWindow.textContent = input;
});

buttonSubtract.addEventListener('click', function() {
  if (input.slice(-1) === "+" || 
    input.slice(-1) === "-" || 
    input.slice(-1) === "*" || 
    input.slice(-1) === "/") {
      input = input.slice(0, -1);
      input = input + "-";
  } else if (input.slice(-1) === "0" || 
    input.slice(-1) === "1" || 
    input.slice(-1) === "2" || 
    input.slice(-1) === "3" || 
    input.slice(-1) === "4" || 
    input.slice(-1) === "5" || 
    input.slice(-1) === "6" || 
    input.slice(-1) === "7" || 
    input.slice(-1) === "8" || 
    input.slice(-1) === "9") {
    input = input + "-";
  } else {
    input = "";
  } newWindow.textContent = input;
});

buttonMultiply.addEventListener('click', function() {
  if (input.slice(-1) === "+" || 
    input.slice(-1) === "-" || 
    input.slice(-1) === "*" || 
    input.slice(-1) === "/") {
      input = input.slice(0, -1);
      input = input + "*";
  } else if (input.slice(-1) === "0" || 
    input.slice(-1) === "1" || 
    input.slice(-1) === "2" || 
    input.slice(-1) === "3" || 
    input.slice(-1) === "4" || 
    input.slice(-1) === "5" || 
    input.slice(-1) === "6" || 
    input.slice(-1) === "7" || 
    input.slice(-1) === "8" || 
    input.slice(-1) === "9") {
    input = input + "*";
  } else {
    input = "";
  } newWindow.textContent = input;
});

buttonDivide.addEventListener('click', function() {
  if (input.slice(-1) === "+" || 
    input.slice(-1) === "-" || 
    input.slice(-1) === "*" || 
    input.slice(-1) === "/") {
      input = input.slice(0, -1);
      input = input + "/";
  } else if (input.slice(-1) === "0" || 
    input.slice(-1) === "1" || 
    input.slice(-1) === "2" || 
    input.slice(-1) === "3" || 
    input.slice(-1) === "4" || 
    input.slice(-1) === "5" || 
    input.slice(-1) === "6" || 
    input.slice(-1) === "7" || 
    input.slice(-1) === "8" || 
    input.slice(-1) === "9") {
    input = input + "/";
  } else {
    input = "";
  } newWindow.textContent = input;
});




buttonGo.addEventListener('click', function() {
  input = "";
  newWindow.textContent = input;
});