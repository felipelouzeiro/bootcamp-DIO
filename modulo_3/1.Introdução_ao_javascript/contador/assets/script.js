const currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  negativeNumberIndicator()
}

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  numberIndicator()
}

function numberIndicator() {
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else if (currentNumber > 0) {
    currentNumberWrapper.style.color = 'blue';
  } else {
    currentNumberWrapper.style.color = 'white';
  }
}
