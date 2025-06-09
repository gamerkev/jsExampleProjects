//create a random number from 0-8
const randomNum = Math.random() * 8;
//depending on the value of the number, give one of 8 responses
if(randomNum <= 1){
    console.log('It is decidedly so.');
}
else if(randomNum <= 2){
    console.log('Perhaps.');
}
else if(randomNum <= 3){
    console.log('Absolutely not.');
}
else if(randomNum <= 4){
    console.log('Please try again');
}
else if(randomNum <= 5){
    console.log('You already know the answer.');
}
else if(randomNum <= 6){
    console.log('That isn\'t something you\'re supposed to ask me...');
}
else if(randomNum <= 7){
    console.log('Yes please!');
}
else{
    console.log('Please ask a trusted adult.');
}