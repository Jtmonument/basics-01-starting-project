let currentResult = 0;
let calculationDescription;

function add() {
    const input = userInput.value;
    calculationDescription = `${currentResult} + ${input}`;
    currentResult += +input;
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const input = userInput.value;
    calculationDescription = `${currentResult} - ${input}`;
    currentResult -= +input;
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    const input = userInput.value;
    calculationDescription = `${currentResult} x ${input}`;
    currentResult *= +input;
    outputResult(currentResult, calculationDescription);
}

function divide() {
    const input = userInput.value;
    calculationDescription = `${currentResult} / ${input}`;
    currentResult /= +input;
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
