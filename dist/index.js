const numberInput = document.getElementById("numberInput");
const guessForm = document.getElementById("guessForm");
const appMessage = document.getElementById("appMessage");
const numberChosen = getRandomNumber() // Generate a random number only once. If I put it in the guessForm, it'll get updated every time users submit something.
let count = 0;

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

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

