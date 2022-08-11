// Basic math operations
function add(a,b) {
    return a+b;
};
  
function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(op,a,b) {
    a = Number(a);
    b = Number(b);
    switch (op) {
        case 'add':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            if (b===0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}

// Display numbers on the screen
const inputScreen = document.querySelector('.inputs');
const resultScreen = document.querySelector('.results');
const numbers = Array.from(document.querySelectorAll('[data-number]'));
const operations = Array.from(document.querySelectorAll('[data-operator]'));
numbers.forEach((number) => number.addEventListener('click', showOnScreen));
operations.forEach((operation) => operation.addEventListener('click', showOnScreen));

function showOnScreen(e) {
    inputScreen.textContent += e.target.textContent;
}

  