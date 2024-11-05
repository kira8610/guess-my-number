const rangeForm = document.getElementById("rangeForm");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

const numberInput = document.getElementById("numberInput");
const guessForm = document.getElementById("guessForm");
const appMessage = document.getElementById("appMessage");

let firstNumInRange;
let secondNumInRange;
let numberChosen;

let count = 0;

rangeForm.addEventListener("submit", event => {
    event.preventDefault();

    firstNumInRange = Number(firstNumber.value);
    secondNumInRange = Number(secondNumber.value);

    if (isNaN(firstNumInRange) || firstNumInRange <= 0 || !Number.isInteger(firstNumInRange)
        || isNaN(secondNumInRange) || secondNumInRange <= 0 || !Number.isInteger(secondNumInRange)) {
            appMessage.textContent = `Please enter positive whole numbers.`;
    }

    else if (firstNumInRange >= secondNumInRange) {
        appMessage.textContent = `The first number should be less than the second number.`;
    }

    else {
        count = 0; // Reset the count when a new range is set
        numberChosen = getRandomNumber(firstNumInRange, secondNumInRange);
        appMessage.textContent = `Range set! Now guess the number between ${firstNumInRange} and ${secondNumInRange}.`
    }
})

function getRandomNumber(firstNumber, secondNumber) {
    const randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
    return randomNumber;
}

guessForm.addEventListener("submit", event => {
    event.preventDefault();

    const guessInput = Number(numberInput.value);
    count ++;

    if (numberChosen > guessInput) {
        appMessage.textContent = `The number is greater than ${guessInput}`;
    }
    else if (numberChosen < guessInput) {
        appMessage.textContent = `The number is less than ${guessInput}`;
    }   
    else {
        appMessage.textContent = `Well done! It took you ${count} attempts to guess this number`;
    }           
})