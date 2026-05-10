//Calculator JavaScript.js

// Creates an object to keep track of values.
const calculator = {
    // This will display 0 on the screen
  displayValue: '0',           
  //This will hold the frst operand for any expressions, we set it to null for now.
  firstOperand: null,
  // This checks whether or not the second operand has been inputt
  waitingForSecondOperand: false,
  //
  operator: null,
};

// This modifies values each time a button is clicked on.
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  //This checks if the waitingForSecondOperand is true and sets displayValue 
  // to the key that was clicked on.
  if (waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    // This overwrites displayValue if the current value is '0' 
    // otherwise it adds onto it.
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

// This section handles decimal points.
function inputDecimal(dot) {
    // This ensures that accidental clicking of the decimal point doesn't cause bugs in your operation.
  if (calculator.waitingForSecondOperand) {
    // start a new number like "0."
    calculator.displayValue = '0.';
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    //We are saying that if the displayValue does not contain a decimal point 
    // we want to add a decimal point.
    calculator.displayValue += dot;
  }
}
// Object to perform calculations
const performCalculation = {
  '/': (a, b) => (b === 0 ? 'Error' : a / b),
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '=': (_, b) => b,
};
// This section handles operators.
function handleOperator(nextOperator) {
  const { displayValue, firstOperand, operator } = calculator;
  // When an operator key is pressed, we convert the current number 
  // displayed on the screen to a number and then store the result in 
  // calculator.firstOperand if it doesn't already exist.
  const inputValue = parseFloat(displayValue);
//Checks if an operator already exists and if waitingForSecondOperand is true,
//then updates the operator and exits from the function.
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !Number.isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {// Checks if an operator already exists.
    const result = performCalculation[operator](calculator.firstOperand || 0, inputValue);
    if (result === 'Error') {
      calculator.displayValue = 'Error';
      // reset state to avoid cascading failures
      calculator.firstOperand = null;
      calculator.operator = null;
      calculator.waitingForSecondOperand = false;
      return;
    }
    // round to avoid floating point artifacts, keep up to 10 decimals
    const rounded = Number.parseFloat(result.toFixed(10));
    calculator.displayValue = String(rounded);
    calculator.firstOperand = rounded;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
// This function updates the calculator screen with the contents of displayValue.
function updateDisplay() {
    //Makes use of the calculator-screen class to target the 
    // input tag in the HTML document.
  const display = document.querySelector('.calculator-screen');
  if (display) display.value = calculator.displayValue;
}

// Initialize display
updateDisplay();
// This section monitors button clicks.
const keys = document.querySelector('.calculator-keys');
if (keys) {
  keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element 
    // that was clicked.
    const { target } = event;
    // If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) return;

    if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    }
    //Ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
      resetCalculator();
      updateDisplay();
      return;
    }

    // number
    inputDigit(target.value);
    updateDisplay();
  });
}