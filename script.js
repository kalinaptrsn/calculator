const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');  



function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {

    a = Number(a);
    b = Number(b);

    if (operator == '+') {
        return add(a,b);
    }
    else if (operator == '-') {
        return subtract(a,b);
    }
    else if (operator == 'x') {
        return multiply(a,b);
    }
    else if (b === 0) {
        return null;
    }
    else {
        return divide(a,b);
    }
}
