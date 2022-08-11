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
const numbers = Array.from(document.querySelectorAll('[data-number]'));
numbers.forEach(number => number.addEventListener('onclick', showOnScreen));

function showOnScreen(e) {
    console.log(e.target.textContent);
}

  