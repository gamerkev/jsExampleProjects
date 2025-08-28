////////////////////////////////////////////////////
//   rockPaperScissors but with arrow functions   //
////////////////////////////////////////////////////

const user = 'Rock';

const randomChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Scissors';
    }
}
const computer = randomChoice();

const userWins = (user, computer) => `User wins, ${user.toLowerCase()} beats ${computer.toLowerCase()}.`;
const computerWins = (user, computer) => `Computer wins, ${computer.toLowerCase()} beats ${user.toLowerCase()}.`;

const playGame = (user, computer) => {
    if(user === computer) return `Draw, both threw ${user.toLowerCase()}.`;
    else if (user === 'Rock'){
        if (computer === 'Paper') return computerWins(user, computer);
        else return userWins(user, computer);
    }
    else if (user === 'Paper'){
        if (computer === 'Scissors') return computerWins(user, computer);
        else return userWins(user, computer);
    }
    else if (user === 'Scissors'){
        if (computer === 'Rock') return computerWins(user, computer);
        else return userWins(user, computer);
    }
}

console.log(playGame(user, computer));