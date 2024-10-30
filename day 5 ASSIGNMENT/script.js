const ageInput = document.getElementById('age-input');
const checkButton = document.getElementById('check-button');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    resultElement.textContent = 'Please enter a valid age';
  } else if (age < 18) {
    resultElement.textContent = 'You are not eligible to pay taxes';
  } else {
    resultElement.textContent = 'You are eligible to pay taxes';
  }
});