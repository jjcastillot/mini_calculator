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
        case '+':
            return add(a,b);
        case '−':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            if (b===0) {
            alert ('Cannot divide by 0!!!')
                return null;
            }
            else return divide(a,b);
        default:
            return null;
    }
}

// Display numbers on the screen
let firstOperand = '';
let secondOperand = '';
let op = null;
let shouldReset = false;

const screen = document.querySelector('.screen');
const numbers = Array.from(document.querySelectorAll('[data-number]'));
const operations = Array.from(document.querySelectorAll('[data-operator]'));
const equalsButton = document.getElementById('equalsButton');

numbers.forEach((number) => number.addEventListener('click', showOnScreen));
operations.forEach((operation) => operation.addEventListener('click', setOperation));
equalsButton.addEventListener('click', solveOp);

function showOnScreen(e) {
    if (shouldReset) {
        screen.textContent ='';
        shouldReset = false;
    }
    screen.textContent += e.target.textContent;
}

function setOperation(e) {
    if (op !== null) solveOp();
    firstOperand = screen.textContent;
    op = e.target.textContent;
    shouldReset = true;
}

function solveOp() {
    secondOperand = screen.textContent;
    screen.textContent = roundOp(operate(op,firstOperand,secondOperand));
    op = null;
    shouldReset = true;
}

function roundOp(number) {
    return Math.round(number * 10000) / 10000;  
}