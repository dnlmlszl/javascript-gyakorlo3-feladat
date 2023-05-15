// Segédfüggvény a véletlenszám generáláshoz
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Segédfüggvény az eredmény ellenőrzéséhez és a visszajelzés megjelenítéséhez
  function checkResult(operator, number1, number2, result) {
    const resultInput = document.getElementById('resultInput');
    const feedback = document.getElementById('feedback');
  
    let correctResult;
    switch (operator) {
      case '+':
        correctResult = number1 + number2;
        break;
      case '-':
        correctResult = number1 - number2;
        break;
      case '*':
        correctResult = number1 * number2;
        break;
      case '/':
        correctResult = number1 / number2;
        break;
      default:
        correctResult = NaN;
    }
  
    if (result === correctResult) {
      feedback.innerHTML = '<i class="fas fa-thumbs-up text-xl mt-3" style="color: green;"></i>';
    } else {
      feedback.innerHTML = '<i class="fas fa-times text-xl mt-3" style="color: red;"></i>';
    }
  }
  
  // Segédfüggvény az új számok generálásához
  function generateNumbers() {
    const numbersContainer = document.getElementById('numbers');
    const resultInput = document.getElementById('resultInput');
    const feedback = document.getElementById('feedback');
  
    resultInput.value = '';
    feedback.innerHTML = '';
  
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
  
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
  
    numbersContainer.innerHTML = `${number1} ${operator} ${number2}`;
  }
  
  // Gombra kattintva új számok generálása
  const newNumbersButton = document.getElementById('newNumbersButton');
  newNumbersButton.addEventListener('click', generateNumbers);
  
  // Eredmény ellenőrzése az input mező figyelésekor
  const resultInput = document.getElementById('resultInput');
  resultInput.addEventListener('input', function() {
    const numbersContainer = document.getElementById('numbers');
    const [number1, operator, number2] = numbersContainer.textContent.split(' ');
  
    const result = parseFloat(resultInput.value);
    if (!isNaN(result)) {
        checkResult(operator, parseFloat(number1), parseFloat(number2), result);
    }
  });
  
  // Kezdeti számok generálása
  generateNumbers();
  