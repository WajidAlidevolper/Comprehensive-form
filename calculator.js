let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperation(op) {
    if (currentInput === '') return;
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    firstOperand = '';
    operator = '';
}

function calculateResult() {
    if (currentInput === '' || firstOperand === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    firstOperand = '';
    operator = '';
}
