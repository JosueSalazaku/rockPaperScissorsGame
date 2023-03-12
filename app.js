const computerChoiceDIsplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('reuslt')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML =  userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.lenght
   
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDIsplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!' 
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'Ayo you good at this boy!' 
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You issa loser my boy!' 
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you issa winner!' 
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lose my boy!' 
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You issa winner!' 
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You issa loser my boy!' 
    }
    resultDisplay.innerHTML = result
}