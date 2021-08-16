

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
    if (playerSelection === computerSelection)
    {
        return "It's a tie!";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER")
    {
        return "You lose! Paper beats rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SISSORS")
    {
        return "You win! Rock beats sissors";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SISSORS")
    {
        return "You lose! Sissors beats paper";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        return "You win! Paper beats rock";
    }
    else if (playerSelection === "SISSORS" && computerSelection === "ROCK")
    {
        return "You lose! Rock beats sissors";
    }
    else if (playerSelection === "SISSORS" && computerSelection === "PAPER")
    {
        return "You win! Sissors beats paper";
    }
}
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
