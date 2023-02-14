class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    };

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    };

    delete(){

    };

    appendNumber(number) {
        this.currentOperand = number;
    };

    chooseOperation(operation) {

    };

    compute() {

    };

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    };
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');  

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

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
