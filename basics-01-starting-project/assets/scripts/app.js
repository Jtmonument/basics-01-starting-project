let currentResult = 0;
let calculationDescription;

function writeOutput(operator, num) {
    calculationDescription = `${currentResult} ${operator} ${num}`;
}

function add() {
    const input = userInput.value;
    writeOutput('+', input);
    currentResult += +input;
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const input = userInput.value;
    writeOutput('-', input);
    currentResult -= +input;
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    const input = userInput.value;
    writeOutput('x', input);
    currentResult *= +input;
    outputResult(currentResult, calculationDescription);
}

function divide() {
    const input = userInput.value;
    writeOutput('/', input);
    currentResult /= +input;
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
