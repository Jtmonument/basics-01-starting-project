let currentResult = 0;

function add() {
    currentResult += parseFloat(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
