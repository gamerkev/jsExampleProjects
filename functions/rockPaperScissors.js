//user input
const user = "Rock";

//creating randomized computer input
function randomChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    /* this slightly skews the choices towards scissors since it has the whole range from 2 to 3 inclusive
    but rock only has from 0 inclusive to 1 exclusive and paper only has from 1 inclusive to 2 exclusive
    but I believe it's more efficient than the alternative to write out a few if's with comparison operators*/
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
//generate random computer choice
const computer = randomChoice();

//created 2 helper functions to make it easier and more readable when printing out winner strings
function userWins(user, computer){
    return `User wins, ${user.toLowerCase()} beats ${computer.toLowerCase()}.`;
}
function computerWins(user, computer){
    return `Computer wins, ${computer.toLowerCase()} beats ${user.toLowerCase()}.`;
}

//the game itself
function playGame(user, computer){
    /* if statements for possible games, user===computer separately is an alternative to checking for this
    in each following if statement */
    if (user === computer) return `Draw, both thew ${user.toLowerCase()}.`
    else if (user === 'Rock'){
        if (computer === 'Paper') return computerWins(user, computer);
        else return userWins(user, computer);
    }
    else if (user === 'Paper'){
        if (computer === 'Rock') return userWins(user, computer);
        else return computerWins(user, computer);
    }
    else{
        if (computer === 'Rock') return computerWins(user, computer);
        else return userWins(user, computer);
    }
}

//return the results of the game
console.log(playGame(user, computer));