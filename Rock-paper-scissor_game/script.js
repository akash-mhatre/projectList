let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ['Rock', 'paper', 'scissors'];
    const randIntex = Math.floor(Math.random() * 3);
    return options[randIntex];
}
const drawGame = () => {
    msg.innerText = "Game was Draw! Play again!";
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userscorep.innerText = userScore;
        msg.innerText = "You won!";
    }
    else {
        compScore++;
        compscorep.innerText = compScore;
        msg.innerText = "You lost";
    }
}
const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userchoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice == "rock") {
            userWin = compChoice == "paper" ? false : true;

        } else if (userchoice = "paper") {
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);
    })
})
