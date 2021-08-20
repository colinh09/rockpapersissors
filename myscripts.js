const heading = document.querySelector("#header")

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.style.fontSize = 100;
h1.style.cssText = "color: black";
h1.style.textAlign = "center";
h1.textContent = "Rock, Paper, and Sissors - Colin Hwang";
heading.appendChild(h1);

//CSS to create buttons using javascript
const container = document.querySelector("#container");

const button1 = document.createElement('button');
button1.classList.add('button1');
button1.textContent = "Rock";
button1.style.cssText = "color: black";
button1.style.fontSize = 30;

container.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('button2');
button2.textContent = "Paper";
button2.style.cssText = "color: black";
button2.style.fontSize = 30;

container.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('button3');
button3.textContent = "Sissors";
button3.style.cssText = "color: black";
button3.style.fontSize = 30;
container.appendChild(button3);


//display div
const display = document.querySelector("#display");

const score = document.createElement('p');
score.classList.add('score');
score.textContent = "Win the game by beating the computer in a best of 5 of RPS";
score.style.cssText = "color: black";
score.style.textAlign = "center";
display.appendChild(score);

const results = document.createElement('p');
results.classList.add('results');
results.textContent = "Now, what will it be? Rock, paper or sissors?";
results.style.cssText = "color: black";
results.style.textAlign = "center";
display.appendChild(results);


let player = 0;
let computer = 0;

function computerPlay()
{
    let i = Math.floor(Math.random() * 3)
    if (i === 0)
    {
        return "rock";
    }
    else if (i === 1)
    {
        return "paper";
    }
    else
    {
        return "sissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (player === 5 || computer === 5)
    {
        return "The game is over. Refresh to play again!!!";
    }
    else if (playerSelection === computerSelection)
    {
        return "It's a tie!";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER")
    {
        computer++;
        return "You lose! Paper beats rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SISSORS")
    {
        player++;
        return "You win! Rock beats sissors";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SISSORS")
    {
        computer++;
        return "You lose! Sissors beats paper";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        player++;
        return "You win! Paper beats rock";
    }
    else if (playerSelection === "SISSORS" && computerSelection === "ROCK")
    {
        computer++;
        return "You lose! Rock beats sissors";
    }
    else if (playerSelection === "SISSORS" && computerSelection === "PAPER")
    {
        player++;
        return "You win! Sissors beats paper";
    }
}

function scoreKeeper()
{
    if (player === 5)
    {
        return "You have won the best of five!"
    }
    else if (computer === 5)
    {
        return "You have lost the best of five...."
    }
    else
    {
        return "The score is currently, player: " + player + " computer: " + computer;
    }
}

const buttons = document.querySelectorAll('button');

//loops through each button and adds an event listener that plays the round when clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.textContent, computerPlay());
        score.textContent = scoreKeeper();
    });
});

/* Commenting out code to add a UI to the game that will add player interactivity using javascript
function game()
{
    for (let i = 0; i < 5; i++)
    {
        let userInput = window.prompt("Rock, paper, sissors, and shoot!");
        userInput = userInput.toUpperCase();
        while (!(userInput === "PAPER" || userInput === "ROCK" || userInput === "SISSORS"))
        {
            userInput = window.prompt("Invalid input. Try again. Rock, paper, sissors, and shoot!")
            userInput = userInput.toUpperCase();
        }
        console.log(playRound(userInput, computerPlay()));
    }
}
game();
*/