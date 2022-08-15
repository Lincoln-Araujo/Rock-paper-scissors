// variables
let scorePlayer = 0;

let scoreComputer = 0;

let round = 1;

let options = ['rock', 'paper', 'scissors'];
    
// functions

// computer choice
function computerPlay() {

    let sortedOption = Math.floor(Math.random() * options.length);

    return options[sortedOption];

}

// playing a round
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "paper" && computerSelection == "scissors") {

        scoreComputer++;

        return "You Lose! Scissors cuts paper.";

    } else if ( playerSelection == "scissors" && computerSelection == "rock") {

        scoreComputer++;

        return "You Lose! Rock breaks scissors.";

    } else if ( playerSelection == "rock" && computerSelection == "paper") {

        scoreComputer++;

        return "You Lose! Paper covers rock.";

    } else if ( playerSelection == "paper" && computerSelection == "rock") {

        scorePlayer++;

        return "You Win! Paper covers rock.";

    } else if ( playerSelection == "scissors" && computerSelection == "paper") {

        scorePlayer++;

        return "You Win! Scissors cuts paper.";

    } else if ( playerSelection == "rock" && computerSelection == "scissors") {

        scorePlayer++;

        return "You Win! Rock breaks scissors.";

    } else if ( playerSelection == computerSelection) {

        return "Oh, it's a draw!";

    } else {

        return "You can only choose paper, scissors or rock";

    }
        
}

// main function game
function game() {    

    let playerChoice =  prompt(`Round ${round} - Choose rock, paper or scissors`);

    // preventing user's input error
    playerChoice = playerChoice.toLowerCase();

    let computerSelection = computerPlay(); 

    if (options.includes(playerChoice)) {
        
        while(scorePlayer < 5 || scoreComputer < 5) {

            console.log(`------------ROUND ${round}------------`);

            console.log(`YOU: ${playerChoice} - COMPUTER: ${computerSelection}`);

            console.log(playRound(playerChoice, computerSelection));

            console.log(`------ You: ${scorePlayer} X Computer: ${scoreComputer} ------`);

            console.log(" ");

            round++;

            if (scorePlayer >= 5 && scorePlayer > scoreComputer) {

                alert('You are the winner!');

            } else if (scoreComputer >= 5 && scorePlayer < scoreComputer) {

                alert('Sorry, computer is the winner!');

            } else if (scoreComputer == 5 && scorePlayer == scoreComputer) {

                alert('Oh, it is a draw!');

            } else {

                game();

            }
            
            break;

        }       

    } else {

        console.log("please, choose rock, paper or scissors");

        game();

    }
    
}

console.log("Welcome to Rock, Paper & Scissors game");
console.log("Win 5 rounds to be THE CHAMPION");
alert("Welcome to Rock, Paper & Scissors game, Win 5 rounds to be THE CHAMPION");
alert("Oh, open your browser console to check the results");
console.log(game());