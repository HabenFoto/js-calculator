//check input is valid
function number_validation(number) {
  if (isNaN(number)) {
    return false;
  }
  if (number == null || number === ' ') {
    return false;
  }
  else {
    return Number(number)
  }
}

const addition = {
  num1: 3,
  num2: 5,
  operation: ['add', '+'],
}

const subtraction = {
  num1: 3,
  num2: 5,
  operation: ['subtract', '-'],
}

const multiplication = {
  num1: 4,
  num2: 8,
  operation: ['multiply','*'],
}

const division = {
  num1: 10,
  num2: 2,
  operation: ['divide','/'],
}

function calculate(input) {
  if(!number_validation(input.num1)){
    return input.num1 + ' is not a valid number. Please enter a valid number';
  }
  if(!number_validation(input.num2)){
    return input.num2 + ' is not a valid number. Please enter a valid number';
  }
  if (input.operation.includes('add') || input.operation.includes('+')) {
    return input.num1 + input.num2
  }
  if (input.operation.includes('subtract') || input.operation.includes('-')) {
    return input.num1 - input.num2
  } 
  if (input.operation.includes('multiply') || input.operation.includes('*')) {
    return input.num1 * input.num2
  }
  if (input.operation.includes('divide') || input.operation.includes('/')) {
    if (input.num2 === 0) {
      console.log('Unable to divide by 0.')
    }
    else {
    return input.num1 / input.num2
    }
  } 
  else {
    return 'Please enter a valid operator.'
  }
}
// invoke the function
console.log(calculate(addition));
console.log(calculate(subtraction));
console.log(calculate(multiplication));
console.log(calculate(division));
