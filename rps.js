let playerName = document.getElementById('playername');
let displayMsg = document.getElementById('enternamemsg');
let displayPname = document.getElementById('playerone');
let hiddenitems = document.getElementById('hide');
let whowon = document.getElementById('whowon');

let submitBtn = document.getElementById('enternamebtn');

submitBtn.addEventListener('click', () => {
    if (playerName.value === '') {
        displayMsg.textContent = 'Hello buddy! To participate in the hand game, please type your name!!!';
    } else if(playerName.value == Number(playerName.value)){
        displayMsg.textContent = 'Hello buddy! You entered a number, please type your name!!!';
    } else {
        displayAll();
    }
});

function displayAll() {
    displayPname.textContent = `Player 1: ${playerName.value}`;
    return (hiddenitems.style.display === 'none') ? hiddenitems.style.display = 'block' : hiddenitems.style.display = 'block';
}

let playerChoice;
let computerChoice;
let gameBtn = document.querySelectorAll('.rpsbtn');

gameBtn.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;
    console.log(playerChoice);
    computerTurn();
    checkWinner();
    document.getElementById('cchoice').textContent = `Computer Selected : ${computerChoice}.`;
}));


function computerTurn() {
    let computerChoiceGenerate = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoiceGenerate);
    switch (computerChoiceGenerate) {
        case 1:
            computerChoice = 'Rock';
            console.log(computerChoice);
            break;
        case 2:
            computerChoice = 'Paper';
            console.log(computerChoice);
            break;
        case 3:
            computerChoice = 'Scissors';
            console.log(computerChoice);
            break;
       }
    }

function checkWinner(){
    if(playerChoice === computerChoice){
        whowon.textContent = 'You both choose the same hand! Draw!!!';
    } else if(playerChoice === 'Rock'){
        (computerChoice === 'Paper') ? whowon.textContent = 'Sad! This time Computer Won. Try it Again!!!' : whowon.textContent = 'Hooray! You won the Game.';
    } else if(playerChoice === 'Paper'){
        (computerChoice === 'Scissors') ? whowon.textContent = 'Sad! This time Computer Won. Try it Again!!!' : whowon.textContent = 'Hooray! You won the Game.';
    } else if(playerChoice === 'Scissors') {
        (computerChoice === 'Rock') ? whowon.textContent = 'Sad! This time Computer Won. Try it Again!!!' : whowon.textContent = 'Hooray! You won the Game.';
    }
}