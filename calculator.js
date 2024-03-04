let currentOperation = null;
let currentNumber = "";
let previousNumber = "";

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentNumber === "") return;
    if (previousNumber !== "") calculate();
    currentOperation = operation;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation.toString();
    currentOperation = null;
    previousNumber = "";
    updateDisplay();
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
